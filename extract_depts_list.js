const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

const depts = [];
const matches = [...code.matchAll(/n:\s*"([^"]+)",\s*\r?\n\s*c:\s*"([^"]+)"/g)];

for (const m of matches) {
    depts.push({ name: m[1], code: m[2] });
}

console.log(JSON.stringify(depts, null, 2));
