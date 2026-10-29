const fs = require('fs');
global.document = { 
    readyState: 'complete', 
    addEventListener: () => {},
    getElementById: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} }, appendChild: ()=>{}, textContent: '', addEventListener: ()=>{}, querySelectorAll: () => [], setAttribute: () => {} }),
    createElement: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{} }, appendChild: ()=>{}, textContent: '', addEventListener: ()=>{}, querySelectorAll: () => [], setAttribute: () => {} })
};
global.window = { innerWidth: 1000, innerHeight: 1000, addEventListener: () => {} };
global.T = (en, kb) => en;
global.SESSION = { navStack: [] };
global.MutationObserver = class { observe() {} };
global.navigator = { userAgent: '' };
global.localStorage = { getItem: () => null, setItem: () => {} };
global.setTimeout = (f, t) => { /* ignore */ };

// Mock UI funcs
global.msgs = global.document.getElementById();
global.disOld = () => {};
global.showTyp = () => {};
global.hideTyp = () => {};
global.addUser = () => {};
global.addBot = (t) => { global.LAST_REPLY = t; };
global.botReply = (r) => { global.LAST_REPLY = r.text; };
global.scr = () => {};
global.checkModeration = () => ({blocked:false});

let scriptText = fs.readFileSync('script.js', 'utf8');
// prevent UI binding crashes
scriptText = scriptText.replace('function startRVCEChatbot() {', '');
scriptText = scriptText.replace("}\r\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");
scriptText = scriptText.replace("}\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");

eval(scriptText);

process("IEM PLACEMENT 2022");
console.log(global.LAST_REPLY);
