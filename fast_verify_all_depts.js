const fs = require('fs');

const scriptCode = fs.readFileSync('script.js', 'utf8');

// Extract KB.faculty block
const facultyMatch = scriptCode.match(/faculty:\s*\{([\s\S]*?)\}\s*,\s*placement:/i);

if (!facultyMatch) {
    console.error("Could not find KB.faculty block in script.js");
    process.exit(1);
}

const facultyBlock = facultyMatch[1];

const depts = ['ae', 'aiml', 'bt', 'ch', 'chy', 'cv', 'cs', 'ee', 'ec', 'ei', 'et', 'im', 'is', 'mat', 'mca', 'me', 'phy'];

const deptSummary = {};

depts.forEach(code => {
    const reg = new RegExp(`${code}:\\s*\\[([\\s\\S]*?)\\]\\s*,?`, 'i');
    const m = facultyBlock.match(reg);
    if (m) {
        const listStr = m[1];
        const entries = [...listStr.matchAll(/\{\s*n:\s*"([^"]+)"\s*,\s*u:\s*"([^"]+)"/g)];
        deptSummary[code] = entries.map(e => ({ name: e[1], url: e[2] }));
    } else {
        deptSummary[code] = [];
    }
});

console.log("=== Chatbot Knowledge Base (script.js) Current Status ===");
let totalFaculty = 0;
depts.forEach(code => {
    const count = deptSummary[code].length;
    totalFaculty += count;
    console.log(`Department [${code.toUpperCase()}]: ${count} Faculty Members`);
});

console.log(`\nTOTAL FACULTY ACROSS ALL 17 DEPARTMENTS IN SCRIPT.JS: ${totalFaculty}`);

fs.writeFileSync('chatbot_faculty_verified_counts.json', JSON.stringify(deptSummary, null, 2));
