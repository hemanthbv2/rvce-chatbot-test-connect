const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

console.log("=== CAMPUS LIFE DATA IN CHATBOT (SCRIPT.JS) ===\n");

function printSection(title, keyRegex) {
    console.log(`--- ${title} ---`);
    const match = code.match(keyRegex);
    if (match) {
        console.log(match[0].trim());
    } else {
        console.log("Not found");
    }
    console.log('');
}

printSection("Fests & Events", /fest:\s*"[^"]+"/i);
printSection("Clubs & Teams", /clubs:\s*"[^"]+"/i);
printSection("Cultural Teams", /cultural:\s*\{[\s\S]*?\}/i);
printSection("Innovation Teams", /innovation:\s*\{[\s\S]*?\}/i);
printSection("Food Court & Outlets", /foodCourt:\s*\{[\s\S]*?\}/i);
printSection("Sports & Gymnasium", /tournaments:\s*"[^"]+"/i);
printSection("Library", /library:\s*\{[\s\S]*?\}/i);
