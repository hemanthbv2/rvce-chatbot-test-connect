const fs = require('fs');

global.window = { innerWidth: 1000, innerHeight: 1000, addEventListener: () => {} };
global.document = { 
    readyState: 'complete',
    addEventListener: () => {}, 
    getElementById: () => ({ addEventListener: () => {}, classList: { add: ()=>{}, remove: ()=>{} }, scrollTop: 0, scrollHeight: 0, appendChild: () => {}, innerHTML: '', style: {} }),
    querySelector: () => ({}),
    createElement: () => ({ classList: { add: ()=>{} }, dataset: {}, appendChild: ()=>{} }),
    querySelectorAll: () => []
};
global.navigator = { userAgent: "Node" };

const scriptContent = fs.readFileSync('script.js', 'utf8');
eval(scriptContent);

const testQuery = "What is the latest news on campus?";
const intent = classifyIntent(testQuery);
console.log("Intent for '" + testQuery + "':", intent);

if (intent && intent.id) {
    const response = getResponse(intent.id);
    console.log("Response text:", response.text);
}
