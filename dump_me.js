const fs = require('fs');

global.document = { readyState: 'complete', addEventListener: () => {} };
global.window = {};
global.T = (en, kb) => en;
global.SESSION = { reqYear: null };

let scriptText = fs.readFileSync('script.js', 'utf8');
scriptText = scriptText.replace('function startRVCEChatbot() {', '');
const lastBrace = scriptText.lastIndexOf('}');
scriptText = scriptText.substring(0, lastBrace) + scriptText.substring(lastBrace + 1);
scriptText = scriptText.replace('startRVCEChatbot();', '');
eval(scriptText);

const intent = classifyIntent("ece placement 2023");
console.log(intent);
