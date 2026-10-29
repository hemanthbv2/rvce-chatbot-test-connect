const fs = require('fs');
const lines = fs.readFileSync('script.js', 'utf8').split('\n');
lines.forEach((line, i) => {
    if (line.includes('classifyIntent(text)')) console.log(`${i+1}: ${line}`);
    if (line.includes("if (id && id.startsWith('plcmt_')) {")) console.log(`PLCMT START: ${i+1}`);
});
