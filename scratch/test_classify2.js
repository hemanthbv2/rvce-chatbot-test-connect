const fs = require('fs');

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

let scriptContent = fs.readFileSync('script.js', 'utf8');

const injection = `
    global.QA = QA;
    global.classifyIntent = classifyIntent;
    return; // Exit execution!
function getResponse(id) {
`;

let modScript = scriptContent.replace("function getResponse(id) {", injection);
modScript = modScript.replace(/let best = null;/, `let best = null; console.log("MATCHED INTENTS:", matchedIntents);`);
eval(modScript);

console.log("CLASSIFY RESULT:", global.classifyIntent("can you tell me about placements in mtech cse"));
