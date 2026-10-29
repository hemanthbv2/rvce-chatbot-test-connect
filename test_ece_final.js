const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

// We want to just evaluate the file, but we need to mock window and document
global.window = { innerWidth: 1000 };
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ classList: { add:()=>{}, remove:()=>{} }, style: {}, appendChild: ()=>{}, textContent: '', innerHTML: '' }),
    createElement: () => ({ classList: { add:()=>{}, remove:()=>{} }, style: {}, appendChild: ()=>{}, textContent: '', innerHTML: '' })
};
global.navigator = { userAgent: '' };
global.localStorage = { getItem: () => null, setItem: () => {} };
global.setTimeout = () => {};
global.MutationObserver = class { observe(){} };
global.T = (en) => en;

code = code.replace("if (document.readyState === 'loading')", "if (false)");
code = code.replace("function startRVCEChatbot() {", "function startRVCEChatbot() {\nconsole.log('started');");

eval(code);
startRVCEChatbot();

const q = "ECE PLACEMENT STATS 2025";
const res = classifyIntent(q);
console.log("INTENT:", res);
