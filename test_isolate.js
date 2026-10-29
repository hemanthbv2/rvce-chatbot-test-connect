const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Strip out everything UI related and extract just classifyIntent and QA
const extractFunction = (funcName, codeStr) => {
    const regex = new RegExp(`function ${funcName}\\s*\\([^{]*{`);
    const match = regex.exec(codeStr);
    if (!match) return '';
    let start = match.index;
    let braceCount = 0;
    let inString = false;
    let stringChar = '';
    let end = start;
    
    for (let i = start; i < codeStr.length; i++) {
        const char = codeStr[i];
        if (!inString) {
            if (char === '"' || char === "'" || char === '`') {
                inString = true;
                stringChar = char;
            } else if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    end = i + 1;
                    break;
                }
            }
        } else {
            if (char === stringChar && codeStr[i - 1] !== '\\') {
                inString = false;
            }
        }
    }
    return codeStr.substring(start, end);
};

let classifyIntentCode = extractFunction('classifyIntent', code);

// Extract KB and QA manually
let kbStart = code.indexOf('const KB = {');
let kbEnd = code.indexOf('const INTENT_LABELS');
let kbStr = code.substring(kbStart, kbEnd);

let qaStart = code.indexOf('const QA = [');
let qaEnd = code.indexOf('// --- NLP');
let qaStr = code.substring(qaStart, qaEnd);

let helpers = `
function findSuggestions(text) { return []; }
function findFacultyMatch(text) { return null; }
`;

let fullCode = kbStr + '\n' + qaStr + '\n' + helpers + '\n' + classifyIntentCode + '\n' + `
console.log(classifyIntent("ECE PLACEMENT STATS 2025"));
`;

fs.writeFileSync('test_nlp_isolated.js', fullCode);
console.log("Written to test_nlp_isolated.js");
