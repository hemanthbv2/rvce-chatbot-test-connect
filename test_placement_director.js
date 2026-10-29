const fs = require('fs');
const scriptContent = fs.readFileSync('script.js', 'utf8');

const matches = scriptContent.match(/id:'placement_director'/);
console.log("Matched placement_director:", !!matches);
