const fs = require('fs');
const path = require('path');

// Read script.js content
const scriptPath = path.join(__dirname, '..', 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Simple extractor for a block of code starting with a function/const signature
function extractCode(content, startMatch, endMatch) {
    const startIdx = content.indexOf(startMatch);
    if (startIdx === -1) throw new Error(`Could not find start: ${startMatch}`);
    const endIdx = content.indexOf(endMatch, startIdx);
    if (endIdx === -1) throw new Error(`Could not find end: ${endMatch}`);
    return content.substring(startIdx, endIdx);
}

// Extract KB, sanitize, and classifyIntent
const kbCode = extractCode(scriptContent, 'const KB = {', '/* =============== INPUT SANITIZATION =============== */');
const sanitizeCode = extractCode(scriptContent, 'function sanitize(input) {', '/* =============== INTENT MATCHING (Priority-based) =============== */');
const classifyCode = extractCode(scriptContent, 'function classifyIntent(input) {', '/* =============== FUZZY "DID YOU MEAN?" =============== */');

// Create a sandbox execution environment
const sandbox = {};
const runner = new Function('sandbox', `
    const ABBR = {};
    const QA = [];
    const INTENT_LABELS = {};
    ${kbCode}
    ${sanitizeCode}
    ${classifyCode}
    sandbox.KB = KB;
    sandbox.sanitize = sanitize;
    sandbox.classifyIntent = classifyIntent;
`);
runner(sandbox);

const { classifyIntent } = sandbox;

function runTest(query) {
    console.log(`Query: "${query}"`);
    const result = classifyIntent(query);
    console.log(`Result:`, JSON.stringify(result));
    console.log('-'.repeat(50));
}

// Run test cases
console.log("=== TESTING LIVE CLASSIFY INTENT ===");
runTest("karthik");
runTest("view profile of karthik");
runTest("who is dr karthik");
runTest("profile of karthik");
runTest("view profile of balaguru");
runTest("who is balaguru pandian");
runTest("view profile of supree"); // Partial match
