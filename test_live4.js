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

// Export everything we need
code += `
global.test_classify = classifyIntent;
global.test_getResponse = getResponse;
`;

// Extract functions to global scope by removing the wrapper
code = code.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/, '');
code = code.replace(/\}\);\s*$/, ''); // remove closing of DOMContentLoaded

try {
    eval(code);
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
