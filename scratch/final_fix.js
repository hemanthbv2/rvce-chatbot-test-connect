const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

css = css.replace(/background: linear-gradient\\([^\\)]*\\);/g, function(match) {
    if (match.includes('#007CC5') || match.includes('#ED4816') || match.includes('#E31E24')) {
        return 'background: #ED4816;';
    }
    return match;
});

css = css.replace(/background: conic-gradient\\([^\\)]*\\);/g, function(match) {
    if (match.includes('#ED4816') || match.includes('#E31E24')) {
        return 'background: #ED4816;';
    }
    return match;
});

css = css.replace(/\\.clear-btn \\{[^}]*\\}/, '.clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.8); background: rgba(255,255,255,0.15); color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }');

const missing = "\\n.act-btn.lk { background: rgba(16,185,129,0.06); border-color: rgba(16,185,129,0.2); color: #6ee7b7; }\\n.act-btn.lk:hover { background: rgba(16,185,129,0.15); border-color: var(--emerald); }\\n.act-btn[disabled] { opacity: 0.3; pointer-events: none; }\\n\\n/* === TYPING === */\\n.typing-indicator { display: none; padding: 0 12px 4px; flex-shrink: 0; }\\n.typing-indicator.show { display: block; }\\n.typing-bubble {\\n    display: inline-flex; align-items: center; gap: 6px;\\n    padding: 8px 12px; background: var(--bot-bg);\\n    border: 1px solid var(--bot-border); border-radius: 4px 14px 14px 14px;\\n}\\n.typing-av { width: 18px; height: 18px; border-radius: 6px; background: #ED4816; display: flex; align-items: center; justify-content: center; color: #fff; }\\n.typing-dots { display: flex; gap: 3px; }\\n.typing-dots span { width: 5px; height: 5px; border-radius: 50%; background: var(--primary-light); animation: bounce 1.4s ease-in-out infinite; }\\n.typing-dots span:nth-child(2) { animation-delay: 0.2s; }\\n.typing-dots span:nth-child(3) { animation-delay: 0.4s; }\\n@keyframes bounce { 0%,60%,100% { transform: translateY(0); opacity: 0.3; } 30% { transform: translateY(-5px); opacity: 1; } }\\n\\n/* === SUGGESTIONS === */\\n.quick-suggestions {\\n    display: flex; gap: 4px; padding: 10px 10px 8px;\\n    overflow-x: auto; flex-shrink: 0;\\n    border-top: 1px solid var(--glass);\\n}\\n";

if (!css.includes('.typing-bubble {')) {
    css = css.replace('.quick-suggestions::-webkit-scrollbar', missing + '.quick-suggestions::-webkit-scrollbar');
}

fs.writeFileSync(path, css);
console.log('Fixed flawlessly!');
