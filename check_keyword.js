const fs = require('fs');
const script = fs.readFileSync('script.js', 'utf8');
const p = script.indexOf('// 3. Keyword-in-sentence:');
console.log(script.substring(p, p + 2500));
