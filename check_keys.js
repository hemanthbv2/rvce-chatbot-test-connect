const fs = require('fs');
global.document = { readyState: 'complete' };
global.window = {};
eval(fs.readFileSync('script.js', 'utf8'));
console.log(Object.keys(KB.placement_stats));
