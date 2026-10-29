const fs = require('fs');
const script = fs.readFileSync('script.js', 'utf8');
const lines = script.split('\n');
lines.forEach((l, i) => {
    if (l.includes("id:'dept_cs'") || l.includes("id:'dept_me'")) {
        console.log(i + ': ' + l.trim());
    }
});
