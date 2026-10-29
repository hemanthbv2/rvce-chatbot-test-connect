const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

global.window = {};
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener:()=>{}, style:{}, classList:{add:()=>{},remove:()=>{}} })
};
global.localStorage = { getItem:()=>null, setItem:()=>{} };
global.T = (en) => en;

code = code.replace(/function startRVCEChatbot\(\) \{[\s\S]*?\n\}/, 'function startRVCEChatbot() {}');
code = code.replace(/function botReply\(r\) \{[\s\S]*?\}\n\}/, 'function botReply(r) { console.log(r.text); }');

eval(code);

const res = classifyIntent("ECE PLACEMENT STATS 2025");
console.log("INTENT:", res.id);
const r = getResponse(res.id);
console.log("RESPONSE:", r.text);
