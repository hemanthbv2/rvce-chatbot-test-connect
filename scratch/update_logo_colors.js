const fs = require('fs');
const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\style.css';
let css = fs.readFileSync(path, 'utf8');

// The new logo colors requested by the user
const orange = '#ED4816';
const blue = '#007CC5';

// 1. Update .avatar and .msg-av gradients (which represent the logo)
// Currently they are like: background: linear-gradient(135deg, #E31E24, #004B8D);
css = css.replace(/background: linear-gradient\(135deg, #E31E24, #004B8D\);/g, \`background: linear-gradient(135deg, \${orange}, \${blue});\`);

// Update typing-av which doesn't have spaces in between
css = css.replace(/background: linear-gradient\(135deg,#E31E24,#004B8D\);/g, \`background: linear-gradient(135deg, \${orange}, \${blue});\`);

// 2. Update the .avatar-ring which surrounds the logo
// Currently: background: conic-gradient(from 0deg, #E31E24, #F04248, #004B8D, #E31E24);
css = css.replace(/background: conic-gradient\(from 0deg, #E31E24, #F04248, #004B8D, #E31E24\);/g, \`background: conic-gradient(from 0deg, \${orange}, \${blue}, \${orange});\`);

// 3. Update the floating action button (chat-fab) gradient
// Currently: background: linear-gradient(135deg, #E31E24, #C2191E);
css = css.replace(/background: linear-gradient\(135deg, #E31E24, #C2191E\);/g, \`background: linear-gradient(135deg, \${orange}, \${blue});\`);

// 4. Update the send button gradient
// Currently: background: linear-gradient(135deg, #E31E24, #C2191E); (Since the previous script might have overwritten it or it's still Red/DarkRed)
css = css.replace(/background: linear-gradient\(135deg, #E31E24, #C2191E\);/g, \`background: linear-gradient(135deg, \${orange}, \${blue});\`);

fs.writeFileSync(path, css);
console.log('Successfully updated logo and gradient colors!');
