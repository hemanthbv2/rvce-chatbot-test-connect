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

eval(modScript);

const query = "can you tell me about who is the hod of cs_cse";

let cleanInput = query.replace(/[^\\w\\s-]/gi, '').trim().toLowerCase();
console.log("cleanInput:", cleanInput);

let matchedIntents = [];

// Simulate classifyIntent matching
for (const q of global.QA) {
    for (const k of q.k) {
        let isMatch = false;
        
        if (k === cleanInput) {
            isMatch = true;
        } else if (cleanInput.includes(k) && k.length > 5) {
            isMatch = true;
        } else if (Math.abs(cleanInput.length - k.length) < 3) {
            let dist = 0;
            const maxDist = k.length > 10 ? 2 : 1;
            
            if (cleanInput.length === k.length) {
                for(let i=0; i<k.length; i++) if (cleanInput[i] !== k[i]) dist++;
                if (dist <= 1 || (k.length > 7 && dist <= 2)) isMatch = true;
            }
        }
        
        if (isMatch) {
            matchedIntents.push({ id: q.id, k: k, p: q.p, len: k.length });
        }
    }
}
console.log("Matched:", matchedIntents);
