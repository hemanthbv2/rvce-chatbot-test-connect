const fs = require('fs');
const scriptContent = fs.readFileSync('script.js', 'utf8');

const dummyEl = {
    addEventListener: () => {},
    querySelectorAll: () => [],
    querySelector: () => dummyEl,
    appendChild: () => {},
    setAttribute: () => {},
    classList: { add: () => {}, remove: () => {} },
    style: {},
    getContext: () => ({ 
        fillStyle: '', strokeStyle: '', lineWidth: 0,
        clearRect: () => {}, beginPath: () => {}, arc: () => {}, fill: () => {},
        moveTo: () => {}, lineTo: () => {}, stroke: () => {} 
    })
};

const sandbox = `
    const innerWidth = 1000, innerHeight = 800;
    const requestAnimationFrame = () => {};
    class MutationObserver { observe() {} }
    const window = { 
        innerWidth: 1000, innerHeight: 800,
        addEventListener: () => {},
        sessionStorage: { getItem: () => null, setItem: () => {} },
        localStorage: { getItem: () => null, setItem: () => {} },
        location: { hostname: 'localhost', protocol: 'http:' }
    };
    const addEventListener = () => {};
    const sessionStorage = window.sessionStorage;
    const localStorage = window.localStorage;
    const document = { 
        addEventListener: () => {},
        getElementById: () => dummyEl,
        querySelectorAll: () => [],
        querySelector: () => dummyEl,
        createElement: () => dummyEl
    };
    ${scriptContent.replace('function classifyIntent', 'global.classifyIntent = classifyIntent; function classifyIntent')}
    startRVCEChatbot();
`;

eval(sandbox);

const txtContent = fs.readFileSync('500_test_questions.txt', 'utf8');
const lines = txtContent.split('\n');
const queries = lines.filter(l => l.startsWith('Query: "')).map(l => l.slice(8, -1));

console.log(`Running evaluation on ALL ${queries.length} questions...\n`);

let passed = 0;
let fallbackCount = 0;
const issues = [];

queries.forEach((q, idx) => {
    const res = global.classifyIntent(q);
    if (!res || res.type === 'unmatched' || (res.ids && res.ids.includes('unmatched'))) {
        fallbackCount++;
        issues.push({ num: idx + 1, query: q, res: res });
    } else {
        passed++;
    }
});

console.log(`=== SUMMARY ===`);
console.log(`Total Queries: ${queries.length}`);
console.log(`Matched (Passed): ${passed}`);
console.log(`Fallback / Unmatched: ${fallbackCount}`);
console.log(`Accuracy: ${((passed / queries.length) * 100).toFixed(2)}%\n`);

if (issues.length > 0) {
    console.log(`=== UNMATCHED / FALLBACK QUERIES (${issues.length}) ===`);
    issues.forEach(i => {
        console.log(`Question #${i.num}: "${i.query}" ->`, i.res);
    });
}
