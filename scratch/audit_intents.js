const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');

// Extract intents from QA array
const qaMatch = content.match(/const QA = \[([\s\S]*?)\];/);
const intents = [];
if (qaMatch) {
    const qaRows = qaMatch[1].split('\n');
    qaRows.forEach(row => {
        const idMatch = row.match(/id:'(.*?)'/);
        if (idMatch) intents.push(idMatch[1]);
    });
}

// Extract cases from getResponse switch
const getResponseMatch = content.match(/function getResponse\(id\) \{[\s\S]*?switch \(id\) \{([\s\S]*?)default:/);
const cases = [];
if (getResponseMatch) {
    const caseMatches = getResponseMatch[1].matchAll(/case '(.*?)':/g);
    for (const match of caseMatches) {
        cases.push(match[1]);
    }
}

console.log("--- INTENT AUDIT ---");
const missing = intents.filter(i => !i.startsWith('_') && !cases.includes(i) && !i.startsWith('fac_') && !i.startsWith('hod_') && !i.startsWith('plcmt_'));
if (missing.length > 0) {
    console.log("Mismatched Intents (Intents without cases):", missing);
} else {
    console.log("All intents have valid response paths.");
}

const redundant = cases.filter(c => !intents.includes(c) && c !== 'greet' && c !== 'bye' && c !== 'menu' && !c.startsWith('hod_') && !c.startsWith('fac_'));
if (redundant.length > 0) {
    console.log("Redundant Cases (Cases without intents):", redundant);
}
