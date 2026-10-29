const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

// Strip out everything except QA array, helper functions (levenshtein, etc), and classifyIntent
const classifyRegex = /function classifyIntent[\s\S]+?return \{.*?\};\n    \}/;
const classifyMatch = code.match(classifyRegex);

const qaRegex = /const QA = \[[\s\S]+?\];/;
const qaMatch = code.match(qaRegex);

const depRegex = /const KB = \{[\s\S]+?ug: \[[\s\S]+?\],\n\s+pg: \[[\s\S]+?\]\n\s+\};\n/;
const depMatch = code.match(depRegex);

const helperRegex = /function levenshtein[\s\S]+?return mat\[b\.length\]\[a\.length\];\n}/;
const helperMatch = code.match(helperRegex);

const findFacRegex = /function findFacultyMatch[\s\S]+?return null;\n}/;
const findFacMatch = code.match(findFacRegex);

const sanitize = `
function sanitize(str) {
    if (!str) return '';
    return str.replace(/[^\\w\\s-]/g, '').trim();
}
`;

const scriptContent = `
${sanitize}
${helperMatch ? helperMatch[0] : ''}
${findFacMatch ? findFacMatch[0] : 'function findFacultyMatch(){return null;}'}
${qaMatch[0]}
${depMatch ? depMatch[0] : 'const KB = {departments:{ug:[],pg:[]}};' }
${classifyMatch[0]}

console.log(classifyIntent("ECE PLACEMENT STATS 2025"));
`;

fs.writeFileSync('test_classify_live.js', scriptContent);
