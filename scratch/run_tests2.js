const fs = require('fs');
const vm = require('vm');

let rawScript = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

rawScript = rawScript.replace(/}\s*if \(document\.readyState === 'loading'\)/, "\n" +
    "    global.botExports = { \n" +
    "        QA: (typeof QA !== 'undefined' ? QA : null), \n" +
    "        getResponse: (typeof getResponse !== 'undefined' ? getResponse : null), \n" +
    "        classifyIntent: (typeof classifyIntent !== 'undefined' ? classifyIntent : null),\n" +
    "        KB: (typeof KB !== 'undefined' ? KB : null)\n" +
    "    };\n" +
    "} if (document.readyState === 'loading')");

const createElementMock = (tag) => {
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
        tagName: tag ? tag.toUpperCase() : 'DIV',
        querySelector: () => null,
        querySelectorAll: () => []
    };
};

const mockDOM = {
    document: {
        readyState: 'complete',
        addEventListener: () => {},
        getElementById: (id) => {
            if (id === 'sessionDisplay') return null; // Avoid TDZ bug
            return createElementMock('DIV');
        },
        createElement: createElementMock,
        querySelector: () => createElementMock('DIV'),
        querySelectorAll: () => []
    },
    window: {
        innerWidth: 1024,
        innerHeight: 768,
        addEventListener: () => {},
        getSelection: () => ({ toString: () => '' })
    },
    navigator: { userAgent: 'test', onLine: true },
    setTimeout: (cb, t) => { try { cb(); } catch(e) {} return 1; },
    clearTimeout: () => {},
    setInterval: () => {},
    clearInterval: () => {},
    Date: Date,
    Math: Math,
    console: { log: () => {}, error: () => {}, warn: () => {} },
    MutationObserver: class { observe() {} disconnect() {} },
    SafeStorage: { getItem: () => null, setItem: () => {} },
    localStorage: { getItem: () => null, setItem: () => {} },
    sessionStorage: { getItem: () => null, setItem: () => {} },
    global: {}
};

const context = vm.createContext(mockDOM);

try {
    vm.runInContext(rawScript, context);
} catch(e) {}

try {
    vm.runInContext('try { startRVCEChatbot(); } catch(e) { console.error("Error in startRVCEChatbot:", e); }', context);
} catch(e) {}

const bot = context.global.botExports;
if (!bot || !bot.QA) {
    console.error("Failed to export QA or botExports!");
    process.exit(1);
}

console.log("Extracted QA elements: " + bot.QA.length);

let passed = 0;
let failed = 0;

console.log("Testing complete chatbot on all commands...");
bot.QA.forEach((entry, idx) => {
    if(entry.k && entry.k.length > 0) {
        entry.k.forEach(testKeyword => {
            const intent = bot.classifyIntent(testKeyword);
            if(intent && (intent.id === entry.id || (intent.type === 'exact' && intent.id === entry.id) || (intent.type === 'keyword' && intent.id === entry.id))) {
                passed++;
            } else if (intent === entry.id) {
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
