const fs = require('fs');

global.document = {
    readyState: 'complete',
    addEventListener: () => {},
    getElementById: () => ({ addEventListener: ()=>{}, classList: {add:()=>{}, remove:()=>{}}, style: {}, innerHTML: '', value: '', scrollHeight: 0, appendChild: ()=>{}, querySelectorAll: ()=>[] }),
    createElement: () => ({ classList: {add:()=>{}, remove:()=>{}}, style: {}, innerHTML: '', textContent: '', appendChild: ()=>{}, querySelectorAll: ()=>[] })
};
global.window = {
    addEventListener: () => {},
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    speechSynthesis: { getVoices: () => [], speak: () => {} },
    SpeechSynthesisUtterance: class {},
    innerWidth: 1024, innerHeight: 768
};
global.navigator = { language: 'en-US' };

let c = fs.readFileSync('script.js', 'utf8');

const injection = `
    global.findFacultyMatch = findFacultyMatch;
    global.classifyIntent = classifyIntent;
    return;
`;
let m = c.replace('function getResponse(id) {', injection);

try {
    eval(m);
    console.log("findFacultyMatch output: ", global.findFacultyMatch('can you tell me about dr chitra b t'));
    console.log("classifyIntent output: ", global.classifyIntent('can you tell me about dr chitra b t'));
} catch (e) {
    console.error("Eval error:", e);
}
