const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Extract QA
const qaMatch = code.match(/const QA = \[[\s\S]*?\];/);
// Extract classifyIntent
const classifyMatch = code.match(/function classifyIntent\(input\) \{[\s\S]*?return \{ type: isComposite \? 'exact' : 'keyword', id: best, year: extractedYear, suggestions: \[\]  \};\n    \}\n\n    \/\/ No match at all\n    return null;\n\}/);

let finalCode = "";
finalCode += qaMatch[0] + "\n\n";

// Stub KB
finalCode += `
const KB = {
    general: { coes_db: [] },
    faculty: {},
    departments: {
        ug: [{n:'Electronics & Communication (ECE)', c:'ec'}],
        pg: []
    }
};
function findFacultyMatch() { return null; }
function findSuggestions() { return []; }
`;

finalCode += classifyMatch[0] + "\n\n";

finalCode += `console.log(classifyIntent("ECE PLACEMENT STATS 2025"));`;

fs.writeFileSync('test_extract.js', finalCode);
