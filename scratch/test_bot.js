const fs = require('fs');
const vm = require('vm');

const scriptContent = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

// Create a mock DOM
const mockDOM = {
    document: {
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
            scrollTop: 0
        }),
        createElement: (tag) => ({
            classList: { add: () => {}, remove: () => {} },
            appendChild: () => {},
            innerHTML: '',
            textContent: '',
            dataset: {},
            style: {}
        }),
        addEventListener: () => {},
        querySelector: () => null,
        querySelectorAll: () => []
    },
    window: {
        innerWidth: 1024,
        innerHeight: 768,
        addEventListener: () => {},
        getSelection: () => ({ toString: () => '' })
    },
    navigator: { userAgent: 'test' },
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    clearInterval: clearInterval,
    Date: Date,
    Math: Math,
    console: console,
    MutationObserver: class { observe() {} disconnect() {} }
};

const context = vm.createContext(mockDOM);
vm.runInContext(scriptContent, context);

// Since everything is inside startRVCEChatbot(), let's run it.
try {
    vm.runInContext('startRVCEChatbot();', context);
} catch (e) {
    console.log("Error running startRVCEChatbot:", e);
}

// Now we need to test the chatbot.
// Is there a way to hook into the chatbot's logic?
// Let's modify script.js on the fly to expose the QA and classifyIntent.
