const fs = require('fs');
global.document = { readyState: 'complete' };
global.window = {};
eval(fs.readFileSync('script.js', 'utf8'));

console.log(JSON.stringify(KB.placement_stats['cs'], null, 2));
