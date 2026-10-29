const fs = require('fs');

let scriptContent = fs.readFileSync('script.js', 'utf8');

global.document = {getElementById:()=>({}), createElement:()=>({}), addEventListener:()=>({}), readyState:'complete'};
global.window = {addEventListener:()=>({}), localStorage:{getItem:()=>null}, speechSynthesis:{}};

// Expose internal functions
let modScript = scriptContent + "\n\nglobal.QA = QA; global.classifyIntent = classifyIntent;";
// Remove the DOMContentLoaded listener and getResponse to prevent errors
modScript = modScript.replace(/document\.addEventListener\('DOMContentLoaded'.*[\s\S]*\}\);/m, "");

// Inject a console log to track exactly what happens during matching for plcmt_cs_cse
modScript = modScript.replace('for (const q of QA) {', 
    `for (const q of QA) {
        if (q.id === 'plcmt_cs_cse') {
            global.debugPlcmt = true;
        } else {
            global.debugPlcmt = false;
        }
    `);

modScript = modScript.replace('let isMatch = regex.test(cleanInput) || regex.test(strippedInput);',
    `let isMatch = regex.test(cleanInput) || regex.test(strippedInput);
     if (global.debugPlcmt) {
         console.log("Checking keyword:", k);
         console.log("Regex:", regex);
         console.log("cleanInput:", cleanInput);
         console.log("strippedInput:", strippedInput);
         console.log("isMatch:", isMatch);
     }
    `);

modScript = modScript.replace('matchedIntents.push(q);', 
    `matchedIntents.push(q);
     if (global.debugPlcmt) console.log("PUSHED to matchedIntents!");
    `);

try {
    eval(modScript);
    console.log("TESTING: can you tell me about placements in m.tech cse");
    console.log(global.classifyIntent('can you tell me about placements in m.tech cse'));
} catch (e) {
    console.error(e);
}
