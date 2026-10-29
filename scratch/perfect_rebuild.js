const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// 1. Light Mode Variables
css = css.replace('--bg-dark: #0a0e1a;', '--bg-dark: #E6E6E6;');
css = css.replace('--bg-chat: rgba(10, 14, 26, 0.96);', '--bg-chat: #F5F5F5;');
css = css.replace('--bg-header: linear-gradient(135deg, rgba(227, 30, 36, 0.15), rgba(0, 75, 141, 0.10));', '--bg-header: #FFFFFF;');
css = css.replace('--bg-input: rgba(255,255,255,0.05);', '--bg-input: #FFFFFF;');
css = css.replace('--glass: rgba(255,255,255,0.06);', '--glass: rgba(0, 0, 0, 0.08);');

css = css.replace('--text: #ffffff;', '--text: #1E293B;');
css = css.replace('--text-2: #d1d5db;', '--text-2: #475569;');
css = css.replace('--text-3: #9ca3af;', '--text-3: #64748B;');

css = css.replace('--bot-bg: rgba(255, 255, 255, 0.08);', '--bot-bg: #FFFFFF;');
css = css.replace('--bot-border: rgba(255, 255, 255, 0.12);', '--bot-border: rgba(0,0,0,0.08);');
css = css.replace('--user-bg: #E31E24;', '--user-bg: linear-gradient(135deg, #007CC5, #006096);');
css = css.replace('--btn-bg: rgba(227, 30, 36, 0.12);', '--btn-bg: #FFFFFF;');

// 2. Fix Header text contrast
css = css.replace('.header-info h1 { font-size: 13.5px; font-weight: 700; letter-spacing: -0.2px; }', '.header-info h1 { font-size: 13.5px; font-weight: 700; letter-spacing: -0.2px; color: #ffffff; }');
css = css.replace('.status-text { font-size: 10px; color: rgba(255,255,255,0.8); font-weight: 500; }', '.status-text { font-size: 10px; color: #ffffff; font-weight: 500; }');

// 3. Make the logos solid #ED4816
css = css.replace(/background: linear-gradient\\(135deg, #E31E24, #004B8D\\);/g, 'background: #ED4816;');
css = css.replace(/background: conic-gradient\\(from 0deg, #E31E24, #F04248, #004B8D, #E31E24\\);/g, 'background: #ED4816;');
css = css.replace(/background: linear-gradient\\(135deg, #E31E24, #C2191E\\);/g, 'background: #ED4816;');
css = css.replace(/background: linear-gradient\\(135deg, #E31E24, #F04248\\);/g, 'background: #ED4816;');

// 4. White Clear Button
css = css.replace(/\\.clear-btn \\{[^}]*\\}/, '.clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.15); color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }');

// 5. White Bottom Bar (chat-input-area and quick-suggestions)
css = css.replace(/\\.chat-input-area \\{[^}]*\\}/, '.chat-input-area { padding: 6px 10px 10px; border-top: 1px solid var(--glass); background: #ffffff; flex-shrink: 0; }');
css = css.replace(/\\.quick-suggestions \\{[^}]*\\}/, '.quick-suggestions { display: flex; gap: 4px; padding: 10px 10px 8px; overflow-x: auto; flex-shrink: 0; border-top: 1px solid var(--glass); background: #ffffff; }');

fs.writeFileSync('style.css', css);
console.log('Restored perfect layout!');
