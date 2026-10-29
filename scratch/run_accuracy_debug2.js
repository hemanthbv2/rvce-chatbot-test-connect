const fs = require('fs');
const path = require('path');

// MOCK THE DOM
global.document = {
    getElementById: () => ({ addEventListener: ()=>{}, classList: {add:()=>{}, remove:()=>{}}, style: {}, innerHTML: '', value: '', scrollHeight: 0, appendChild: ()=>{}, querySelectorAll: ()=>[] }),
    createElement: () => ({ classList: {add:()=>{}, remove:()=>{}}, style: {}, innerHTML: '', textContent: '', appendChild: ()=>{}, querySelectorAll: ()=>[] }),
    addEventListener: () => {},
    readyState: 'complete'
};
global.window = {
    addEventListener: () => {},
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    speechSynthesis: { getVoices: () => [], speak: () => {} },
    SpeechSynthesisUtterance: class {},
    innerWidth: 1024, innerHeight: 768
};
global.navigator = { language: 'en-US' };

let scriptContent = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');

const injection = `
    global.QA = QA;
    global.classifyIntent = classifyIntent;
    global.findFacultyMatch = findFacultyMatch;
    return; // Exit execution!
function getResponse(id) {
`;

let modScript = scriptContent.replace("function getResponse(id) {", injection);

try {
    eval(modScript);
    if (typeof startRVCEChatbot !== 'undefined') {
        startRVCEChatbot();
    }
} catch(e) {
    console.error("Eval error:", e);
    process.exit(1);
}

let passed = 0;
let total = 0;
let results = [];

// For every intent in QA, pick a test phrase
global.QA.forEach(intent => {
    if (intent.id === 'about_disambiguation' || intent.id === 'stats_disambiguation' || intent.id === 'ug_disambiguation' || intent.id === 'menu') return;
    
    let testPhrase = intent.k.reduce((a, b) => a.length > b.length ? a : b, "");
    
    let query = "can you tell me about " + testPhrase;
    
    if (intent.id === 'greet') query = "hello good morning";
    if (intent.id === 'bye') query = "thank you goodbye";
    if (intent.id === 'campus_size') query = "what is the campus size";
    
    let res = global.classifyIntent(query);
    
    let matchedId = res.id;
    if (res && res.type === 'fuzzy') {
         matchedId = res.id;
    }
    
    let isPass = false;
    
    // Composite Hub Rules
    const compositeMap = {
        'hod': 'dept',
        'plcmt': 'dept',
        'syllabus': 'dept'
    };
    
    let isCompositePass = false;
    if (intent.id.startsWith('hod_') || intent.id.startsWith('plcmt_')) {
        const prefix = intent.id.split('_')[0];
        const branch = intent.id.substring(prefix.length + 1);
        const mappedTarget = compositeMap[prefix] + '_' + branch;
        
        if (matchedId === mappedTarget) isCompositePass = true;
    }

    if (matchedId === intent.id || isCompositePass) {
        isPass = true;
    } else if (res && res.type === 'multi' && res.ids && res.ids.includes(intent.id)) {
        isPass = true;
        matchedId = "multi(" + res.ids.join(',') + ")";
    } else if (res && res.type === 'multi' && res.overflow && res.overflow.includes(intent.id)) {
        isPass = true;
        matchedId = "multi_overflow(" + intent.id + ")";
    }
    
    if (isPass) passed++;
    total++;
    
    results.push({
        intent: intent.id,
        query: query,
        passed: isPass,
        matched: matchedId,
        res: res
    });
});

const accuracy = ((passed / total) * 100).toFixed(2);
const report = `# Comprehensive Chatbot Accuracy Report 🎯

**Total Intents Tested:** ${total}
**Passed:** ${passed}
**Accuracy Score:** ${accuracy}%

### Detailed Results
| Target Intent | Test Query | Detected Intent | Status |
| :--- | :--- | :--- | :--- |
${results.map(r => `| \`${r.intent}\` | "${r.query}" | \`${r.matched}\` | ${r.passed ? '✅ Pass' : '❌ Fail'} |`).join('\n')}
`;

const fails = results.filter(r=>!r.passed); if(fails.length) console.log(`\\nFailed: \\n` + fails.map(f=>`Intent: ${f.intent}, Matched: ${f.matched}, Query: ${f.query}, Res: ${JSON.stringify(f.res)}`).join(`\\n`));
console.log(`Test complete. Accuracy: ${accuracy}%`);

console.log("TESTING QA FOR HOD_CS_CSE");
console.log(global.QA.find(q => q.id === 'hod_cs_cse'));
console.log("TESTING QA FOR PLCMT_CS_CSE");
console.log(global.QA.find(q => q.id === 'plcmt_cs_cse'));
