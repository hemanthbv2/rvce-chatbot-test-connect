const fs = require('fs');
const path = require('path');
const vm = require('vm');

// MOCK THE DOM
const document = {
    getElementById: (id) => ({
        addEventListener: () => {},
        classList: { add: () => {}, remove: () => {} },
        style: {},
        innerHTML: '',
        value: '',
        querySelectorAll: () => [],
        appendChild: () => {},
        scrollHeight: 0
    }),
    createElement: (tag) => ({
        classList: { add: () => {}, remove: () => {} },
        style: {},
        innerHTML: '',
        textContent: '',
        appendChild: () => {},
        querySelectorAll: () => []
    }),
    addEventListener: () => {}
};
const window = {
    addEventListener: () => {},
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    innerWidth: 1024,
    innerHeight: 768,
    speechSynthesis: { getVoices: () => [], speak: () => {} },
    SpeechSynthesisUtterance: class {}
};
const navigator = { language: 'en-US' };

global.document = document;
global.window = window;
global.navigator = navigator;
global.localStorage = window.localStorage;
global.requestAnimationFrame = (cb) => cb();
global.setTimeout = (cb, time) => {}; // don't execute timeouts to keep sync

// Load the script
const scriptContent = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');

// Eval the script in the current context using simple eval with full mock
try {
    // Replace const/let with var for global scope injection in eval
    let modScript = scriptContent.replace(/const /g, 'var ').replace(/let /g, 'var ');
    eval(modScript);
} catch (e) {
    console.error("Full error stack:");
    console.error(e.stack);
}

// --- TEST SUITE ---
const tests = [
    { name: "Greeting", input: "hi there", expectedIntent: "greet" },
    { name: "Admissions Keyword", input: "how to get admission", expectedIntent: "admissions" },
    { name: "Fee Keyword", input: "what is the tuition fee", expectedIntent: "fees" },
    { name: "Hostel Keyword", input: "tell me about hostels", expectedIntent: "hostels" },
    
    // Test Negation Logic
    { name: "Negated Keyword", input: "not admission", expectedIntent: "negated" },
    
    // Test Deep Contextual Memory (Requires sequential processing)
    { name: "Entity Set (CSE)", input: "tell me about cse", expectedIntent: "dept_cs" },
    { name: "Entity Memory (Syllabus)", input: "show me the syllabus", expectedIntent: "dept_cs" },
    
    { name: "Entity Set (Hostel)", input: "i need a hostel", expectedIntent: "hostels" },
    { name: "Entity Memory (Fee)", input: "what is the fee", expectedIntent: "hostels" }, // Should map to hostel fees
    
    // Test Composite Resolution
    { name: "Composite (CSE + Placements)", input: "what are the placements for cse", expectedIntent: "plcmt_cs" },
    { name: "Composite (Mech + HOD)", input: "who is the hod of mechanical", expectedIntent: "hod_me" },
    
    // Test Fuzzy Match
    { name: "Fuzzy Match (Typo)", input: "what are the placemnts", expectedIntent: "fuzzy" },
    
    // Test COE Alias Matching
    { name: "COE Alias", input: "cisco rvce", expectedIntent: "coe_iot" }
];

console.log("\n=== STARTING CHATBOT NLP TEST SUITE ===\n");

let passed = 0;
let failed = 0;

for (const test of tests) {
    // 1. Run the raw classifyIntent
    const result = classifyIntent(test.input);
    
    // 2. We need to check if the final returned intent matches what we expect.
    // For fuzzy, result.type === 'fuzzy'. For negated, result.type === 'negated'.
    // For others, result.id contains the intent.
    
    let actualIntent = result.id;
    if (result.type === 'fuzzy') actualIntent = 'fuzzy';
    if (result.type === 'negated') actualIntent = 'negated';
    
    if (actualIntent === test.expectedIntent) {
        console.log(`✅ [PASS] ${test.name} ("${test.input}") -> ${actualIntent}`);
        passed++;
    } else {
        console.log(`❌ [FAIL] ${test.name} ("${test.input}")`);
        console.log(`   Expected: ${test.expectedIntent}`);
        console.log(`   Got: ${actualIntent} (Type: ${result.type})`);
        failed++;
    }
    
    // 3. To simulate context memory, we also manually update SESSION activeEntity
    // exactly how process() does it.
    if (result.type === 'exact' || result.type === 'keyword' || result.type === 'fuzzy') {
        const checkId = result.id || (result.suggestions && result.suggestions[0]);
        if (checkId) {
            if (checkId.startsWith('dept_')) {
                SESSION.activeEntity = { type: 'dept', value: checkId.replace('dept_', ''), timestamp: Date.now() };
            } else if (checkId === 'hostels' || checkId === 'girls_hostel' || checkId === 'boys_hostel' || checkId === 'mess') {
                SESSION.activeEntity = { type: 'hostel', value: 'hostel', timestamp: Date.now() };
            }
        }
    }
}

console.log(`\n=== TEST SUITE COMPLETE ===`);
console.log(`Passed: ${passed} | Failed: ${failed} | Total: ${tests.length}\n`);

if (failed > 0) {
    process.exit(1);
}
