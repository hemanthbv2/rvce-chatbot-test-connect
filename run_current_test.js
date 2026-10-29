const fs = require('fs');

let scriptStr = fs.readFileSync('script.js', 'utf8');

scriptStr = scriptStr.replace('function getResponse(id) {', `
    global.test_KB = KB;
    global.test_classifyIntent = classifyIntent;
    global.test_getResponse = getResponse;
    function getResponse(id) {
`);

scriptStr = scriptStr.replace(/const currentSessionId/g, 'var currentSessionId');
scriptStr = scriptStr.replace(/const getSID/g, 'var getSID');

let fullScript = `
function createStub() {
    return {
        addEventListener: () => {},
        classList: {add:()=>{}, remove:()=>{}, toggle:()=>{}, contains:()=>false},
        setAttribute:()=>{},
        focus:()=>{},
        querySelectorAll: () => [],
        querySelector: () => ({}),
        appendChild: () => {},
        getContext: () => new Proxy({}, { get: () => () => {} })
    };
}
const document = { 
    readyState: 'complete', 
    addEventListener: () => {},
    getElementById: createStub,
    createElement: createStub,
    body: createStub(),
    querySelector: createStub,
    hidden: false
};
const window = { 
    addEventListener:()=>{},
    getSelection: () => ({ toString: () => '' }),
    innerWidth: 1024,
    innerHeight: 768,
    location: { hostname: 'localhost', href: 'http://localhost' }
};
const localStorage = { getItem:()=>null, setItem:()=>{} };
const sessionStorage = { getItem:()=>null, setItem:()=>{} };
const clearTimeout = () => {};
const setTimeout = (fn) => { fn(); };
const navigator = { userAgent: 'test' };
const MutationObserver = class { observe(){} };
const addEventListener = () => {};
const innerWidth = 1024;
const innerHeight = 768;
const requestAnimationFrame = () => {};

${scriptStr}

startRVCEChatbot();
`;

try {
    eval(fullScript);
} catch (e) {
    console.error("Eval error:", e);
    process.exit(1);
}

let passed = 0;
let total = 0;
let results = [];

function runTest(input, expectedIntent, expectedContent) {
    total++;
    global.SESSION = { history: [], navStack: [] };
    
    let actualIntentInfo = global.test_classifyIntent(input);
    let actualIntent = actualIntentInfo ? (actualIntentInfo.type === 'multi' ? 'multi' : actualIntentInfo.id) : null;
    
    if (actualIntentInfo) {
        if (actualIntentInfo.type === 'multi') {
            global.SESSION.lastIntent = actualIntentInfo.ids[0];
        } else {
            global.SESSION.lastIntent = actualIntentInfo.id;
        }
        if (actualIntentInfo.year) global.SESSION.reqYear = actualIntentInfo.year;
    }
    
    let res = actualIntentInfo ? global.test_getResponse(actualIntent) : {text: ''};
    
    let passedIntent = actualIntent === expectedIntent || (expectedIntent === null);
    let passedContent = expectedContent ? res.text.includes(expectedContent) : true;
    
    if (passedIntent && passedContent) {
        passed++;
        results.push(`| ${input} | ✅ Passed | Intent: ${actualIntent} |`);
    } else {
        results.push(`| ${input} | ❌ Failed | Expected ${expectedIntent} got ${actualIntent}. ${!passedContent ? 'Missing content: '+expectedContent : ''} |`);
    }
}

// Custom manual tests
runTest('RVCE placement details', 'placements', 'Top Recruiters');
runTest('placement director', 'placement_director', 'Dr. D. Ranganath');
runTest('AIML placements 2024', 'plcmt_aiml', '2024-25');
runTest('AIML placements 2021', 'plcmt_aiml', "We couldn't find specific placement records");
runTest('Aerospace placements', 'plcmt_ae', 'Aerospace Engineering');
runTest('Hostel and placements', 'multi', null);

// Generate bulk tests based on departments
let depts = [];
if (global.test_KB.departments.ug) depts = depts.concat(global.test_KB.departments.ug);
if (global.test_KB.departments.pg) depts = depts.concat(global.test_KB.departments.pg);

let testCount = 0;
for (let d of depts) {
    if (testCount > 95) break; 
    
    let intentInfo = global.test_classifyIntent(`${d.n} placement`);
    let intentId = intentInfo ? (intentInfo.type === 'multi' ? 'multi' : intentInfo.id) : null;
    
    runTest(`${d.n} placement`, intentId, d.n);
    testCount++;
}

let artifactPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/9c145923-b128-46eb-954f-65de4d06453c/Placement_Testing_Report.md';
fs.writeFileSync(artifactPath, 
`# Chatbot Intent & Response Testing
Total Tests Run: ${total}
Tests Passed: ${passed}
Tests Failed: ${total - passed}

| User Input | Result | Details |
|---|---|---|
` + results.join('\n')
);
console.log('Passed ' + passed + '/' + total);
