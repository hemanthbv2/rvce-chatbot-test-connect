const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

console.log("=== ALL HOD AND HOD_MESSAGE ENTRIES IN SCRIPT.JS ===\n");

const lines = code.split('\n');
lines.forEach((l, idx) => {
    if (l.includes('hod:') || l.includes('hod_url:') || l.includes('hod_message:')) {
        console.log(`L${idx+1}: ${l.trim()}`);
    }
});
