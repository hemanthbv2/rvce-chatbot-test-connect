const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

const matches = [...code.matchAll(/case\s+['"]([^'"]+)['"]\s*:/g)];
console.log("Found switch cases:", matches.map(m => m[1]));
