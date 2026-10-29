const fs = require('fs');
global.document = { 
    readyState: 'complete', 
    addEventListener: () => {},
    getElementById: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} }, appendChild: ()=>{}, textContent: '', addEventListener: ()=>{}, querySelectorAll: () => [], setAttribute: () => {} }),
    createElement: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} }, appendChild: ()=>{}, textContent: '', addEventListener: ()=>{}, querySelectorAll: () => [], setAttribute: () => {} })
};
global.window = { innerWidth: 1000, innerHeight: 1000, addEventListener: () => {} };
global.T = (en, kb) => en;
global.SESSION = { reqYear: null };
global.MutationObserver = class { observe() {} };
global.navigator = { userAgent: '' };
global.localStorage = { getItem: () => null, setItem: () => {} };
global.setTimeout = (f, t) => { /* ignore */ };

let scriptText = fs.readFileSync('script.js', 'utf8');
scriptText = scriptText.replace('function startRVCEChatbot() {', '');
scriptText = scriptText.replace("}\r\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");
scriptText = scriptText.replace("}\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");

eval(scriptText);

const testQueries = [
    { q: "ece placement 2023", expected: "plcmt_ec" },
    { q: "placement mechanical", expected: "plcmt_me" },
    { q: "civil placement 2024", expected: "plcmt_cv" },
    { q: "cse highest package 2022", expected: "plcmt_cs" },
    { q: "ise pg placements", expected: "plcmt_is" },
    { q: "electrical placements", expected: "plcmt_ee" },
    { q: "aiml placements", expected: "plcmt_ai" },
    { q: "chemical placement", expected: "plcmt_ch" },
    { q: "mca placement 2025", expected: "plcmt_mca" },
    { q: "aerospace highest package", expected: "plcmt_as" },
    { q: "biotech average package", expected: "plcmt_bt" },
    { q: "industrial placement", expected: "plcmt_im" }
];

let failed = 0;
for (const t of testQueries) {
    const res = classifyIntent(t.q);
    if (!res || res.id !== t.expected) {
        console.error(`FAILED: "${t.q}". Expected: ${t.expected}, Got: ${res ? res.id : 'null'}`);
        failed++;
    } else {
        console.log(`PASSED: "${t.q}" -> ${res.id} (Year: ${res.year})`);
    }
}

if (failed === 0) {
    console.log("ALL INTENT PARSER TESTS PASSED!");
} else {
    console.log(`${failed} TESTS FAILED.`);
}
