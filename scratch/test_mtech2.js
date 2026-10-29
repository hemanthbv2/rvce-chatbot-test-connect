const fs = require('fs');
let scriptContent = fs.readFileSync('script.js', 'utf8');

global.document = {getElementById:()=>({}), createElement:()=>({}), addEventListener:()=>({}), readyState:'complete'};
global.window = {addEventListener:()=>({}), localStorage:{getItem:()=>null}, speechSynthesis:{}};

const injection = `global.QA = QA; global.classifyIntent = classifyIntent; return; function getResponse(id) {`;
let modScript = scriptContent.replace('function getResponse(id) {', injection);
modScript = modScript.replace('if (best) {', `if (input.includes('placements in m.tech cse')) { console.log('DEBUG MATCHED:', matchedIntents.map(m=>m.id)); }\nif (best) {`);

try {
    eval(modScript);
    console.log(global.classifyIntent('can you tell me about placements in m.tech cse'));
} catch (e) {
    console.log(e);
}
