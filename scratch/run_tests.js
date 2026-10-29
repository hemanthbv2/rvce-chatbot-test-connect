const fs = require('fs');
const vm = require('vm');

let rawScript = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

rawScript = rawScript.replace(/}\s*if \(document\.readyState === 'loading'\)/, "\n" +
    "    window.botExports = { \n" +
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
        getElementById: (id) => createElementMock('DIV'),
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
    navigator: { userAgent: 'test' },
    setTimeout: (cb, t) => { cb(); return 1; },
    clearTimeout: () => {},
    setInterval: () => {},
    clearInterval: () => {},
    Date: Date,
    Math: Math,
    console: {
        log: () => {}, // suppress script.js logs
        error: () => {},
        warn: () => {}
    },
    MutationObserver: class { observe() {} disconnect() {} },
    SafeStorage: { getItem: () => null, setItem: () => {} },
    localStorage: { getItem: () => null, setItem: () => {} },
    sessionStorage: { getItem: () => null, setItem: () => {} }
};

const context = vm.createContext(mockDOM);

try {
    vm.runInContext(rawScript, context);
} catch(e) {
    // console.error("Error loading script:", e);
}

try {
    vm.runInContext('startRVCEChatbot();', context);
} catch(e) {
    // console.error("Error starting chatbot:", e);
}

const bot = context.window.botExports;
if (!bot || !bot.QA) {
    process.stdout.write("Failed to export QA or botExports!\n");
    process.exit(1);
}

process.stdout.write("Extracted QA elements: " + bot.QA.length + "\n");

let passed = 0;
let failed = 0;

process.stdout.write("Testing complete chatbot on all commands...\n");
bot.QA.forEach((entry, idx) => {
    if(entry.k && entry.k.length > 0) {
        // Test all keywords for each entry to be thorough
        entry.k.forEach(testKeyword => {
            const intent = bot.classifyIntent(testKeyword);
            if(intent === entry.id) {
                passed++;
            } else {
                process.stdout.write("❌ FAILED for id '" + entry.id + "': Expected '" + entry.id + "', got '" + intent + "' for input '" + testKeyword + "'\n");
                failed++;
            }
        });
    }
});

process.stdout.write("\nTest Results: " + passed + " PASSED, " + failed + " FAILED\n");
if(failed === 0) {
    process.stdout.write("✅ The complete chatbot is working on all defined commands.\n");
} else {
    process.stdout.write("⚠️ Some commands failed matching.\n");
}
