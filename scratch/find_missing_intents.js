const fs = require('fs');
const code = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

// 1. Extract all button actions: {a:'intent'}
const buttonActions = new Set();
const btnRegex = /a\s*:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = btnRegex.exec(code)) !== null) {
    buttonActions.add(m[1]);
}

// 2. Extract all QA intents: id:'intent'
const qaIntents = new Set();
const qaRegex = /id\s*:\s*['"]([^'"]+)['"]/g;
// only match inside the QA array, but matching globally is fine since we just want to know all defined intent IDs.
// wait, id:'something' is used in coes_db too. Let's just find all.
while ((m = qaRegex.exec(code)) !== null) {
    qaIntents.add(m[1]);
}

// 3. Extract all handled cases in getResponse and getDetailedResponse
const handledCases = new Set();
const caseRegex = /case\s+['"]([^'"]+)['"]\s*:/g;
while ((m = caseRegex.exec(code)) !== null) {
    handledCases.add(m[1]);
}

// 4. Dynamic prefixes handled in code
const dynamicPrefixes = ['fac_', 'hod_', 'dept_', 'pg_', 'plcmt_', 'coe_'];

function isHandled(intent) {
    if (handledCases.has(intent)) return true;
    for (const p of dynamicPrefixes) {
        if (intent.startsWith(p)) return true;
    }
    // specific hardcoded skips or built-in actions
    if (['menu'].includes(intent)) return true; // handled by menu
    return false;
}

console.log("=== BUTTON ACTIONS WITHOUT HANDLERS ===");
let buttonErrors = 0;
for (const a of buttonActions) {
    if (!isHandled(a)) {
        console.log(`❌ Button action missing handler: '${a}'`);
        buttonErrors++;
    }
}
if (buttonErrors === 0) console.log("✅ All button actions have handlers!");

console.log("\n=== QA INTENTS WITHOUT HANDLERS ===");
let qaErrors = 0;
// We should only check IDs that are definitely in QA array.
const qaBlockMatch = code.match(/const QA = \[([\s\S]+?)\];/);
if (qaBlockMatch) {
    const qaBlock = qaBlockMatch[1];
    const qaIds = new Set();
    while ((m = qaRegex.exec(qaBlock)) !== null) {
        qaIds.add(m[1]);
    }
    for (const id of qaIds) {
        if (!isHandled(id)) {
            console.log(`❌ QA intent missing handler: '${id}'`);
            qaErrors++;
        }
    }
}
if (qaErrors === 0) console.log("✅ All QA intents have handlers!");

console.log("\n=== Checking INTENT_LABELS missing handlers ===");
// find intent labels keys
const intentLabelsMatch = code.match(/const INTENT_LABELS = {([\s\S]+?)};/);
if (intentLabelsMatch) {
    const labelsBlock = intentLabelsMatch[1];
    const keyRegex = /([a-zA-Z0-9_]+)\s*:/g;
    while ((m = keyRegex.exec(labelsBlock)) !== null) {
        if (!isHandled(m[1])) {
            console.log(`⚠️ INTENT_LABEL missing handler: '${m[1]}'`);
        }
    }
}
