const fs = require('fs');
const script = fs.readFileSync('script.js', 'utf8');
const p = script.indexOf('// Composite Intent Resolution:');
console.log(script.substring(p, p + 2000));
