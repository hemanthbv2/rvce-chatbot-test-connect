const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

// Fix .chat-input-area to be white
css = css.replace('.chat-input-area { padding: 6px 10px 10px; border-top: 1px solid var(--glass); background: rgba(5,5,16,0.5); flex-shrink: 0; }', '.chat-input-area { padding: 6px 10px 10px; border-top: 1px solid var(--glass); background: #ffffff; flex-shrink: 0; }');

// Add background to .quick-suggestions
css = css.replace('.quick-suggestions {\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\n    overflow-x: auto; flex-shrink: 0;\\n    border-top: 1px solid var(--glass);\\n}', '.quick-suggestions {\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\n    overflow-x: auto; flex-shrink: 0;\\n    border-top: 1px solid var(--glass);\\n    background: #ffffff;\\n}');

// Just in case it has different spacing:
css = css.replace(/\\.quick-suggestions \\{[\\s\\S]*?border-top: 1px solid var\\(--glass\\);\\n\\}/, '.quick-suggestions {\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\n    overflow-x: auto; flex-shrink: 0;\\n    border-top: 1px solid var(--glass);\\n    background: #ffffff;\\n}');

// Fix clear button to be white
css = css.replace(/\\.clear-btn \\{[^}]*\\}/, '.clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.15); color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }');

fs.writeFileSync(path, css);
console.log('Fixed bottom bar and clear button flawlessly!');
