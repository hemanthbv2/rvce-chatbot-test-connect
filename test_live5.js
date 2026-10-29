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

// Replace the DOMContentLoaded wrapper with a function we can call
code = code.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/, 'function RUN_ME() {');
code = code.replace(/\}\);\s*$/, '}');

try {
    eval(code);
    RUN_ME();
    startRVCEChatbot(); // Now the inner variables are captured in startRVCEChatbot?
    // Wait, startRVCEChatbot is DEFINED inside RUN_ME. So it's not global.
} catch (e) {
    console.error(e);
}
