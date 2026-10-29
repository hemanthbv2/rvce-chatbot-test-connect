/* =========================================================
   RVCE Admin Dashboard — Script Logic (script.js)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Dummy Telemetry Logs Dataset
    const CONVERSATION_LOGS = [
        { session: '#sid_9a8f12c', query: 'what is cse placement statistics 2026', intent: 'plcmt_cs_core', type: 'exact', status: 'Resolved', time: '2 mins ago' },
        { session: '#sid_7b2e91a', query: 'who is placement director', intent: 'placement_director', type: 'exact', status: 'Resolved', time: '5 mins ago' },
        { session: '#sid_3c4d51f', query: 'what is management quota fee for aiml', intent: 'fees', type: 'keyword', status: 'Resolved', time: '12 mins ago' },
        { session: '#sid_8e1f02b', query: 'who is dean of academics', intent: 'dean_academics', type: 'exact', status: 'Resolved', time: '18 mins ago' },
        { session: '#sid_1a9c43d', query: 'is rvce autonomous affiliated to vtu', intent: 'autonomous', type: 'exact', status: 'Resolved', time: '25 mins ago' },
        { session: '#sid_5f6a89e', query: 'tell me about hostel mess food menu', intent: 'mess', type: 'keyword', status: 'Pending', time: '34 mins ago' },
        { session: '#sid_2d4b78c', query: 'what is cutoff rank for ISE in kcet', intent: 'cutoffs', type: 'exact', status: 'Resolved', time: '45 mins ago' },
        { session: '#sid_9e0f31a', query: 'can I bring my personal vehicle to campus', intent: 'parking', type: 'keyword', status: 'Resolved', time: '1 hour ago' },
        { session: '#sid_4a3b82c', query: 'how to apply for refund if I cancel seat', intent: 'refund_policy', type: 'exact', status: 'Escalated', time: '2 hours ago' },
        { session: '#sid_6c1d94e', query: 'what are the coe research centers', intent: 'centres_of_excellence', type: 'exact', status: 'Resolved', time: '3 hours ago' }
    ];

    // 1. Sidebar & Tab Navigation Engine
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const pageTitle = document.getElementById('page-title');

    const toggleSidebar = () => sidebar.classList.toggle('open');
    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    if (closeSidebar) closeSidebar.addEventListener('click', toggleSidebar);

    const tabTitles = {
        overview: 'Dashboard Overview',
        conversations: 'Conversations Log',
        settings: 'Bot Configuration'
    };

    function switchTab(targetTab) {
        navItems.forEach(item => {
            if (item.dataset.tab === targetTab) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        tabContents.forEach(tab => {
            if (tab.id === `tab-${targetTab}`) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        if (pageTitle && tabTitles[targetTab]) {
            pageTitle.textContent = tabTitles[targetTab];
        }

        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(item.dataset.tab);
        });
    });

    document.querySelectorAll('[data-switch-tab]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(btn.dataset.switchTab);
        });
    });

    // 2. Chart.js Graphs Initialization
    let trafficChart, categoryChart;

    function initCharts() {
        const trafficCtx = document.getElementById('trafficChart')?.getContext('2d');
        const categoryCtx = document.getElementById('categoryChart')?.getContext('2d');

        if (trafficCtx) {
            const gradient = trafficCtx.createLinearGradient(0, 0, 0, 260);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
            gradient.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

            trafficChart = new Chart(trafficCtx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Chat Volume',
                        data: [320, 450, 410, 580, 620, 710, 750],
                        borderColor: '#6366f1',
                        borderWidth: 3,
                        backgroundColor: gradient,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#6366f1',
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
                        y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
                    }
                }
            });
        }

        if (categoryCtx) {
            categoryChart = new Chart(categoryCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Placements', 'Admissions & Fees', 'Faculty & HODs', 'Hostels & Mess', 'Others'],
                    datasets: [{
                        data: [38, 26, 18, 12, 6],
                        backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#64748b'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { color: '#94a3b8', boxWidth: 12, font: { size: 11 } }
                        }
                    },
                    cutout: '70%'
                }
            });
        }
    }

    // 3. Render Logs Tables
    function renderOverviewTable() {
        const body = document.getElementById('overview-table-body');
        if (!body) return;

        body.innerHTML = CONVERSATION_LOGS.slice(0, 5).map(log => `
            <tr>
                <td><strong>${log.session}</strong></td>
                <td>"${log.query}"</td>
                <td><code>${log.intent}</code></td>
                <td><span class="badge ${log.status.toLowerCase()}">${log.status}</span></td>
                <td>${log.time}</td>
            </tr>
        `).join('');
    }

    function renderFullLogsTable(filterText = '', filterStatus = 'all') {
        const body = document.getElementById('full-logs-table-body');
        if (!body) return;

        const filtered = CONVERSATION_LOGS.filter(log => {
            const matchesText = log.query.toLowerCase().includes(filterText.toLowerCase()) ||
                                log.intent.toLowerCase().includes(filterText.toLowerCase()) ||
                                log.session.toLowerCase().includes(filterText.toLowerCase());
            const matchesStatus = filterStatus === 'all' || log.status.toLowerCase() === filterStatus.toLowerCase();
            return matchesText && matchesStatus;
        });

        if (filtered.length === 0) {
            body.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #94a3b8; padding: 24px;">No matching conversation logs found</td></tr>`;
            return;
        }

        body.innerHTML = filtered.map(log => `
            <tr>
                <td><strong>${log.session}</strong></td>
                <td>"${log.query}"</td>
                <td><code>${log.intent}</code></td>
                <td><span class="badge type">${log.type}</span></td>
                <td><span class="badge ${log.status.toLowerCase()}">${log.status}</span></td>
                <td>${log.time}</td>
            </tr>
        `).join('');
    }

    // 4. Live Search & Filter Controls
    const logSearchInput = document.getElementById('log-search');
    const logStatusFilter = document.getElementById('log-status-filter');
    const btnExportCSV = document.getElementById('btn-export-csv');

    function updateLogsFilter() {
        const query = logSearchInput ? logSearchInput.value : '';
        const status = logStatusFilter ? logStatusFilter.value : 'all';
        renderFullLogsTable(query, status);
    }

    if (logSearchInput) logSearchInput.addEventListener('input', updateLogsFilter);
    if (logStatusFilter) logStatusFilter.addEventListener('change', updateLogsFilter);

    if (btnExportCSV) {
        btnExportCSV.addEventListener('click', () => {
            const headers = ['Session ID', 'User Query', 'Matched Intent', 'Match Type', 'Status', 'Timestamp'];
            const rows = CONVERSATION_LOGS.map(l => [l.session, `"${l.query}"`, l.intent, l.type, l.status, l.time]);
            const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'rvce_chatbot_logs.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('Exported logs to CSV!');
        });
    }

    // 5. Toast Notifications & Settings Handler
    const toast = document.getElementById('toast');
    const settingsForm = document.getElementById('settings-form');

    function showToast(message = 'Settings saved successfully!') {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Bot configuration updated & saved!');
        });
    }

    const btnRefresh = document.getElementById('btn-refresh');
    if (btnRefresh) {
        btnRefresh.addEventListener('click', () => {
            showToast('Analytics refreshed!');
        });
    }

    // Initialize
    initCharts();
    renderOverviewTable();
    renderFullLogsTable();
});
