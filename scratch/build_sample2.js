const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// The Ultimate Premium Dark Glassmorphism Theme
css = css.replace('--bg-dark: #0a0e1a;', '--bg-dark: #0A0A0A;'); // True dark
css = css.replace('--bg-chat: rgba(10, 14, 26, 0.96);', '--bg-chat: #0F0F0F;');
css = css.replace('--bg-header: linear-gradient(135deg, rgba(227, 30, 36, 0.15), rgba(0, 75, 141, 0.10));', '--bg-header: rgba(15, 15, 15, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05);');
css = css.replace('--bg-input: rgba(255,255,255,0.05);', '--bg-input: rgba(255,255,255,0.03);');
css = css.replace('--glass: rgba(255,255,255,0.06);', '--glass: rgba(255, 255, 255, 0.05);');

css = css.replace('--text: #ffffff;', '--text: #E5E5E5;');
css = css.replace('--text-2: #d1d5db;', '--text-2: #A3A3A3;');
css = css.replace('--text-3: #9ca3af;', '--text-3: #737373;');

css = css.replace('--bot-bg: rgba(255, 255, 255, 0.08);', '--bot-bg: rgba(255, 255, 255, 0.04);');
css = css.replace('--bot-border: rgba(255, 255, 255, 0.12);', '--bot-border: rgba(255, 255, 255, 0.08);');
css = css.replace('--btn-bg: rgba(227, 30, 36, 0.12);', '--btn-bg: rgba(255, 255, 255, 0.03);');
css = css.replace('--btn-border: rgba(255,255,255,0.08);', '--btn-border: rgba(255, 255, 255, 0.1);');

css = css.replace('--user-bg: #E31E24;', '--user-bg: linear-gradient(135deg, #007CC5, #005A93);'); 

css = css.replace(/\\.act-btn \\{[^}]*\\}/, ".act-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; font-size: 13px; font-weight: 500; font-family: \"Inter\", sans-serif; color: #E5E5E5; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; cursor: pointer; white-space: nowrap; transition: all 0.3s ease; text-decoration: none; box-shadow: 0 2px 10px rgba(0,0,0,0.2); }");
css = css.replace(/\\.act-btn:hover \\{[^}]*\\}/, ".act-btn:hover { background: rgba(255,255,255,0.08); border-color: #ED4816; color: #ED4816; transform: translateY(-2px); box-shadow: 0 4px 15px rgba(237, 72, 22, 0.2); }");

css = css.replace(/\\.act-btn\\.lk \\{[^}]*\\}/, ".act-btn.lk { background: rgba(0, 124, 197, 0.1); border-color: rgba(0, 124, 197, 0.3); color: #33A1DB; }");
css = css.replace(/\\.act-btn\\.lk:hover \\{[^}]*\\}/, ".act-btn.lk:hover { background: rgba(0, 124, 197, 0.2); border-color: #007CC5; color: #fff; }");

css = css.replace(/\\.act-btn\\.mn \\{[^}]*\\}/, ".act-btn.mn { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); color: #A3A3A3; }");
css = css.replace(/\\.act-btn\\.mn:hover \\{[^}]*\\}/, ".act-btn.mn:hover { background: rgba(255,255,255,0.1); border-color: #A3A3A3; color: #fff; }");

css = css.replace(/\\.chat-input-area \\{[^}]*\\}/, ".chat-input-area { padding: 10px 15px 15px; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(15,15,15,0.9); backdrop-filter: blur(10px); flex-shrink: 0; }");

css = css.replace(/\\.input-wrapper \\{[^}]*\\}/, ".input-wrapper { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 6px 14px; transition: all 0.3s; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); }");

css = css.replace(/\\.send-btn \\{[^}]*\\}/, ".send-btn { width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, #ED4816, #D83A0E); border: none; color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(237, 72, 22, 0.4); }");

fs.writeFileSync('style.css', css);
fs.writeFileSync('style-sample-2.css', css);
console.log('Sample 2 Built successfully!');
