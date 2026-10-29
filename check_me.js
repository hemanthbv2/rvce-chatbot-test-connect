const fs = require('fs');
global.document = { 
    readyState: 'complete', 
    addEventListener: () => {},
    getElementById: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} }, appendChild: ()=>{}, textContent: '', addEventListener: ()=>{}, querySelectorAll: () => [], setAttribute: () => {} }),
    createElement: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} }, appendChild: ()=>{}, textContent: '', addEventListener: ()=>{}, querySelectorAll: () => [], setAttribute: () => {} })
};
global.window = { innerWidth: 1000, innerHeight: 1000, addEventListener: () => {} };
global.T = (en, kb) => en;
global.SESSION = { reqYear: null };
global.MutationObserver = class { observe() {} };
global.navigator = { userAgent: '' };
global.localStorage = { getItem: () => null, setItem: () => {} };
global.setTimeout = (f, t) => { /* ignore */ };
global.currentSessionId = 'test';
global.getSID = () => 'test';

let scriptText = fs.readFileSync('script.js', 'utf8');
scriptText = scriptText.replace('function startRVCEChatbot() {', '');
scriptText = scriptText.replace("}\r\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");
scriptText = scriptText.replace("}\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");

eval(scriptText);
console.log(Object.keys(KB.placement_stats));
