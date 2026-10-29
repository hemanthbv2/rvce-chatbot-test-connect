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

eval(fullScript);

let passed = 0, total = 0, results = [];
function runTest(query, expectedIntent = null, expectedContent = null) {
  total++;
  global.SESSION = { history: [], navStack: [] };
  const info = global.test_classifyIntent(query);
  const intent = info ? (info.type === 'multi' ? 'multi' : info.id) : null;
  const response = info ? global.test_getResponse(intent) : { text: '' };
  const okIntent = expectedIntent === null || intent === expectedIntent;
  const okContent = expectedContent ? (response.text && response.text.includes(expectedContent)) : true;
  if (okIntent && okContent) {
    passed++;
    results.push(`| ${query} | ✅ Passed | Intent: ${intent} | Response: ${(response.text || '').replace(/\|/g, '\\|')} |`);
  } else {
    results.push(`| ${query} | ❌ Failed | Expected ${expectedIntent} got ${intent}. ${!okContent ? 'Missing content: ' + expectedContent : ''} | Response: ${(response.text || '').replace(/\|/g, '\\|')} |`);
  }
}

// Sample queries to test responses
const sampleQueries = [
  'What is the fee for CSE?',
  'Tell me about clubs',
  "I'm interested in ECE placements",
  'Is there a hostel?',
  'What is the placement rate for Mechanical?',
  'Who is the principal of RVCE?',
  'Who is the HOD of CSE?',
  'What is the intake for MCA?',
  'When was RVCE established?',
  'What are the labs for ECE?',
  'Tell me about the sports facilities',
  'How many seats are there in B.Tech CSE?',
  'What is the alumni network?',
  'Give me the contact number of the CSE HOD',
  'Is there a scholarship for girls?',
  'What are the internship opportunities?',
  'Explain the admission process',
  'List the approved research papers',
  'What is the campus Wi-Fi password?'
];

for (const q of sampleQueries) {
  runTest(q);
}

console.log(`Ran ${total} queries: ${passed} Passed, ${total - passed} Failed.`);
