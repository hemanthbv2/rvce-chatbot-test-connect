const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Strip out everything except QA array and classifyIntent
const classifyRegex = /function classifyIntent[\s\S]+?return \{.*?\};\n    \}/;
const classifyMatch = code.match(classifyRegex);

const qaRegex = /const QA = \[[\s\S]+?\];/;
const qaMatch = code.match(qaRegex);

const scriptContent = `
${qaMatch[0]}
${classifyMatch[0]}

console.log(classifyIntent("ECE PLACEMENT STATS 2025"));
console.log(classifyIntent("ECE PLACEMENT STATS"));
console.log(classifyIntent("ECE 2025"));
`;

fs.writeFileSync('test_classify_pure.js', scriptContent);
