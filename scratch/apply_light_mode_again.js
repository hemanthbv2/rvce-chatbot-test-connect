const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/--bg-dark: [^;]+;/g, '--bg-dark: #E6E6E6;');
css = css.replace(/--bg-chat: [^;]+;/g, '--bg-chat: #F5F5F5;');
css = css.replace(/--bg-header: [^;]+;/g, '--bg-header: #FFFFFF;');
css = css.replace(/--bg-input: [^;]+;/g, '--bg-input: #FFFFFF;');
css = css.replace(/--glass: [^;]+;/g, '--glass: rgba(0, 0, 0, 0.08);');
css = css.replace(/--text: [^;]+;/g, '--text: #1E293B;');
css = css.replace(/--text-2: [^;]+;/g, '--text-2: #475569;');
css = css.replace(/--text-3: [^;]+;/g, '--text-3: #64748B;');

css = css.replace(/--bot-bg: [^;]+;/g, '--bot-bg: #FFFFFF;');
css = css.replace(/--bot-border: [^;]+;/g, '--bot-border: rgba(0,0,0,0.08);');
css = css.replace(/--user-bg: [^;]+;/g, '--user-bg: linear-gradient(135deg, #007CC5, #006096);');
css = css.replace(/--btn-bg: [^;]+;/g, '--btn-bg: #FFFFFF;');

// Ensure chat input area background is white if it was left dark
css = css.replace(/background: rgba\(5,5,16,0.5\);/g, 'background: #ffffff;');
css = css.replace(/background: rgba\(10, 14, 26, 0.96\);/g, 'background: #ffffff;');

fs.writeFileSync('style.css', css);
console.log('Light mode fully applied!');
