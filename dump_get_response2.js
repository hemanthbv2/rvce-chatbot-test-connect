const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Strip out the wrapper function
code = code.replace(/function startRVCEChatbot\(\) \{/, '');
code = code.replace(/if \(document\.readyState === 'loading'\)[\s\S]+$/, '');
// Also remove the closing brace of startRVCEChatbot
const lastBrace = code.lastIndexOf('}');
code = code.substring(0, lastBrace);

code += `
global.test_getResponse = getResponse;
global.SESSION = SESSION;
`;

global.window = { innerWidth: 1000, innerHeight: 1000 };
global.navigator = { userAgent: "Node" };
global.document = {
    readyState: 'complete',
    addEventListener: () => {},
    getElementById: () => ({ addEventListener:()=>{}, style:{}, classList:{add:()=>{},remove:()=>{},toggle:()=>{},contains:()=>false}, appendChild:()=>{}, scrollHeight: 0, querySelectorAll: () => [] }),
    createElement: () => ({ style:{}, classList:{add:()=>{},remove:()=>{}}, appendChild:()=>{} }),
    body: { classList: { add:()=>{} } }
};
global.localStorage = { getItem:()=>null, setItem:()=>{} };
global.T = (en, def) => def || en;
global.setTimeout = () => {};

eval(code);

console.log("=== EXACT MATCH FOR 'plcmt_ec' ===");
global.SESSION.reqYear = '2025';
const r1 = global.test_getResponse('plcmt_ec');
console.log(r1.text);

console.log("\n=== PLACEMENTS YEARLY ===");
global.SESSION.reqYear = null;
const r2 = global.test_getResponse('placements_yearly');
console.log(r2.text);
