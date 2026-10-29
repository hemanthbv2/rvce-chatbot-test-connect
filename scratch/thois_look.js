const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace('--bg-dark: #0a0e1a;', '--bg-dark: #E6E6E6;');
css = css.replace('--bg-chat: rgba(10, 14, 26, 0.96);', '--bg-chat: #F5F5F5;');
css = css.replace('--bg-header: linear-gradient(135deg, rgba(227, 30, 36, 0.15), rgba(0, 75, 141, 0.10));', '--bg-header: #007CC5;');
css = css.replace('--bg-input: rgba(255,255,255,0.05);', '--bg-input: #FFFFFF;');
css = css.replace('--glass: rgba(255,255,255,0.06);', '--glass: rgba(0, 0, 0, 0.15);');

css = css.replace('--text: #ffffff;', '--text: #111827;');
css = css.replace('--text-2: #d1d5db;', '--text-2: #374151;');
css = css.replace('--text-3: #9ca3af;', '--text-3: #4b5563;');

css = css.replace('--bot-bg: rgba(255, 255, 255, 0.08);', '--bot-bg: #FFFFFF;');
css = css.replace('--bot-border: rgba(255, 255, 255, 0.12);', '--bot-border: rgba(0,0,0,0.15);');
css = css.replace('--btn-bg: rgba(227, 30, 36, 0.12);', '--btn-bg: #f3f4f6;');
css = css.replace('--btn-border: rgba(255,255,255,0.08);', '--btn-border: rgba(0,0,0,0.2);');

css = css.replace('.header-info h1 { font-size: 13.5px; font-weight: 700; letter-spacing: -0.2px; }', '.header-info h1 { font-size: 13.5px; font-weight: 700; letter-spacing: -0.2px; color: #ffffff; }');
css = css.replace('.status-text { font-size: 10px; color: rgba(255,255,255,0.8); font-weight: 500; }', '.status-text { font-size: 10px; color: #ffffff; font-weight: 500; }');

css = css.replace(/\\.act-btn \\{[^}]*\\}/, ".act-btn { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; font-size: 13px; font-weight: 600; font-family: \"Inter\", sans-serif; color: #111827; background: #f3f4f6; border: 1px solid #9ca3af; border-radius: 4px; cursor: pointer; white-space: nowrap; transition: all 0.2s var(--ease); text-decoration: none; }");
css = css.replace(/\\.act-btn:hover \\{[^}]*\\}/, ".act-btn:hover { background: #e5e7eb; border-color: #4b5563; }");

css = css.replace(/\\.act-btn\\.lk \\{[^}]*\\}/, ".act-btn.lk { background: transparent; border: none; color: #007CC5; text-decoration: underline; padding: 2px 4px; font-weight: normal; }");
css = css.replace(/\\.act-btn\\.lk:hover \\{[^}]*\\}/, ".act-btn.lk:hover { background: transparent; border-color: transparent; opacity: 0.8; }");

css = css.replace(/\\.act-btn\\.mn \\{[^}]*\\}/, ".act-btn.mn { background: #f3f4f6; border: 1px solid #9ca3af; color: #111827; }");
css = css.replace(/\\.act-btn\\.mn:hover \\{[^}]*\\}/, ".act-btn.mn:hover { background: #e5e7eb; border-color: #4b5563; }");

css = css.replace(/\\.stat-chip \\{[^}]*\\}/, ".stat-chip { display: flex; align-items: center; gap: 3px; padding: 4px 8px; background: #f3f4f6; border: 1px solid #000000; border-radius: 4px; font-size: 11px; font-weight: 600; color: #000000; white-space: nowrap; flex-shrink: 0; transition: all 0.2s; }");

css = css.replace(/\\.chat-input-area \\{[^}]*\\}/, ".chat-input-area { padding: 6px 10px 10px; border-top: 1px solid var(--glass); background: #ffffff; flex-shrink: 0; }");
css = css.replace(/\\.quick-suggestions \\{[^}]*\\}/, ".quick-suggestions { display: flex; gap: 4px; padding: 10px 10px 8px; overflow-x: auto; flex-shrink: 0; border-top: 1px solid var(--glass); background: #ffffff; }");

css = css.replace(/\\.msg-bubble a \\{[^}]*\\}/, ".msg-bubble a { color: #007CC5; font-weight: 700; text-decoration: underline; transition: opacity 0.2s; }");

fs.writeFileSync('style.css', css);
console.log('Restored THOIS look exactly!');
