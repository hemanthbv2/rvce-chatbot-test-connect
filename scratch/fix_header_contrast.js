const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

// 1. Remove Header Gradient
css = css.replace('background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);', 'background: var(--primary);');

// 2. Fix .status-text
css = css.replace('.status-text { font-size: 10px; color: var(--text-3); font-weight: 500; }', '.status-text { font-size: 10px; color: rgba(255,255,255,0.8); font-weight: 500; }');

// 3. Fix .tone-track
css = css.replace('background: rgba(0,0,0,0.07); border: 1px solid rgba(0,0,0,0.1);', 'background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);');

// 4. Fix .tone-current-label
css = css.replace('.tone-current-label { font-size: 9px; font-weight: 800; color: var(--primary-light); text-transform: uppercase; letter-spacing: 0.6px; }', '.tone-current-label { font-size: 9px; font-weight: 800; color: rgba(255,255,255,0.9); text-transform: uppercase; letter-spacing: 0.6px; }');

// 5. Fix .clear-btn
css = css.replace('.clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.08); background: rgba(0,0,0,0.03); color: var(--text-3); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }', '.clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }');

// Fix hover state for .clear-btn
css = css.replace('.clear-btn:hover { background: rgba(244,63,94,0.15); border-color: var(--rose); color: var(--rose); }', '.clear-btn:hover { background: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.4); color: #fff; }');

fs.writeFileSync(path, css);
console.log('Successfully fixed header contrast issues!');
