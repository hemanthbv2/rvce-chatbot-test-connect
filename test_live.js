const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

global.window = {};
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener:()=>{}, style:{}, classList:{add:()=>{},remove:()=>{}} })
};
global.localStorage = { getItem:()=>null, setItem:()=>{} };
global.T = (en, def) => def || en;
global.SESSION = {};

// Replace ONLY the UI functions that cause errors
code = code.replace(/function startRVCEChatbot\(\) \{[\s\S]*?\n\}/, 'function startRVCEChatbot() {}');
code = code.replace(/function botReply\(r\) \{[\s\S]*?\}\n\}/, 'function botReply(r) {}');

try {
    eval(code);
} catch (e) {
    console.error("EVAL ERROR:", e);
}

const q = "ECE PLACEMENT STATS 2025";
const result = classifyIntent(q);
console.log("CLASSIFY RESULT:", result);

if (result && result.id) {
    SESSION.reqYear = result.year;
    const resp = getResponse(result.id);
    console.log("RESPONSE TEXT:", resp.text);
}
