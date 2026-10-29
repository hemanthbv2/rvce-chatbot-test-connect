const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('full_faculty_audit_raw.json', 'utf8'));

// Common site navigation & footer noise words to exclude
const excludeWords = [
    'about college', 'key executives', 'statutory committees', 'policies and documents',
    'academic student services', 'research centre', 'centre of competence', 'centre of excellence',
    'student corner', 'innovative teams', 'cultural activity teams', 'quick access', 'media says',
    'privacy policy', 'program coordinator', 'faculty', 'programmes', 'scheme & syllabus',
    'placements', 'consultancy', 'patents', 'sports & games', 'nss', 'ncc', 'faq', 'alumni', 'facilities',
    'phone no:', 'follow us', 'address:', 'contact us', 'phone:', 'email:', 'read more'
];

let report = `# 🎓 Master Faculty Audit Report Across All 17 Departments

We have audited the official faculty pages across all 17 departments on the live RVCE website and compared them against the chatbot's current knowledge base (\`script.js\`).

---

## 📊 Consolidated Summary Table

| Department Code | Department Name | Chatbot Faculty Count | Live Website Faculty | Matching Count | Outdated in Chatbot (To Remove) | New on Website (To Add) |
|---|---|---|---|---|---|---|
`;

const deptFullNames = {
    ae: "Aerospace Engineering",
    aiml: "AI & Machine Learning",
    bt: "Biotechnology",
    ch: "Chemical Engineering",
    chy: "Chemistry",
    cv: "Civil Engineering",
    cs: "Computer Science & Engineering",
    ee: "Electrical & Electronics Engineering",
    ec: "Electronics & Communication Engineering",
    ei: "Electronics & Instrumentation Engineering",
    et: "Electronics & Telecommunication Engineering",
    im: "Industrial Engineering & Management",
    is: "Information Science & Engineering",
    mat: "Mathematics",
    mca: "Master of Computer Applications",
    me: "Mechanical Engineering",
    phy: "Physics"
};

const detailedSections = [];

for (const [dept, data] of Object.entries(raw)) {
    if (data.error) {
        report += `| **${dept.toUpperCase()}** | ${deptFullNames[dept] || dept} | ${data.botFaculty.length} | Error | - | - | - |\n`;
        continue;
    }

    const rawLiveList = data.liveFaculty || [];
    const botList = data.botFaculty || [];

    // Filter out site UI navigation elements
    const liveList = rawLiveList.filter(name => {
        const lower = name.toLowerCase().trim();
        return !excludeWords.some(w => lower.includes(w)) && name.length > 3;
    });

    const normalize = (name) => name.toLowerCase().replace(/^(dr\.|prof\.|mr\.|mrs\.|ms\.|shri\.)\s*/i, '').replace(/[^a-z]/g, '');

    const liveNorm = liveList.map(n => ({ original: n, norm: normalize(n) }));
    const botNorm = botList.map(n => ({ original: n, norm: normalize(n) }));

    const matching = [];
    const botOnly = []; 
    const liveOnly = []; 

    botNorm.forEach(b => {
        const found = liveNorm.find(l => l.norm.includes(b.norm) || b.norm.includes(l.norm));
        if (found) {
            matching.push(b.original);
        } else {
            botOnly.push(b.original);
        }
    });

    liveNorm.forEach(l => {
        const found = botNorm.find(b => b.norm.includes(l.norm) || l.norm.includes(b.norm));
        if (!found) {
            liveOnly.push(l.original);
        }
    });

    report += `| **${dept.toUpperCase()}** | ${deptFullNames[dept] || dept} | ${botList.length} | ${liveList.length} | ${matching.length} | ${botOnly.length} | ${liveOnly.length} |\n`;

    let section = `### 🏢 Department: ${deptFullNames[dept]} (${dept.toUpperCase()})
- **Official URL**: [${data.url}](${data.url})
- **Total Chatbot Faculty**: ${botList.length}
- **Total Website Faculty**: ${liveList.length}
- **Matching Faculty (${matching.length})**: ${matching.length > 0 ? matching.join(', ') : 'None'}

`;

    if (botOnly.length > 0) {
        section += `🔴 **Faculty in Chatbot BUT NOT on Website (${botOnly.length} - Proposed to REMOVE)**:\n`;
        botOnly.forEach(f => section += `  - ${f}\n`);
    } else {
        section += `🔴 **Faculty in Chatbot BUT NOT on Website**: None (100% matched)\n`;
    }

    if (liveOnly.length > 0) {
        section += `🟢 **New Faculty on Website NOT in Chatbot (${liveOnly.length} - Available to ADD)**:\n`;
        liveOnly.forEach(f => section += `  - ${f}\n`);
    } else {
        section += `🟢 **New Faculty on Website NOT in Chatbot**: None\n`;
    }

    detailedSections.push(section);
}

report += `\n---\n\n## 📝 Detailed Department-by-Department Breakdown\n\n` + detailedSections.join('\n---\n\n');

fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/9c145923-b128-46eb-954f-65de4d06453c/Faculty_Extraction_Report.md', report, 'utf8');
console.log("Cleaned Faculty Audit Report generated!");
