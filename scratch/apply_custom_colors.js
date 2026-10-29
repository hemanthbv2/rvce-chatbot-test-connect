const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

// The colors from the image:
// Blue (Top): ~ #0081C6
// Gray (Middle): ~ #E6E6E6
// Orange/Red (Bottom): ~ #EB5624

// We will map:
// Primary -> Blue
// Secondary / Accent -> Orange
// Background -> Gray

css = css.replace(/:root\s*\{([\s\S]*?)\}/, `:root {
    /* Custom Colors from Image */
    --primary: #0081C6;
    --primary-light: #33A1DB;
    --primary-dark: #006096;
    
    --secondary: #EB5624;
    --secondary-light: #F0784F;
    
    --primary-glow: rgba(0, 129, 198, 0.2);
    --secondary-glow: rgba(235, 86, 36, 0.2);

    /* Backgrounds - Light Theme with Gray */
    --bg-dark: #E6E6E6;
    --bg-chat: #F5F5F5;
    --bg-header: #FFFFFF;
    --bg-input: #FFFFFF;
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
    --bot-bg: #FFFFFF;
    --bot-border: #D1D1D1;
    --user-bg: var(--primary);
    --btn-bg: #ffffff;
    --btn-border: #cbd5e1;
    --warn-bg: rgba(244,63,94,0.05);
    --warn-border: rgba(244,63,94,0.2);
    --spring: cubic-bezier(0.34,1.56,0.64,1);
    --ease: cubic-bezier(0.4,0,0.2,1);
}`);

// Also update the header gradient to use the blue and orange
css = css.replace(/\.chat-header \{[\s\S]*?\}/, `.chat-header {
    padding: 12px 15px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    display: flex; align-items: center; justify-content: space-between;
    box-shadow: 0 4px 15px var(--primary-glow);
    flex-shrink: 0; position: relative; overflow: hidden;
    color: #fff;
}`);

// Change the send button to use the orange (secondary) color for a nice pop
css = css.replace(/\.send-btn \{[\s\S]*?background: var\(--primary\);[\s\S]*?\}/, `.send-btn {
    width: 36px; height: 36px; border: none; border-radius: 12px;
    background: var(--secondary); color: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.2s var(--spring); box-shadow: 0 4px 12px var(--secondary-glow); flex-shrink: 0;
}`);

fs.writeFileSync(path, css);
console.log('Successfully applied custom image colors to style.css!');
