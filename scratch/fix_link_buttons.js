const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

// 1. Restore the missing CSS block that got deleted:
const missingCss = \`
.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce { 0%,60%,100% { transform: translateY(0); opacity: 0.3; } 30% { transform: translateY(-5px); opacity: 1; } }

/* === SUGGESTIONS === */
.quick-suggestions {
    display: flex; gap: 4px; padding: 10px 10px 8px;
    overflow-x: auto; flex-shrink: 0;
    border-top: 1px solid var(--glass);
    background: #ffffff;
}
.quick-suggestions::-webkit-scrollbar { height: 4px; }
.quick-suggestions::-webkit-scrollbar-track { background: transparent; }
.quick-suggestions::-webkit-scrollbar-thumb { background: rgba(0, 124, 197, 0.2); border-radius: 4px; }
.suggestion-chip {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 6px 12px; font-size: 12px; font-weight: 600;
    font-family: 'Inter', sans-serif; color: var(--text-2);
    background: rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.1);
    border-radius: 16px; cursor: pointer; white-space: nowrap; flex-shrink: 0;
    transition: all 0.2s;
}
.suggestion-chip:hover { background: rgba(0, 124, 197, 0.1); border-color: rgba(0, 124, 197, 0.25); color: var(--text); }

/* === INPUT === */
.chat-input-area { padding: 6px 10px 10px; border-top: 1px solid var(--glass); background: #ffffff; flex-shrink: 0; }
.typeahead-container { position: absolute; bottom: 100%; left: 10px; right: 10px; background: rgba(10,15,30,0.95); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(0,0,0,0.05); border-radius: 12px 12px 0 0; max-height: 200px; overflow-y: auto; z-index: 10; display: flex; flex-direction: column; box-shadow: 0 -4px 15px rgba(0,0,0,0.3); }
.typeahead-container.hidden { display: none; }
.typeahead-item { padding: 10px 15px; color: var(--text); cursor: pointer; font-size: 13px; border-bottom: 1px solid rgba(0,0,0,0.05); transition: background 0.2s; }
.typeahead-item:last-child { border-bottom: none; }
.typeahead-item:hover { background: rgba(0, 124, 197, 0.2); }
\`;

if (!css.includes('.chat-input-area {')) {
    css = css.replace('.typing-dots span { width: 5px; height: 5px; border-radius: 50%; background: var(--primary-light); animation: bounce 1.4s ease-in-out infinite; }', '.typing-dots span { width: 5px; height: 5px; border-radius: 50%; background: var(--primary-light); animation: bounce 1.4s ease-in-out infinite; }\\n' + missingCss);
}

// 2. Fix the link buttons (.act-btn) to use Blue (#007CC5) instead of var(--secondary)
css = css.replace(/\\.act-btn \\{[^}]*\\}/, \`.act-btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 14px; font-size: 13px; font-weight: 600;
    font-family: 'Inter', sans-serif; color: #007CC5;
    background: var(--btn-bg); border: 1px solid rgba(0, 124, 197, 0.3);
    border-radius: 20px; cursor: pointer; white-space: nowrap;
    transition: all 0.2s var(--ease);
    text-decoration: none;
}\`);

css = css.replace(/\\.act-btn:hover \\{[^}]*\\}/, \`.act-btn:hover { background: rgba(0, 124, 197, 0.1); border-color: #007CC5; color: #007CC5; transform: translateY(-1px); box-shadow: 0 3px 10px rgba(0, 124, 197, 0.2); }\`);

// Fix link tags inside bubbles to be blue as well
css = css.replace(/\\.msg-bubble a \\{[^}]*\\}/, \`.msg-bubble a {
    color: #007CC5;
    font-weight: 700;
    text-decoration: underline;
    transition: opacity 0.2s;
}\`);

fs.writeFileSync(path, css);
console.log('Restored deleted blocks and updated link buttons to Blue!');
