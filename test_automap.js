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
// inject auto-map logic
scriptText = scriptText.replace(
    "if (best) return { type: 'keyword', id: best, year: extractedYear, suggestions: []  };",
    "if (best) {\n        if (extractedYear && best.startsWith('dept_')) {\n            best = best.replace('dept_', 'plcmt_');\n        }\n        return { type: 'keyword', id: best, year: extractedYear, suggestions: []  };\n    }"
);

scriptText = scriptText.replace('function startRVCEChatbot() {', '');
scriptText = scriptText.replace("}\r\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");
scriptText = scriptText.replace("}\nif (document.readyState === 'loading')", "if (document.readyState === 'loading')");

eval(scriptText);

const queries = [
    "ETE 2023",
    "iem 2022",
    "civil 2024",
    "cse 2021"
];

queries.forEach(q => {
    const res = classifyIntent(q);
    console.log(`"${q}" -> ${res.id} (year: ${res.year})`);
    
    // Test the pipeline
    process(q);
    console.log(global.LAST_REPLY.substring(0, 100) + '...');
});
