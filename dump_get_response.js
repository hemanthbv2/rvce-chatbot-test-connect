const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

code += `
global.test_getResponse = getResponse;
global.SESSION = SESSION;
`;

code = code.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/, '');
code = code.replace(/\}\);\s*$/, ''); 

global.window = {};
global.document = {
    readyState: 'complete',
    addEventListener: () => {},
    getElementById: () => ({ addEventListener:()=>{}, style:{}, classList:{add:()=>{},remove:()=>{},toggle:()=>{}}, appendChild:()=>{}, scrollHeight: 0, querySelectorAll: () => [] }),
    createElement: () => ({ style:{}, classList:{add:()=>{},remove:()=>{}}, appendChild:()=>{} }),
    body: { classList: { add:()=>{} } }
};
global.localStorage = { getItem:()=>null, setItem:()=>{} };
global.T = (en, def) => def || en;
global.SESSION = {};
global.setTimeout = () => {};

eval(code);

global.SESSION.reqYear = '2025';
const ec_stats = global.test_getResponse('plcmt_ec');
console.log("=== EC STATS ===");
console.log(ec_stats.text);

console.log("\n=== PLACEMENTS YEARLY ===");
const yr_stats = global.test_getResponse('placements_yearly');
console.log(yr_stats.text);

console.log("\n=== EC STATS AGAIN ===");
const ec_stats2 = global.test_getResponse('plcmt_ec');
console.log(ec_stats2.text);
