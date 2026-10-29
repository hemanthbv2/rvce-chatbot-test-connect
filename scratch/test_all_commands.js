const fs = require('fs');
const content = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

let scriptFixed = content.replace("function startRVCEChatbot() {", "function startRVCEChatbot() {\\n  global.botExports = {};");
scriptFixed = scriptFixed.replace("function matchIntent(input) {", "global.botExports.QA = QA; global.botExports.classifyIntent = classifyIntent; global.botExports.KB = KB; function matchIntent(input) {");

const mockScript = `
const document = {
    readyState: 'complete',
    addEventListener: () => {},
    getElementById: (id) => ({
        classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
        addEventListener: () => {},
        appendChild: () => {},
        removeChild: () => {},
        innerHTML: '',
        textContent: '',
        value: '',
        focus: () => {},
        dataset: {},
        style: {},
        scrollHeight: 0,
        clientHeight: 0,
        scrollTop: 0,
        tagName: 'DIV',
        querySelector: () => null,
        querySelectorAll: () => []
    }),
    createElement: (tag) => ({
        classList: { add: () => {}, remove: () => {} },
        appendChild: () => {},
        innerHTML: '',
        textContent: '',
        dataset: {},
        style: {},
        tagName: tag.toUpperCase(),
        querySelectorAll: () => []
    }),
    querySelector: () => null,
    querySelectorAll: () => []
};

const window = {
    innerWidth: 1024,
    innerHeight: 768,
    addEventListener: () => {},
    getSelection: () => ({ toString: () => '' })
};

const navigator = { userAgent: 'test', onLine: true };
const MutationObserver = class { observe() {} disconnect() {} };
const localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
const sessionStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };

${scriptFixed}

startRVCEChatbot();
`;

fs.writeFileSync('d:/hemanth bv/New folder/chatbot-ai-main/scratch/run_eval.js', mockScript);

try {
    require('d:/hemanth bv/New folder/chatbot-ai-main/scratch/run_eval.js');
    console.log("Extracted QA size: " + global.botExports.QA.length);
    let passed = 0, failed = 0;
    
    global.botExports.QA.forEach(entry => {
        if (entry.k && entry.k.length > 0) {
            entry.k.forEach(testKeyword => {
                const intent = global.botExports.classifyIntent(testKeyword);
                if (intent && (intent.id === entry.id || (intent.type === 'exact' && intent.id === entry.id))) {
                    passed++;
                } else if (intent === entry.id) {
                     passed++;
                } else if (intent && typeof intent === 'object' && intent.id === entry.id) {
                     passed++;
                } else {
                    console.log("❌ FAILED for id '" + entry.id + "': Expected '" + entry.id + "', got '" + JSON.stringify(intent) + "' for input '" + testKeyword + "'");
                    failed++;
                }
            });
        }
    });

    console.log("\\nTest Results: " + passed + " PASSED, " + failed + " FAILED");
    if(failed === 0) {
        console.log("✅ The complete chatbot is working on all defined commands.");
    } else {
        console.log("⚠️ Some commands failed matching.");
    }
} catch(e) {
    console.error("Evaluation error:", e);
}
