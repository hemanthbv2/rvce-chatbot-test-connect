const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

global.window = {};
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener:()=>{}, style:{}, classList:{add:()=>{},remove:()=>{}} })
};
global.localStorage = { getItem:()=>null, setItem:()=>{} };
global.T = (en) => en;

// Stub out ALL UI manipulation functions inside script.js using regex
code = code.replace(/function startRVCEChatbot\(\) \{[\s\S]*?\n\}/, 'function startRVCEChatbot() {}');
code = code.replace(/function botReply[\s\S]*?\n\}/g, 'function botReply(r) { console.log("BOT_REPLY:", r); }');
code = code.replace(/function getResponse[\s\S]*?return r;\n    \}/g, function(match) { return match; });

// Insert logging inside classifyIntent!
code = code.replace(/if \(matchedIntents\.length > 1\) \{/, 'console.log("matchedIds:", matchedIntents.map(q=>q.id));\n    if (matchedIntents.length > 1) {');
code = code.replace(/const deptMatch = deptMatches\[0\];/, 'const deptMatch = deptMatches[0];\n            console.log("deptMatch:", deptMatch);');
code = code.replace(/best = \`plcmt_\$\{branchCode\}\`;/, 'best = `plcmt_${branchCode}`;\n                    console.log("BEST SET TO:", best);');

eval(code);

console.log("TESTING CLASSIFY INTENT:");
const q = "ECE PLACEMENT STATS 2025";
const res = classifyIntent(q);
console.log("RESULT:", res);
