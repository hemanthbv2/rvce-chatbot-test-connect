const fs = require('fs');
const script = fs.readFileSync('script.js', 'utf8');
const p = script.indexOf("if (id && id.startsWith('plcmt_')) {");
console.log(script.substring(p, p + 2500));
