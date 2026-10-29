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

code = code.replace("setTimeout(startRVCEChatbot, 100);", "");

try {
    eval(code);
    const result = classifyIntent("ECE PLACEMENT STATS 2025");
    console.log("CLASSIFY RESULT:", result);
    if (result && result.id) {
        SESSION.reqYear = result.year;
        const resp = getResponse(result.id);
        console.log("RESPONSE TEXT:", resp.text);
    }
} catch (e) {
    console.error(e);
}
