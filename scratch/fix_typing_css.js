const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

// Insert the missing typing CSS block right before /* === SUGGESTIONS === */
const typingCss = \`
.typing-bubble {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 8px 12px; background: var(--bot-bg);
    border: 1px solid var(--bot-border); border-radius: 4px 14px 14px 14px;
}
.typing-av { width: 18px; height: 18px; border-radius: 6px; background: linear-gradient(135deg,#ED4816,#007CC5); display: flex; align-items: center; justify-content: center; color: var(--secondary); }
.typing-dots { display: flex; gap: 3px; }
.typing-dots span { width: 5px; height: 5px; border-radius: 50%; background: var(--primary-light); animation: bounce 1.4s ease-in-out infinite; }
.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce { 0%,60%,100% { transform: translateY(0); opacity: 0.3; } 30% { transform: translateY(-5px); opacity: 1; } }
\`;

if (!css.includes('.typing-bubble {')) {
    css = css.replace('/* === SUGGESTIONS === */', typingCss + '\\n/* === SUGGESTIONS === */');
}

// Make sure ALL other gradients are properly changed (the multi_replace missed #C2191E to #007CC5 in some spots)
css = css.replace(/linear-gradient\\(135deg, #ED4816, #C2191E\\)/g, 'linear-gradient(135deg, #ED4816, #007CC5)');

fs.writeFileSync(path, css);
console.log('Successfully fixed typing CSS and logo gradients!');
