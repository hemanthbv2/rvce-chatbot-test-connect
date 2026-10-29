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

const issues = [];
const depts = Object.keys(KB.placement_stats);
const yearsToTest = [null, '2025-26', '2024-25', '2023-24', '2023', '2022', '2099'];

depts.forEach(dept => {
    ['', '_ug', '_pg'].forEach(suffix => {
        yearsToTest.forEach(yr => {
            const intent = 'plcmt_' + dept + suffix;
            SESSION.reqYear = yr;
            
            try {
                const res = getResponse(intent);
                if (!res || !res.text) {
                    issues.push(`NO TEXT RETURNED for ${intent} (Year: ${yr})`);
                } else if (res.text.includes('undefined')) {
                    issues.push(`UNDEFINED FOUND in ${intent} (Year: ${yr})`);
                    console.log(`--- ${intent} (${yr}) ---`);
                    console.log(res.text);
                } else if (res.text.includes('[object Object]')) {
                    issues.push(`OBJECT FOUND in ${intent} (Year: ${yr})`);
                }
            } catch (e) {
                issues.push(`CRASH in ${intent} (Year: ${yr}): ${e.message}`);
            }
        });
    });
});

console.log("\n==== VALIDATION RESULTS ====");
if (issues.length === 0) {
    console.log("SUCCESS! No errors found across all departments, programs, and years.");
} else {
    console.log(`Found ${issues.length} issues:`);
    issues.forEach(i => console.log(i));
}
