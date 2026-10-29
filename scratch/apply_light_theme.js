const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

// Replace Root Variables
css = css.replace(/:root\s*\{([\s\S]*?)\}/, `:root {
    /* RVCE Brand Colors — matched to rvce.edu.in */
    --primary: #E31E24;
    --primary-light: #F04248;
    --primary-dark: #C2191E;
    --secondary: #004B8D;
    --secondary-light: #1A6BB5;
    --primary-glow: rgba(227, 30, 36, 0.15);
    --secondary-glow: rgba(0, 75, 141, 0.15);

    /* Backgrounds - Light Theme */
    --bg-dark: #f0f2f5;
    --bg-chat: rgba(255, 255, 255, 0.98);
    --bg-header: #ffffff;
    --bg-input: #f8fafc;
    --glass: rgba(0, 0, 0, 0.08);

    /* Text */
    --text: #1e293b;
    --text-2: #475569;
    --text-3: #64748b;

    /* Semantic */
    --emerald: #10b981;
    --rose: #f43f5e;
    --amber: #f59e0b;

    /* Chat-specific */
    --bot-bg: #f1f5f9;
    --bot-border: #e2e8f0;
    --user-bg: #E31E24;
    --btn-bg: #ffffff;
    --btn-border: #cbd5e1;
    --warn-bg: rgba(244,63,94,0.05);
    --warn-border: rgba(244,63,94,0.2);
    --spring: cubic-bezier(0.34,1.56,0.64,1);
    --ease: cubic-bezier(0.4,0,0.2,1);
}`);

// Fix transparent white to transparent black or gray for light theme
css = css.replace(/rgba\(255,255,255,0\.04\)/g, 'rgba(0,0,0,0.04)');
css = css.replace(/rgba\(255,255,255,0\.06\)/g, 'rgba(0,0,0,0.06)');
css = css.replace(/rgba\(255,255,255,0\.03\)/g, 'rgba(0,0,0,0.03)');
css = css.replace(/rgba\(255,255,255,0\.05\)/g, 'rgba(0,0,0,0.05)');
css = css.replace(/rgba\(255,255,255,0\.07\)/g, 'rgba(0,0,0,0.07)');
css = css.replace(/rgba\(255,255,255,0\.1\)/g, 'rgba(0,0,0,0.1)');
css = css.replace(/rgba\(255,255,255,0\.12\)/g, 'rgba(0,0,0,0.12)');
css = css.replace(/rgba\(255,255,255,0\.08\)/g, 'rgba(0,0,0,0.05)'); // for bot borders/bg
css = css.replace(/rgba\(255,255,255,0\.02\)/g, 'rgba(0,0,0,0.02)');

// Fix specific component colors
css = css.replace(/color: #fff;\s*cursor: pointer;\s*white-space: nowrap;/g, 'color: var(--secondary); cursor: pointer; white-space: nowrap;'); // .act-btn
css = css.replace(/\.act-btn \{([\s\S]*?)color: #fff;/g, '.act-btn {$1color: var(--secondary);');
css = css.replace(/\.act-btn:hover \{([\s\S]*?)color: #fff;/g, '.act-btn:hover {$1color: var(--primary);');

css = css.replace(/\.msg-bubble a \{\s*color: #ffffff;/g, '.msg-bubble a {\n    color: var(--secondary);');

css = css.replace(/color: var\(--text-3\);\s*display: flex;\s*align-items: center;\s*justify-content: center;\s*cursor: pointer;\s*transition: all 0\.2s;\s*\}/g, 'color: var(--text-3); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; } /* updated */');

// Remove forced white text on hod-card head info since we use var(--text)
css = css.replace(/\.hod-head-info h3 \{\s*font-size: 18px;\s*font-weight: 800;\s*color: #fff;/g, '.hod-head-info h3 { font-size: 18px; font-weight: 800; color: var(--text);');

fs.writeFileSync(path, css);
console.log('Successfully updated style.css for light theme!');
