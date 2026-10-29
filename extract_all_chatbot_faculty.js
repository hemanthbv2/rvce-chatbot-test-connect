const fs = require('fs');

const scriptCode = fs.readFileSync('script.js', 'utf8');

// Match KB.faculty object specifically
const kbFacultyMatch = scriptCode.match(/faculty:\s*\{([\s\S]*?)\n\s*\},/);

if (!kbFacultyMatch) {
    console.error("Could not find KB.faculty");
    process.exit(1);
}

const facultyBlock = kbFacultyMatch[1];
const depts = ['ae', 'aiml', 'bt', 'ch', 'chy', 'cv', 'cs', 'ee', 'ec', 'ei', 'et', 'im', 'is', 'mat', 'mca', 'me', 'phy'];

const facultyData = {};
depts.forEach(d => {
    const reg = new RegExp(`${d}:\\s*\\[([\\s\\S]*?)\\]\\s*,?`, 'i');
    const match = facultyBlock.match(reg);
    if (match) {
        const items = [...match[1].matchAll(/n:\s*"([^"]+)"/g)].map(x => x[1]);
        facultyData[d] = items;
    } else {
        facultyData[d] = [];
    }
});

fs.writeFileSync('chatbot_faculty_summary.json', JSON.stringify(facultyData, null, 2));
console.log("Updated chatbot faculty summary saved to chatbot_faculty_summary.json");
