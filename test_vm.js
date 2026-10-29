const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('script.js', 'utf8');

// Inject exports into the local scope so they bubble up to global (the vm context)
code = code.replace(/function getResponse/, `
    global.test_classifyIntent = classifyIntent;
    global.test_getResponse = getResponse;
    global.test_getDeepInfo = getDeepInfo;
    global.test_KB = KB;
    function getResponse
`);
code = code.replace(/const currentSessionId/g, 'var currentSessionId');
code = code.replace(/const getSID/g, 'var getSID');

let stubs = `
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
`;

let finalCode = stubs + "\n" + code;

const context = vm.createContext({
    console,
    Date,
    Math,
    String,
    Array,
    Object,
    Proxy,
    Error,
    global: {}
});

try {
    vm.runInContext(finalCode, context);
} catch (e) {
    console.log("VM Error:", e);
    process.exit(1);
}

const classifyIntent = context.global.test_classifyIntent;
const getResponse = context.global.test_getResponse;
const KB = context.global.test_KB;

let passed = 0;
let total = 0;
let results = [];

function runTest(input, expectedIntent, expectedContent) {
    total++;
    context.SESSION = { history: [], navStack: [] };
    
    let actualIntentInfo = classifyIntent(input);
    let actualIntent = actualIntentInfo ? (actualIntentInfo.type === 'multi' ? 'multi' : actualIntentInfo.id) : null;
    
    if (actualIntentInfo) {
        if (actualIntentInfo.type === 'multi') {
            context.SESSION.lastIntent = actualIntentInfo.ids[0];
        } else {
            context.SESSION.lastIntent = actualIntentInfo.id;
        }
        if (actualIntentInfo.year) context.SESSION.reqYear = actualIntentInfo.year;
    }
    
    let res = {text: ''};
    if (actualIntentInfo) {
        try {
            res = vm.runInContext(`test_getDeepInfo("${actualIntent}") || test_getResponse("${actualIntent}")`, context);
        } catch(e) {
            console.error("Error generating response:", e);
        }
    }
    
    let passedIntent = actualIntent === expectedIntent || (expectedIntent === null);
    let passedContent = expectedContent ? res.text.includes(expectedContent) : true;
    
    if (passedIntent && passedContent) {
        passed++;
        results.push(`| ${input} | ✅ Passed | Intent: ${actualIntent} |`);
    } else {
        results.push(`| ${input} | ❌ Failed | Expected ${expectedIntent} got ${actualIntent}. ${!passedContent ? 'Missing content: '+expectedContent : ''} | Actual Output Length: ${res.text.length} | First 50 chars: ${res.text.substring(0, 50).replace(/\n/g, ' ')} |`);
    }
}

// Custom tests
runTest('RVCE placement details', 'placements', 'Top Recruiters');
runTest('placement director', 'placement_director', 'Dr. D. Ranganath');
runTest('AIML placements 2024', 'plcmt_aiml', '2024-25');
runTest('AIML placements 2021', 'plcmt_aiml', "We couldn't find specific placement records");
runTest('Aerospace placements', 'plcmt_ae', 'Aerospace Engineering');
runTest('Hostel and placements', 'multi', null);

let depts = [];
if (KB.departments.ug) depts = depts.concat(KB.departments.ug);
if (KB.departments.pg) depts = depts.concat(KB.departments.pg);

let testCount = 0;
for (let d of depts) {
    if (testCount > 105) break; 
    let intentInfo = classifyIntent(`${d.n} placement`);
    let intentId = intentInfo ? (intentInfo.type === 'multi' ? 'multi' : intentInfo.id) : null;
    runTest(`${d.n} placement`, intentId, d.n);
    testCount++;
}

fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/fd0c4a9e-95ad-4c96-a0b9-5f1b70f9d52d/Placement_Testing_Report_Final.md', 
`# Chatbot Intent & Response Testing
Total Tests Run: ${total}
Tests Passed: ${passed}
Tests Failed: ${total - passed}

| User Input | Result | Details |
|---|---|---|
` + results.join('\n')
);
console.log('Passed ' + passed + '/' + total);
