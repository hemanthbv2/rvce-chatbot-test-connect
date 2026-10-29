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

try {
    eval(modScript);
    if (typeof startRVCEChatbot !== 'undefined') {
        startRVCEChatbot();
    }
} catch(e) {
    console.error("Eval error:", e);
    process.exit(1);
}

console.log(global.classifyIntent("can you tell me about dr. b. m. sagar"));
console.log(global.classifyIntent("can you tell me about reach the college"));
console.log(global.classifyIntent("can you tell me about direct admission"));
