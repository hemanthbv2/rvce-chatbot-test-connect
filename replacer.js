const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');
script = script.replace('const result = classifyIntent(text);', 'const result = classifyIntent(text);\n    if (typeof SESSION !== "undefined") SESSION.reqYear = result.year || null;');
fs.writeFileSync('script.js', script);
console.log("Replaced classification line.");
