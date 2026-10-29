const fs = require('fs');
let scriptContent = fs.readFileSync('script.js', 'utf8');

global.document = {getElementById:()=>({}), createElement:()=>({}), addEventListener:()=>({}), readyState:'complete'};
global.window = {addEventListener:()=>({}), localStorage:{getItem:()=>null}, speechSynthesis:{}};

const injection = `global.QA = QA; return; function getResponse(id) {`;
let modScript = scriptContent.replace('function getResponse(id) {', injection);

eval(modScript);
const q = global.QA.find(q=>q.id==='plcmt_cs_cse');
console.log('plcmt_cs_cse keywords:', q.k);
