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

let c = fs.readFileSync('script.js', 'utf8');
let m = c.replace('function getResponse(id) {', 'global.findFacultyMatch=findFacultyMatch; global.classifyIntent=classifyIntent; return; function getResponse(id) {');
eval(m);
console.log("findFacultyMatch: ", global.findFacultyMatch('can you tell me about dr chitra b t'));
console.log("classifyIntent: ", global.classifyIntent('can you tell me about dr chitra b t'));
console.log("classifyIntent (hod_cs cse): ", global.classifyIntent('can you tell me about who is the hod of cs cse'));
console.log("classifyIntent (plcmt_cs cse): ", global.classifyIntent('can you tell me about placements in mtech cse'));
