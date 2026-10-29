const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

console.log("=== SEARCHING CAMPUS LIFE OBJECTS IN SCRIPT.JS ===\n");

const matches = [...code.matchAll(/(campus|clubs|teams|societies|cultural|sports|foodCourt|hostels|ncc|nss|kannadaSangha|rvjsteam):\s*\{[\s\S]*?\}/gi)];

matches.forEach(m => {
    console.log(m[0].substring(0, 200) + '...\n');
});
