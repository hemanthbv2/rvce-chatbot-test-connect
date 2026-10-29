const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

global.window = {};
global.document = {
    readyState: 'complete',
    addEventListener: () => {},
    getElementById: (id) => {
        return {
            addEventListener:()=>{}, 
            style:{}, 
            classList:{add:()=>{},remove:()=>{},toggle:()=>{}},
            appendChild:()=>{},
            scrollHeight: 0,
            querySelectorAll: () => []
        };
    },
    createElement: () => ({ style:{}, classList:{add:()=>{},remove:()=>{}}, appendChild:()=>{} }),
    body: { classList: { add:()=>{} } }
};
global.localStorage = { getItem:()=>null, setItem:()=>{} };
global.T = (en, def) => def || en;
global.SESSION = {};
global.setTimeout = (fn) => {};

// Export functions to global
code = code.replace(/function startRVCEChatbot\(\) \{/, 'function startRVCEChatbot() { \n global.test_classify = (input) => classifyIntent(input);\n global.test_getResponse = (id) => getResponse(id);\n global.SESSION = SESSION;');

try {
    eval(code);
    startRVCEChatbot();
    const result = global.test_classify("ECE PLACEMENT STATS 2025");
    console.log("CLASSIFY RESULT:", result);
    if (result && result.id) {
        global.SESSION.reqYear = result.year;
        const resp = global.test_getResponse(result.id);
        console.log("RESPONSE TEXT:", resp.text);
    }
} catch (e) {
    console.error(e);
}
