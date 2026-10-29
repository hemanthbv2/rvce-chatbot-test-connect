const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';

function apply() {
    let css = fs.readFileSync(path, 'utf8');
    
    // 1. Make header solid blue (remove gradient)
    css = css.replace(/\\.chat-header \\{[\\s\\S]*?\\}/, \`\.chat-header {
    padding: 12px 15px;
    background: var(--primary);
    display: flex; align-items: center; justify-content: space-between;
    box-shadow: 0 4px 15px var(--primary-glow);
    flex-shrink: 0; position: relative; overflow: hidden;
    color: #fff;
}\`);
    
    fs.writeFileSync(path, css);
}
apply();
