/**
 * RVCE Telemetry Engine - High-Performance Dual Write Architecture
 *
 * Lightweight, zero-overhead telemetry for RV College of Engineering (RVCE).
 * Transmits real-time analytics & interaction telemetry to two endpoints:
 *  1. WordPress REST API  -> MySQL DB -> In-Plugin WP Admin Dashboard (/wp-json/rvce/v1/logs)
 *  2. Central Node.js API  -> MongoDB  -> External Multi-Institute Dashboard (/api/logs)
 *
 * Performance Optimized:
 *  - Fully disabled in Elementor / visual page builders
 *  - Zero unthrottled mouseover/scroll event listeners
 *  - Passive click listeners scoped to chatbot UI
 *  - Efficient 15-second queue flushing with lock
 */

(function () {
    // 1. Never run inside Elementor editor or page builders
    if (
        typeof window !== 'undefined' && (
            window.location.search.includes('elementor-preview') ||
            window.location.search.includes('action=elementor') ||
            window.location.search.includes('elementor_library') ||
            window.location.search.includes('fl_builder') ||
            window.location.search.includes('et_fb') ||
            window.location.search.includes('ct_builder') ||
            window.location.search.includes('bricks') ||
            (window.parent !== window && (window.location.search.includes('preview') || document.body?.classList.contains('elementor-editor-active')))
        )
    ) {
        return;
    }

    const SESSION_ID = 'sess_rvce_' + Math.random().toString(36).substr(2, 9);
    const PAGE_LOAD_TIME = Date.now();
    let telemetryQueue = [];
    let isFlushing = false;

    // Helper to retrieve WordPress localized endpoints
    function getEndpoints() {
        const wpRestUrl = (window.rvceChatbotSettings && window.rvceChatbotSettings.restUrl)
            ? window.rvceChatbotSettings.restUrl.replace(/\/$/, '')
            : '';
        const vercelUrl = (window.rvceChatbotSettings && window.rvceChatbotSettings.vercelUrl)
            ? window.rvceChatbotSettings.vercelUrl.replace(/\/$/, '')
            : '';
        return { wpRestUrl, vercelUrl };
    }

    // Helper to determine active sub-portal (Main, Departments, Alumni/Library)
    function getSubsite() {
        const configured = (window.rvceChatbotSettings && window.rvceChatbotSettings.subsite)
            ? String(window.rvceChatbotSettings.subsite).toLowerCase().trim()
            : 'auto';
        if (configured && configured !== 'auto') {
            return configured;
        }
        // Automatic URL pattern classification
        const path = (window.location.pathname || '').toLowerCase();
        const host = (window.location.hostname || '').toLowerCase();
        const href = (window.location.href || '').toLowerCase();
        if (path.includes('/department') || path.includes('/dept') || host.includes('dept') || href.includes('/department/')) {
            return 'departments';
        }
        if (path.includes('/alumni') || path.includes('/library') || host.includes('alumni') || host.includes('library') || href.includes('/alumni') || href.includes('/library')) {
            return 'alumni';
        }
        return 'main';
    }

    // Core event tracking dispatcher
    function trackEvent(eventType, eventData = {}, immediate = false) {
        const subsite = getSubsite();
        const logEntry = {
            sessionId: SESSION_ID,
            timestamp: new Date().toISOString(),
            eventType: eventType,
            url: window.location.href,
            subsite: subsite,
            data: { ...eventData, subsite: subsite }
        };
        telemetryQueue.push(logEntry);

        if (window.rvceChatbotDebug) {
            console.log(`[RVCE Telemetry] [${subsite}] ${eventType}`, logEntry);
        }

        // High-priority events flush immediately to ensure real-time analytics
        if (immediate || eventType === 'message' || eventType === 'form_submit' || eventType === 'page_load') {
            flushQueue();
        }
    }

    // Expose globally for Chatbot Engine (script.js)
    window.rvceTrackEvent = trackEvent;
    window.rvceGetSubsite = getSubsite;

    // Track Button & Chip Clicks inside Chatbot
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!target) return;
        const btn = target.closest('button') || target.closest('a') || target.closest('.suggestion-chip');
        if (!btn) return;

        // Only track clicks inside the chatbot or explicit tracking attributes
        const isChatbot = btn.closest('#rvce-chatbot-root') !== null;
        const isTracked = btn.hasAttribute('data-rvce-track') || btn.classList.contains('suggestion-chip');

        if (isChatbot || isTracked) {
            const elementId = btn.id || btn.getAttribute('data-query') || btn.className || 'action_button';
            const elementText = (btn.innerText || btn.textContent || '').substring(0, 40).trim();
            trackEvent('click', { elementId, elementText });
        }
    }, { passive: true });

    // Track Copied Text from chatbot
    document.addEventListener('copy', () => {
        const sel = window.getSelection();
        if (!sel || !sel.rangeCount) return;
        const node = sel.anchorNode;
        if (node && node.parentElement && node.parentElement.closest('#rvce-chatbot-root')) {
            const text = sel.toString();
            if (text) {
                trackEvent('copy', { length: text.length, snippet: text.substring(0, 60) });
            }
        }
    }, { passive: true });

    // Dual-Write Transmission
    async function sendBatch(batch) {
        if (!batch || batch.length === 0) return;
        const { wpRestUrl, vercelUrl } = getEndpoints();
        const subsite = getSubsite();

        const payload = JSON.stringify({
            institute_id: 'rvce',
            instituteId: 'rvce',
            subsite: subsite,
            site_category: subsite,
            api_key: 'rvce_key_12345',
            apiKey: 'rvce_key_12345',
            sessionId: SESSION_ID,
            events: batch
        });

        const requests = [];

        // 1. WordPress REST API (Local WP MySQL database)
        if (wpRestUrl) {
            requests.push(
                fetch(wpRestUrl + '/logs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: payload
                })
                .then(r => { if (!r.ok) throw new Error('WP status ' + r.status); })
                .catch(() => { /* silent graceful failover */ })
            );
        }

        // 2. Central Backend API (Node.js Express / MongoDB Atlas)
        const centralBase = vercelUrl || (
            (window.location.protocol === 'http:' || window.location.protocol === 'https:')
                ? window.location.origin
                : 'http://localhost:3002'
        );

        if (centralBase) {
            requests.push(
                fetch(centralBase.replace(/\/+$/, '') + '/api/logs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: payload
                })
                .then(r => { if (!r.ok) throw new Error('Central status ' + r.status); })
                .catch(() => { /* silent graceful failover */ })
            );
        }

        try {
            await Promise.allSettled(requests);
        } catch(e) {}
    }

    async function flushQueue() {
        if (isFlushing || telemetryQueue.length === 0) return;
        isFlushing = true;
        const batch = [...telemetryQueue];
        telemetryQueue = [];
        try {
            await sendBatch(batch);
        } finally {
            isFlushing = false;
        }
    }

    // Flush batch every 15 seconds
    setInterval(flushQueue, 15000);

    // Final flush on window beforeunload
    window.addEventListener('beforeunload', () => {
        if (telemetryQueue.length === 0) return;
        const batch = [...telemetryQueue];
        telemetryQueue = [];
        const { vercelUrl } = getEndpoints();
        const subsite = getSubsite();
        const centralBase = vercelUrl || (
            (window.location.protocol === 'http:' || window.location.protocol === 'https:')
                ? window.location.origin
                : 'http://localhost:3002'
        );
        const payload = JSON.stringify({
            institute_id: 'rvce',
            instituteId: 'rvce',
            subsite: subsite,
            site_category: subsite,
            api_key: 'rvce_key_12345',
            sessionId: SESSION_ID,
            events: batch
        });
        if (navigator.sendBeacon && centralBase) {
            navigator.sendBeacon(centralBase.replace(/\/+$/, '') + '/api/logs', payload);
        }
    });

    // Queue initial page context without immediate network dispatch.
    // Transmitted cleanly together when the user interacts with the chatbot.
    telemetryQueue.push({
        sessionId: SESSION_ID,
        timestamp: new Date().toISOString(),
        eventType: 'page_load',
        url: window.location.href,
        subsite: getSubsite(),
        data: {
            title: document.title,
            referrer: document.referrer || 'direct',
            screen: `${window.innerWidth}x${window.innerHeight}`,
            subsite: getSubsite()
        }
    });
})();
