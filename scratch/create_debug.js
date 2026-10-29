const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');
script = script.replace(/let best = null;/, `let best = null; 
if (input.includes('who is the hod of cs_cse') || input.includes('placements in mtech cse')) {
    console.log('--- Matched Intents for', input, '---');
    console.log(matchedIntents);
}`);
fs.writeFileSync('script_debug.js', script);
