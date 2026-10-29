const fs = require('fs');

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

let scriptContent = fs.readFileSync('script.js', 'utf8');

const injection = `
    global.QA = QA;
    global.classifyIntent = classifyIntent;
    return; // Exit execution!
function getResponse(id) {
`;

let modScript = scriptContent.replace("function getResponse(id) {", injection);

eval(modScript);

console.log(global.classifyIntent("can you tell me about placements in mtech cse"));
console.log(global.classifyIntent("can you tell me about who is the hod of cs_cse"));
