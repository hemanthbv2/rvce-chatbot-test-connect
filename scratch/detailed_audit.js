const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');

// 1. Extract intents and keywords
const qaMatch = content.match(/const QA = \[([\s\S]*?)\];/);
const qa = [];
if (qaMatch) {
    const lines = qaMatch[1].split('\n');
    lines.forEach(line => {
        const idM = line.match(/id:'(.*?)'/);
        const kM = line.match(/k:\[(.*?)\]/);
        const pM = line.match(/p:(.*?)[,}]/);
        if (idM && kM) {
            const keywords = kM[1].split(',').map(k => k.replace(/'/g, '').trim());
            qa.push({ id: idM[1], k: keywords, p: pM ? parseFloat(pM[1]) : 1 });
        }
    });
}

// 2. Extract cases
const getResponseMatch = content.match(/function getResponse\(id\) \{([\s\S]*?)default:/);
const cases = [];
if (getResponseMatch) {
    const caseMatches = getResponseMatch[1].matchAll(/case '(.*?)':/g);
    for (const match of caseMatches) cases.push(match[1]);
}

console.log("--- DETAILED AUDIT REPORT ---");

// Check 1: Keyword Overlaps
const kMap = {};
qa.forEach(item => {
    item.k.forEach(k => {
        if (!kMap[k]) kMap[k] = [];
        kMap[k].push({ id: item.id, p: item.p });
    });
});

console.log("\n[1] Keyword Overlaps (Potential Conflicts):");
let overlaps = 0;
for (const k in kMap) {
    if (kMap[k].length > 1) {
        overlaps++;
        console.log(`  '${k}':`, kMap[k].map(i => `${i.id}(p:${i.p})`).join(", "));
    }
}
if (overlaps === 0) console.log("  None found.");

// Check 2: Intents without Cases
console.log("\n[2] Intent-to-Case Mapping:");
const missing = qa.filter(i => 
    !i.id.startsWith('_') && 
    !i.id.startsWith('fac_') && 
    !i.id.startsWith('hod_') && 
    !i.id.startsWith('plcmt_') && 
    !cases.includes(i.id)
);
if (missing.length > 0) {
    console.log("  Missing Handlers (High Risk!):", missing.map(m => m.id));
} else {
    console.log("  All standard intents have handlers.");
}

// Check 3: Patterns in Case Statements
console.log("\n[3] Pattern Matching Verification:");
const patterns = ["id.startsWith('hod_')", "id.startsWith('dept_')", "id.startsWith('pg_')", "id.startsWith('plcmt_')", "id.startsWith('fac_')"];
patterns.forEach(p => {
    if (content.includes(p)) {
        console.log(`  '${p}' is implemented.`);
    } else {
        console.log(`  MISSING: '${p}' logic!`);
    }
});

// Check 4: Button Integrity (Search all file for {l:..., a:...})
console.log("\n[4] Button Action Verification:");
const buttonMatches = content.matchAll(/a:'(.*?)'/g);
const deadButtons = [];
const validActions = [...cases, ...qa.map(i => i.id), "menu", "admissions", "placements"];
for (const match of buttonMatches) {
    const action = match[1];
    if (!action.startsWith('_') && !action.startsWith('http') && !validActions.includes(action) && !action.startsWith('hod_') && !action.startsWith('fac_') && !action.startsWith('dept_')) {
        deadButtons.push(action);
    }
}
if (deadButtons.length > 0) {
    console.log("  Potential Dead Buttons (Unknown Actions):", [...new Set(deadButtons)]);
} else {
    console.log("  All buttons point to known actions.");
}
