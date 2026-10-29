const fs = require('fs');

let content = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

content = content.replace('function startRVCEChatbot() {', '');

const searchStr = "if (document.readyState === 'loading')";
const endIndex = content.lastIndexOf(searchStr);

if (endIndex !== -1) {
    const lastBrace = content.lastIndexOf('}', endIndex);
    if (lastBrace !== -1) {
        content = content.substring(0, lastBrace);
    }
}

content += "\nmodule.exports = { QA: (typeof QA !== 'undefined' ? QA : null), classifyIntent: (typeof classifyIntent !== 'undefined' ? classifyIntent : null) };\n";

const prefix = `
const document = {
    readyState: 'complete',
    getElementById: (id) => {
        if (id === 'sessionDisplay') return null;
        return {
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
            querySelectorAll: () => [],
            getContext: () => ({ clearRect:()=>{}, beginPath:()=>{}, arc:()=>{}, fill:()=>{}, moveTo:()=>{}, lineTo:()=>{}, stroke:()=>{} }),
            width: 1024,
            height: 768
        };
    },
    createElement: (tag) => ({
        classList: { add: () => {}, remove: () => {} },
        appendChild: () => {},
        innerHTML: '',
        textContent: '',
        dataset: {},
        style: {},
        tagName: tag ? tag.toUpperCase() : 'DIV',
        querySelectorAll: () => []
    }),
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {}
};
const window = { innerWidth: 1024, innerHeight: 768, addEventListener: () => {}, getSelection: () => ({ toString: () => '' }) };
const navigator = { userAgent: 'test', onLine: true };
const MutationObserver = class { observe() {} disconnect() {} };
const localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
const sessionStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
function addEventListener() {}
function requestAnimationFrame(cb) { /* do nothing to prevent infinite loop */ }
const innerWidth = 1024;
const innerHeight = 768;
`;

fs.writeFileSync('d:/hemanth bv/New folder/chatbot-ai-main/scratch/script_module.js', prefix + content);

try {
    const bot = require('d:/hemanth bv/New folder/chatbot-ai-main/scratch/script_module.js');
    if (!bot.QA) {
        console.error("QA is still null!");
        process.exit(1);
    }
    
    console.log("Extracted QA elements: " + bot.QA.length);
    
    let passed = 0;
    let failed = 0;
    let failedKeywords = [];
    
    console.log("Testing complete chatbot on all commands...");
    bot.QA.forEach(entry => {
        if (entry.k && entry.k.length > 0) {
            entry.k.forEach(testKeyword => {
                const intent = bot.classifyIntent(testKeyword);
                if (intent && (intent.id === entry.id || (intent.type === 'exact' && intent.id === entry.id) || (intent.type === 'keyword' && intent.id === entry.id))) {
                    passed++;
                } else if (intent === entry.id) {
                    passed++;
                } else {
                    console.log("❌ FAILED for id '" + entry.id + "': Expected '" + entry.id + "', got '" + (intent ? intent.id : 'null') + "' for input '" + testKeyword + "'");
                    failed++;
                    failedKeywords.push({id: entry.id, keyword: testKeyword, got: intent ? intent.id : 'null'});
                }
            });
        }
    });

    console.log("\\nTest Results: " + passed + " PASSED, " + failed + " FAILED");
    if (failed === 0) {
        console.log("✅ The complete chatbot is working on all defined commands.");
    } else {
        console.log("⚠️ Some commands failed matching.");
        fs.writeFileSync('d:/hemanth bv/New folder/chatbot-ai-main/scratch/failed_commands.json', JSON.stringify(failedKeywords, null, 2));
    }

} catch(e) {
    console.error("Error executing module:", e);
}
