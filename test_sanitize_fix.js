const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');

// Test sanitize function directly
const sanitizeStart = scriptContent.indexOf('function sanitize(input)');
const sanitizeEnd = scriptContent.indexOf('/* =============== INTENT MATCHING');
const sanitizeCode = scriptContent.substring(sanitizeStart, sanitizeEnd);

eval(sanitizeCode);

console.log('sanitize("what is cse"):', sanitize("what is cse"));
console.log('sanitize("tell me about cse"):', sanitize("tell me about cse"));
console.log('sanitize("what is ise"):', sanitize("what is ise"));
