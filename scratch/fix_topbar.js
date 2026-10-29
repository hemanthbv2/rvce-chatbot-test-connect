const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/\\.status-text \\{[^}]*\\}/, ".status-text { font-size: 10px; color: rgba(255,255,255,0.9); font-weight: 500; }");
css = css.replace(/\\.clear-btn \\{[^}]*\\}/, ".clear-btn { width: 26px; height: 26px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }");

fs.writeFileSync('style.css', css);
console.log('Fixed Top Bar readability!');
