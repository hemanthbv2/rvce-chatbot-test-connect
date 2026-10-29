const fs = require('fs');
const path = 'd:\\\\hemanth bv\\\\New folder\\\\chatbot-ai-main\\\\style.css';
let css = fs.readFileSync(path, 'utf8');

// Replace Primary (Blue)
css = css.replace(/#0081C6/gi, '#007CC5');
// Replace Primary RGB
css = css.replace(/0, 129, 198/g, '0, 124, 197');

// Replace Secondary (Orange)
css = css.replace(/#EB5624/gi, '#ED4816');
// Replace Secondary RGB
css = css.replace(/235, 86, 36/g, '237, 72, 22');

fs.writeFileSync(path, css);
console.log('Successfully updated to the exact colors you decided!');
