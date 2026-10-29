const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

const m = code.match(/hostels:\s*\{[\s\S]*?url:\s*"([^"]+)"/);
if (m) {
    console.log('Hostels URL in script.js:', m[1]);
} else {
    console.log('Could not find hostels URL');
}
