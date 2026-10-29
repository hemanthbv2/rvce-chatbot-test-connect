const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// Fix double comma
content = content.replace(/},\s*,/g, '},');

fs.writeFileSync('script.js', content, 'utf8');
console.log('Fixed double comma!');
