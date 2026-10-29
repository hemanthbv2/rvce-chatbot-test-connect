const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');

// Extract just the NLP portion for isolated testing
const nlpStart = scriptContent.indexOf('const STOP_WORDS');
const nlpEnd = scriptContent.indexOf('/* =============== CONTENT MODERATION =============== */');
const nlpPortion = scriptContent.substring(nlpStart, nlpEnd);

eval(nlpPortion);

const tests = [
    "what is cse",
    "what is ise",
    "tell me about mechanical",
    "what is the fee for cse",
    "show me hod of ece",
    "admissions process",
    "what is placement statistics for computer science",
];

for (const t of tests) {
    const result = processNLPInput(t);
    console.log(`Input: "${t}"`);
    console.log(`  → Tokens: [${result.tokens.join(', ')}]`);
    console.log(`  → Clean:  "${result.cleanString}"\n`);
}
