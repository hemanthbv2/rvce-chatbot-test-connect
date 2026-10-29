const fs = require('fs');
const path = require('path');

const linksPath = path.join(__dirname, 'extracted_kb_links.json');
const outputPath = path.join(__dirname, '../manual_link_tester.html');

try {
    console.log(`Reading extracted links from: ${linksPath}`);
    const linksJson = fs.readFileSync(linksPath, 'utf8');
    const links = JSON.parse(linksJson);

    console.log(`Generating interactive HTML dashboard for ${links.length} links...`);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RVCE Chatbot — Manual Link Auditing Dashboard</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --bg-dark: #0b0f19;
            --card-bg: rgba(17, 24, 39, 0.7);
            --border-color: rgba(255, 255, 255, 0.08);
            --rvce-red: #E31E24;
            --rvce-blue: #004B8D;
            --accent-glow: rgba(227, 30, 36, 0.15);
            --text-primary: #f3f4f6;
            --text-secondary: #9ca3af;
            --text-muted: #6b7280;
            --success: #10b981;
            --success-glow: rgba(16, 185, 129, 0.15);
            --danger: #ef4444;
            --danger-glow: rgba(239, 68, 68, 0.15);
            --untested: #4b5563;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-primary);
            min-height: 100vh;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(0, 75, 141, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(227, 30, 36, 0.1) 0%, transparent 40%);
            background-attachment: fixed;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(11, 15, 25, 0.5);
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        header {
            background: rgba(11, 15, 25, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-color);
            position: sticky;
            top: 0;
            z-index: 100;
            padding: 1.25rem 2rem;
        }

        .header-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .logo-badge {
            background: linear-gradient(135deg, var(--rvce-red), var(--rvce-blue));
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.25rem;
            color: white;
            box-shadow: 0 4px 15px rgba(227, 30, 36, 0.3);
            font-family: 'Space Grotesk', sans-serif;
        }

        .title-section h1 {
            font-size: 1.35rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            background: linear-gradient(to right, #ffffff, #9ca3af);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .title-section p {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-top: 0.15rem;
        }

        /* Stats Bar */
        .stats-panel {
            background: rgba(17, 24, 39, 0.5);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .stat-value {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.1rem;
            font-weight: 700;
        }

        .stat-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
        }

        .stat-value.total { color: #ffffff; }
        .stat-value.working { color: var(--success); }
        .stat-value.broken { color: var(--danger); }
        .stat-value.untested { color: var(--text-secondary); }

        .progress-container {
            width: 120px;
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
            overflow: hidden;
            position: relative;
        }

        .progress-bar {
            height: 100%;
            background: linear-gradient(to right, var(--rvce-blue), var(--success));
            width: 0%;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Main Layout */
        main {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 2rem;
        }

        /* Sidebar Filters */
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .search-box {
            position: relative;
        }

        .search-input {
            width: 100%;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            padding: 0.75rem 1rem 0.75rem 2.5rem;
            color: white;
            font-family: inherit;
            font-size: 0.9rem;
            outline: none;
            transition: all 0.2s ease;
        }

        .search-input:focus {
            border-color: rgba(227, 30, 36, 0.5);
            box-shadow: 0 0 10px var(--accent-glow);
        }

        .search-icon {
            position: absolute;
            left: 0.85rem;
            top: 50%;
            transform: translateY(-50%);
            fill: var(--text-secondary);
            width: 16px;
            height: 16px;
            pointer-events: none;
        }

        .filter-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.25rem;
            backdrop-filter: blur(10px);
        }

        .filter-card h2 {
            font-size: 0.95rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .filter-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .filter-btn {
            background: transparent;
            border: 1px solid transparent;
            color: var(--text-secondary);
            padding: 0.6rem 0.85rem;
            border-radius: 8px;
            cursor: pointer;
            text-align: left;
            font-family: inherit;
            font-size: 0.88rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.15s ease;
        }

        .filter-btn:hover {
            background: rgba(255, 255, 255, 0.03);
            color: white;
        }

        .filter-btn.active {
            background: linear-gradient(135deg, rgba(0, 75, 141, 0.3), rgba(227, 30, 36, 0.15));
            border-color: rgba(255, 255, 255, 0.1);
            color: white;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .filter-count {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.75rem;
            background: rgba(255, 255, 255, 0.08);
            padding: 0.15rem 0.4rem;
            border-radius: 4px;
            color: var(--text-secondary);
        }

        .filter-btn.active .filter-count {
            background: var(--rvce-red);
            color: white;
        }

        /* Status Filters Quick Select */
        .status-filters {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .status-filter-btn {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0.5rem;
            font-family: inherit;
            font-size: 0.75rem;
            color: var(--text-secondary);
            cursor: pointer;
            text-align: center;
            transition: all 0.15s ease;
        }

        .status-filter-btn:hover {
            background: rgba(255, 255, 255, 0.05);
            color: white;
        }

        .status-filter-btn.active.untested {
            border-color: var(--untested);
            background: rgba(75, 85, 99, 0.2);
            color: white;
        }
        .status-filter-btn.active.working {
            border-color: var(--success);
            background: rgba(16, 185, 129, 0.15);
            color: var(--success);
        }
        .status-filter-btn.active.broken {
            border-color: var(--danger);
            background: rgba(239, 68, 68, 0.15);
            color: var(--danger);
        }

        .utility-btn {
            width: 100%;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            padding: 0.75rem 1rem;
            border-radius: 10px;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.2s ease;
        }

        .utility-btn:hover {
            background: rgba(255, 255, 255, 0.06);
            color: white;
            border-color: rgba(255, 255, 255, 0.15);
        }

        .utility-btn.export {
            background: linear-gradient(135deg, var(--rvce-red), #b91c1c);
            color: white;
            font-weight: 600;
            border: none;
            box-shadow: 0 4px 15px rgba(227, 30, 36, 0.25);
        }

        .utility-btn.export:hover {
            filter: brightness(1.1);
            box-shadow: 0 4px 20px rgba(227, 30, 36, 0.4);
        }

        /* Content Area */
        .content-area {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .listing-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .results-count {
            font-size: 0.95rem;
            color: var(--text-secondary);
        }

        .results-count span {
            font-weight: 600;
            color: white;
        }

        .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        /* Link Card */
        .link-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            backdrop-filter: blur(10px);
            transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .link-card:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        /* Status-specific card borders */
        .link-card.working-state {
            border-left: 4px solid var(--success);
            background: linear-gradient(to right, rgba(16, 185, 129, 0.03), var(--card-bg));
        }

        .link-card.broken-state {
            border-left: 4px solid var(--danger);
            background: linear-gradient(to right, rgba(239, 68, 68, 0.03), var(--card-bg));
        }

        .card-details {
            flex: 1;
            min-width: 0; /* Enable text truncation */
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .card-meta {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-wrap: wrap;
        }

        .badge {
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            padding: 0.15rem 0.5rem;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .badge.category {
            background: rgba(0, 75, 141, 0.15);
            color: #93c5fd;
            border-color: rgba(0, 75, 141, 0.2);
        }

        .badge.context {
            background: rgba(227, 30, 36, 0.1);
            color: #fca5a5;
            border-color: rgba(227, 30, 36, 0.15);
        }

        .card-title {
            font-size: 1.05rem;
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .card-url-container {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-top: 0.15rem;
        }

        .card-url {
            font-size: 0.8rem;
            color: var(--text-secondary);
            text-decoration: none;
            word-break: break-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: color 0.15s ease;
        }

        .card-url:hover {
            color: #93c5fd;
            text-decoration: underline;
        }

        .copy-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.5;
            padding: 2px;
            border-radius: 4px;
            transition: all 0.15s ease;
        }

        .copy-btn:hover {
            opacity: 1;
            background: rgba(255, 255, 255, 0.08);
        }

        .copy-btn svg {
            width: 12px;
            height: 12px;
            fill: var(--text-secondary);
        }

        /* Card Actions */
        .card-actions {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            flex-shrink: 0;
        }

        .btn-test {
            background: linear-gradient(135deg, var(--rvce-blue), #0284c7);
            color: white;
            border: none;
            padding: 0.6rem 1.1rem;
            border-radius: 8px;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.85rem;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.2s ease;
            box-shadow: 0 4px 10px rgba(0, 75, 141, 0.2);
        }

        .btn-test:hover {
            filter: brightness(1.1);
            transform: translateY(-1px);
            box-shadow: 0 4px 14px rgba(0, 75, 141, 0.4);
        }

        .btn-test svg {
            width: 14px;
            height: 14px;
            stroke: currentColor;
            stroke-width: 2.5;
            fill: none;
        }

        .status-pill-group {
            display: flex;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 2px;
            gap: 2px;
        }

        .status-pill {
            background: transparent;
            border: none;
            padding: 0.45rem 0.75rem;
            border-radius: 6px;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--text-secondary);
            transition: all 0.15s ease;
        }

        .status-pill:hover {
            color: white;
            background: rgba(255, 255, 255, 0.03);
        }

        .status-pill.untested.active {
            background: rgba(255, 255, 255, 0.08);
            color: white;
        }

        .status-pill.working.active {
            background: var(--success);
            color: white;
            box-shadow: 0 2px 8px var(--success-glow);
        }

        .status-pill.broken.active {
            background: var(--danger);
            color: white;
            box-shadow: 0 2px 8px var(--danger-glow);
        }

        /* Empty State */
        .empty-state {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 4rem 2rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

        .empty-state-icon {
            font-size: 3rem;
            color: var(--text-muted);
        }

        .empty-state h3 {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .empty-state p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            max-width: 400px;
        }

        /* Overlay Modal for Report */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
        }

        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal {
            background: var(--bg-dark);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            width: 90%;
            max-width: 800px;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            overflow: hidden;
            transform: scale(0.95);
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .modal-overlay.active .modal {
            transform: scale(1);
        }

        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-header h2 {
            font-size: 1.2rem;
            font-weight: 700;
            color: white;
        }

        .btn-close {
            background: transparent;
            border: none;
            cursor: pointer;
            color: var(--text-secondary);
            font-size: 1.5rem;
            line-height: 1;
            padding: 0.25rem;
        }

        .btn-close:hover {
            color: white;
        }

        .modal-body {
            padding: 1.5rem;
            overflow-y: auto;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .modal-body p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            line-height: 1.5;
        }

        .report-textarea {
            width: 100%;
            height: 300px;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1rem;
            color: #34d399; /* Emerald text for terminal/code block look */
            font-family: 'Space Grotesk', monospace;
            font-size: 0.85rem;
            resize: none;
            outline: none;
        }

        .modal-footer {
            padding: 1.25rem 1.5rem;
            border-top: 1px solid var(--border-color);
            display: flex;
            justify-content: flex-end;
            gap: 0.75rem;
        }

        /* Pagination & Lazy Load */
        .load-more-container {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            main {
                grid-template-columns: 1fr;
            }
            .sidebar {
                flex-direction: row;
                flex-wrap: wrap;
            }
            .sidebar > * {
                flex: 1 1 250px;
            }
        }

        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                align-items: stretch;
                gap: 1rem;
            }
            .stats-panel {
                justify-content: space-around;
            }
            .link-card {
                flex-direction: column;
                align-items: stretch;
                gap: 1rem;
            }
            .card-actions {
                justify-content: space-between;
            }
        }
    </style>
</head>
<body>

    <header>
        <div class="header-container">
            <div class="logo-section">
                <div class="logo-badge">RV</div>
                <div class="title-section">
                    <h1>RVCE Chatbot — Manual Link Auditing Dashboard</h1>
                    <p>Testing integrity of 519 unique knowledge base links</p>
                </div>
            </div>
            
            <div class="stats-panel">
                <div class="stat-item">
                    <span class="stat-value total" id="stat-total">519</span>
                    <span class="stat-label">Total Links</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value working" id="stat-working">0</span>
                    <span class="stat-label">Working</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value broken" id="stat-broken">0</span>
                    <span class="stat-label">Broken</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value untested" id="stat-untested">519</span>
                    <span class="stat-label">Untested</span>
                </div>
                <div class="stat-item">
                    <div class="progress-container">
                        <div class="progress-bar" id="progress-bar"></div>
                    </div>
                    <span class="stat-label" style="margin-top: 0.2rem;" id="progress-text">0% Tested</span>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="sidebar">
            <div class="search-box">
                <svg class="search-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <input type="text" class="search-input" id="search-input" placeholder="Search by name, URL, or department...">
            </div>

            <div class="filter-card">
                <h2>Categories</h2>
                <div class="filter-list" id="category-filters">
                    <button class="filter-btn active" data-category="all">
                        <span>All Categories</span>
                        <span class="filter-count" id="count-all">0</span>
                    </button>
                    <!-- Filled dynamically -->
                </div>
            </div>

            <div class="filter-card">
                <h2>Test Status</h2>
                <div class="status-filters">
                    <button class="status-filter-btn active untested" data-status="untested">Untested</button>
                    <button class="status-filter-btn active working" data-status="working">Working</button>
                    <button class="status-filter-btn active broken" data-status="broken">Broken</button>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <button class="utility-btn export" id="btn-export-report">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Export Audit Report
                    </button>
                    
                    <button class="utility-btn" id="btn-reset-data" style="border-color: rgba(239, 68, 68, 0.2); color: #fca5a5;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
                        Reset All Test Data
                    </button>
                </div>
            </div>
        </div>

        <div class="content-area">
            <div class="listing-header">
                <div class="results-count">
                    Showing <span id="displayed-count">0</span> of <span id="filtered-count">0</span> links
                </div>
            </div>

            <div class="grid-container" id="links-grid">
                <!-- Links dynamically inserted -->
            </div>

            <div class="load-more-container">
                <button class="utility-btn" id="btn-load-more" style="width: auto; padding: 0.75rem 2rem;">Load More Links</button>
            </div>
        </div>
    </main>

    <!-- Modal for Export -->
    <div class="modal-overlay" id="report-modal">
        <div class="modal">
            <div class="modal-header">
                <h2>Generated Manual Link Audit Report</h2>
                <button class="btn-close" id="btn-modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Great job! Here is a markdown report summarizing all the broken or problematic links you detected during your manual audit. You can copy this directly and share it to request fixes.</p>
                <textarea class="report-textarea" id="report-text" readonly></textarea>
            </div>
            <div class="modal-footer">
                <button class="utility-btn" id="btn-copy-report" style="background: var(--rvce-blue); color: white; border: none;">
                    Copy Report Content
                </button>
                <button class="utility-btn" id="btn-download-report">
                    Download as file
                </button>
            </div>
        </div>
    </div>

    <script>
        // Inline Links Database
        const LINKS_DB = ${linksJson};

        // UI State management
        const STATE = {
            searchQuery: '',
            selectedCategory: 'all',
            selectedStatuses: {
                untested: true,
                working: true,
                broken: true
            },
            limit: 40,
            offset: 0,
            testResults: {} // Loaded from LocalStorage: { "url_key": "working" | "broken" }
        };

        // Initialize localStorage testResults
        function loadTestResults() {
            const saved = localStorage.getItem('rvce_link_audit_results');
            if (saved) {
                try {
                    STATE.testResults = JSON.parse(saved);
                } catch(e) {
                    STATE.testResults = {};
                }
            }
        }

        function saveTestResults() {
            localStorage.setItem('rvce_link_audit_results', JSON.stringify(STATE.testResults));
            updateStats();
        }

        // Generate a unique identifier for a link card (url + label)
        function getLinkKey(link) {
            return btoa(unescape(encodeURIComponent(link.url.trim() + '||' + link.label.trim())));
        }

        // Categories extraction
        const CATEGORIES = {};
        LINKS_DB.forEach(link => {
            if (!CATEGORIES[link.category]) {
                CATEGORIES[link.category] = 0;
            }
            CATEGORIES[link.category]++;
        });

        // Initialize Category Filter menu
        function initCategoryMenu() {
            const container = document.getElementById('category-filters');
            document.getElementById('count-all').innerText = LINKS_DB.length;

            Object.entries(CATEGORIES).sort((a,b) => b[1] - a[1]).forEach(([cat, count]) => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn';
                btn.setAttribute('data-category', cat);
                btn.innerHTML = \`
                    <span>\${cat}</span>
                    <span class="filter-count">\${count}</span>
                \`;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    STATE.selectedCategory = cat;
                    STATE.offset = 0;
                    renderLinks(true);
                });
                container.appendChild(btn);
            });

            // Set up all button click handler
            document.querySelector('.filter-btn[data-category="all"]').addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                STATE.selectedCategory = 'all';
                STATE.offset = 0;
                renderLinks(true);
            });
        }

        // Update Dashboard Statistics
        function updateStats() {
            let working = 0;
            let broken = 0;
            let total = LINKS_DB.length;

            LINKS_DB.forEach(link => {
                const key = getLinkKey(link);
                const status = STATE.testResults[key];
                if (status === 'working') working++;
                else if (status === 'broken') broken++;
            });

            let untested = total - working - broken;
            let percent = Math.round(((working + broken) / total) * 100) || 0;

            document.getElementById('stat-total').innerText = total;
            document.getElementById('stat-working').innerText = working;
            document.getElementById('stat-broken').innerText = broken;
            document.getElementById('stat-untested').innerText = untested;
            document.getElementById('progress-bar').style.width = \`\${percent}%\`;
            document.getElementById('progress-text').innerText = \`\${percent}% Tested\`;
        }

        // Copy URL utility
        function copyText(text, btn) {
            navigator.clipboard.writeText(text).then(() => {
                const originalSvg = btn.innerHTML;
                btn.innerHTML = \`
                    <svg viewBox="0 0 24 24" style="fill:#10b981">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                \`;
                setTimeout(() => {
                    btn.innerHTML = originalSvg;
                }, 1500);
            });
        }

        // Get Filtered links
        function getFilteredLinks() {
            return LINKS_DB.filter(link => {
                const key = getLinkKey(link);
                const status = STATE.testResults[key] || 'untested';
                
                // Status Filter
                if (!STATE.selectedStatuses[status]) return false;

                // Category Filter
                if (STATE.selectedCategory !== 'all' && link.category !== STATE.selectedCategory) return false;

                // Search Filter
                if (STATE.searchQuery.trim() !== '') {
                    const q = STATE.searchQuery.toLowerCase();
                    const matchName = link.label.toLowerCase().includes(q);
                    const matchUrl = link.url.toLowerCase().includes(q);
                    const matchContext = link.context.toLowerCase().includes(q);
                    const matchCategory = link.category.toLowerCase().includes(q);
                    return matchName || matchUrl || matchContext || matchCategory;
                }

                return true;
            });
        }

        // Render Links to Grid
        function renderLinks(reset = false) {
            const grid = document.getElementById('links-grid');
            if (reset) {
                grid.innerHTML = '';
                STATE.offset = 0;
            }

            const filtered = getFilteredLinks();
            document.getElementById('filtered-count').innerText = filtered.length;

            const slice = filtered.slice(STATE.offset, STATE.offset + STATE.limit);
            STATE.offset += slice.length;

            document.getElementById('displayed-count').innerText = STATE.offset;

            // Load more button visibility
            const loadMoreBtn = document.getElementById('btn-load-more');
            if (STATE.offset >= filtered.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }

            if (filtered.length === 0) {
                grid.innerHTML = \`
                    <div class="empty-state">
                        <span class="empty-state-icon">🔍</span>
                        <h3>No Links Found</h3>
                        <p>No links match your current search query, category, or status filters. Try adjusting your search criteria!</p>
                    </div>
                \`;
                return;
            }

            slice.forEach(link => {
                const key = getLinkKey(link);
                const status = STATE.testResults[key] || 'untested';

                const card = document.createElement('div');
                card.className = \`link-card \${status === 'working' ? 'working-state' : status === 'broken' ? 'broken-state' : ''}\`;
                card.setAttribute('data-key', key);

                card.innerHTML = \`
                    <div class="card-details">
                        <div class="card-meta">
                            <span class="badge category">\${link.category}</span>
                            <span class="badge context">\${link.context}</span>
                        </div>
                        <h3 class="card-title">\${link.label}</h3>
                        <div class="card-url-container">
                            <a href="\${link.url}" target="_blank" class="card-url" title="\${link.url}">\${link.url}</a>
                            <button class="copy-btn" onclick="copyText('\${link.url}', this)" title="Copy URL">
                                <svg viewBox="0 0 24 24">
                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="card-actions">
                        <a href="\${link.url}" target="_blank" class="btn-test" onclick="markAsOpened('\${key}')">
                            <svg viewBox="0 0 24 24">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Test
                        </a>
                        
                        <div class="status-pill-group">
                            <button class="status-pill untested \${status === 'untested' ? 'active' : ''}" onclick="setStatus('\${key}', 'untested')">Reset</button>
                            <button class="status-pill working \${status === 'working' ? 'active' : ''}" onclick="setStatus('\${key}', 'working')">Working</button>
                            <button class="status-pill broken \${status === 'broken' ? 'active' : ''}" onclick="setStatus('\${key}', 'broken')">Broken</button>
                        </div>
                    </div>
                \`;

                grid.appendChild(card);
            });
        }

        // Automatically mark as working when tested (user-friendly optional helper)
        function markAsOpened(key) {
            // Wait slightly then auto-activate untested links to working just as a shortcut
            const current = STATE.testResults[key];
            if (!current || current === 'untested') {
                setTimeout(() => {
                    setStatus(key, 'working');
                }, 1000);
            }
        }

        // Set specific link status
        function setStatus(key, status) {
            const card = document.querySelector(\`.link-card[data-key="\${key}"]\`);
            
            if (status === 'untested') {
                delete STATE.testResults[key];
            } else {
                STATE.testResults[key] = status;
            }

            saveTestResults();

            // Perform partial styling updates on card if currently rendered
            if (card) {
                card.className = \`link-card \${status === 'working' ? 'working-state' : status === 'broken' ? 'broken-state' : ''}\`;
                
                const pills = card.querySelectorAll('.status-pill');
                pills.forEach(p => p.classList.remove('active'));
                
                const activePill = card.querySelector(\`.status-pill.\${status}\`);
                if (activePill) activePill.classList.add('active');
            }
        }

        // Export Markdown Report of broken links
        function exportReport() {
            let working = 0;
            let broken = 0;
            const brokenList = [];

            LINKS_DB.forEach(link => {
                const key = getLinkKey(link);
                const status = STATE.testResults[key];
                if (status === 'working') working++;
                else if (status === 'broken') {
                    broken++;
                    brokenList.push(link);
                }
            });

            let untested = LINKS_DB.length - working - broken;

            let report = \`# RVCE Chatbot — Manual Link Audit Report\\n\`;
            report += \`*Generated on: \${new Date().toLocaleDateString()} | Progress: \${working + broken}/\${LINKS_DB.length} tested (\${Math.round(((working + broken)/LINKS_DB.length)*100)}%)\\n\\n\`;
            
            report += \`## Audit Summary\\n\`;
            report += \`- **Total Links Inspected:** \${LINKS_DB.length}\\n\`;
            report += \`- **Verified Working Links:** \${working} ✅\\n\`;
            report += \`- **Flagged Broken Links:** \${broken} ❌\\n\`;
            report += \`- **Remaining Untested Links:** \${untested} ⏳\\n\\n\`;

            if (brokenList.length === 0) {
                report += \`### 🎉 Awesome! No broken links have been reported yet.\\n\`;
                report += \`Every audited link is performing perfectly!\\n\`;
            } else {
                report += \`## ❌ Flagged Issues / Broken Links (\${brokenList.length})\\n\`;
                report += \`The following links were marked as **Broken** during the manual verification process:\\n\\n\`;
                report += \`| # | Label / Name | Category | Context / Department | Target URL |\\n\`;
                report += \`|---|--------------|----------|----------------------|------------|\\n\`;
                
                brokenList.forEach((link, idx) => {
                    report += \`| \${idx + 1} | \${link.label} | \${link.category} | \${link.context} | [\${link.url}](\${link.url}) |\\n\`;
                });
                
                report += \`\\n--- \\n*End of audit report. Please review these links in Assets Script and fix any broken routing patterns.*\\n\`;
            }

            document.getElementById('report-text').value = report;
            
            const modal = document.getElementById('report-modal');
            modal.classList.add('active');
        }

        // Setup Events
        function setupEvents() {
            // Search Input
            document.getElementById('search-input').addEventListener('input', (e) => {
                STATE.searchQuery = e.target.value;
                STATE.offset = 0;
                renderLinks(true);
            });

            // Status Filter Buttons (Untested, Working, Broken)
            document.querySelectorAll('.status-filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const status = btn.getAttribute('data-status');
                    STATE.selectedStatuses[status] = !STATE.selectedStatuses[status];
                    btn.classList.toggle('active');
                    STATE.offset = 0;
                    renderLinks(true);
                });
            });

            // Load more
            document.getElementById('btn-load-more').addEventListener('click', () => {
                renderLinks(false);
            });

            // Export button
            document.getElementById('btn-export-report').addEventListener('click', exportReport);

            // Modal Close
            document.getElementById('btn-modal-close').addEventListener('click', () => {
                document.getElementById('report-modal').classList.remove('active');
            });

            document.getElementById('report-modal').addEventListener('click', (e) => {
                if (e.target.id === 'report-modal') {
                    document.getElementById('report-modal').classList.remove('active');
                }
            });

            // Copy report
            document.getElementById('btn-copy-report').addEventListener('click', function() {
                const txt = document.getElementById('report-text').value;
                navigator.clipboard.writeText(txt).then(() => {
                    const originalText = this.innerText;
                    this.innerText = 'Copied Successfully! ✅';
                    setTimeout(() => {
                        this.innerText = originalText;
                    }, 2000);
                });
            });

            // Download Report
            document.getElementById('btn-download-report').addEventListener('click', () => {
                const text = document.getElementById('report-text').value;
                const blob = new Blob([text], { type: 'text/markdown' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'rvce_manual_link_audit_report.md';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });

            // Reset data
            document.getElementById('btn-reset-data').addEventListener('click', () => {
                if (confirm('Are you absolutely sure you want to clear your manual testing progress? This will reset all 519 links back to Untested.')) {
                    STATE.testResults = {};
                    saveTestResults();
                    renderLinks(true);
                }
            });
        }

        // Bootstrapping
        window.addEventListener('DOMContentLoaded', () => {
            loadTestResults();
            initCategoryMenu();
            updateStats();
            renderLinks(true);
            setupEvents();
        });
    </script>
</body>
</html>`;

    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    console.log(`\nSuccessfully created standalone dashboard: ${outputPath}`);

} catch (error) {
    console.error('Error during generation:', error);
}
