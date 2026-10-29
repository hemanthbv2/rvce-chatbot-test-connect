const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');

// replace let chatOpen = false; with some module exports
let modified = scriptContent + `
module.exports = { processNLPInput, getBotResponse };
`;

fs.writeFileSync('temp_debug2.js', modified);
