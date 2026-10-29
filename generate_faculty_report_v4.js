const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('full_faculty_audit_raw.json', 'utf8'));
const currentBotFaculty = JSON.parse(fs.readFileSync('chatbot_faculty_summary.json', 'utf8'));

// Common site navigation & footer noise words to exclude
const excludeWords = [
    'about college', 'key executives', 'statutory committees', 'policies and documents',
    'academic student services', 'research centre', 'centre of competence', 'centre of excellence',
    'student corner', 'innovative teams', 'cultural activity teams', 'quick access', 'media says',
    'privacy policy', 'program coordinator', 'faculty', 'programmes', 'scheme & syllabus',
    'placements', 'consultancy', 'patents', 'sports & games', 'nss', 'ncc', 'faq', 'alumni', 'facilities',
    'phone no:', 'follow us', 'address:', 'contact us', 'phone:', 'email:', 'read more'
];

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

const deptURLs = {
    ae: "https://rvce.edu.in/department/ae/faculty/",
    aiml: "https://rvce.edu.in/department/aiml/faculty/",
    bt: "https://rvce.edu.in/department/bt/faculty/",
    ch: "https://rvce.edu.in/department/ch/faculty/",
    chy: "https://rvce.edu.in/department/chy/faculty/",
    cv: "https://rvce.edu.in/department/cv/faculty/",
    cs: "https://rvce.edu.in/department/cse/faculty/",
    ee: "https://rvce.edu.in/department/eee/faculty/",
    ec: "https://rvce.edu.in/department/ece/faculty/",
    ei: "https://rvce.edu.in/department/eim/faculty/",
    et: "https://rvce.edu.in/department/etc/faculty/",
    im: "https://rvce.edu.in/department/iem/faculty/",
    is: "https://rvce.edu.in/department/ise/faculty/",
    mat: "https://rvce.edu.in/department/maths/faculty/",
    mca: "https://rvce.edu.in/department/mca/faculty/",
    me: "https://rvce.edu.in/department/me/faculty/",
    phy: "https://rvce.edu.in/department/physics/faculty/"
};

// Smart character-sorted normalization
function smartNormalize(name) {
    if (!name || typeof name !== 'string') return '';
    return name.toLowerCase()
        .replace(/^(dr\.|prof\.|mr\.|mrs\.|ms\.|shri\.|er\.)\s*/gi, '')
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
}

let report = `# 🎓 Master Faculty Audit Report Across All 17 Departments (Live Status)

We have audited the official faculty pages across all 17 departments on the live RVCE website and compared them against the chatbot's current knowledge base (\`script.js\`).

> [!NOTE]
> Names with minor casing, formatting, or initial order variations (e.g., \`Dr. R Supreeth\` vs \`DR. SUPREETH R\`) are accurately recognized as **MATCHING**.

---

## 📊 Consolidated Summary Table

| Department Code | Department Name | Chatbot Faculty Count | Live Website Faculty | Matching Count | Outdated in Chatbot (To Remove) | New on Website (To Add) |
|---|---|---|---|---|---|---|
`;

let deptBreakdownMD = `\n---\n\n## 📝 Detailed Department-by-Department Breakdown\n\n`;

Object.keys(deptFullNames).forEach(code => {
    let rawObj = raw[code] || {};
    let rawWebList = rawObj.liveFaculty || [];

    let webList = rawWebList
        .map(item => typeof item === 'string' ? item : item.name)
        .filter(n => n && typeof n === 'string' && !excludeWords.some(w => n.toLowerCase().includes(w)));
    
    // Deduplicate web list
    const seenWeb = new Set();
    const dedupedWeb = [];
    webList.forEach(n => {
        const norm = smartNormalize(n);
        if (norm && !seenWeb.has(norm)) {
            seenWeb.add(norm);
            dedupedWeb.push(n);
        }
    });

    const rawBotList = currentBotFaculty[code] || [];
    const botList = rawBotList.map(item => typeof item === 'string' ? item : item.n);

    const matching = [];
    const outdatedInBot = [];
    const newOnWeb = [];

    const webNormSet = new Set(dedupedWeb.map(n => smartNormalize(n)));
    const botNormSet = new Set(botList.map(n => smartNormalize(n)));

    botList.forEach(name => {
        const norm = smartNormalize(name);
        if (webNormSet.has(norm)) {
            matching.push(name);
        } else {
            outdatedInBot.push(name);
        }
    });

    dedupedWeb.forEach(name => {
        const norm = smartNormalize(name);
        if (!botNormSet.has(norm)) {
            newOnWeb.push(name);
        }
    });

    const codeUpper = code.toUpperCase();
    const deptName = deptFullNames[code];
    const deptUrl = deptURLs[code];

    report += `| **${codeUpper}** | ${deptName} | ${botList.length} | ${dedupedWeb.length} | ${matching.length} | ${outdatedInBot.length} | ${newOnWeb.length} |\n`;

    deptBreakdownMD += `### 🏢 Department: ${deptName} (${codeUpper})\n`;
    deptBreakdownMD += `- **Official URL**: [${deptUrl}](${deptUrl})\n`;
    deptBreakdownMD += `- **Total Chatbot Faculty**: ${botList.length}\n`;
    deptBreakdownMD += `- **Total Website Faculty**: ${dedupedWeb.length}\n`;
    deptBreakdownMD += `- **Matching Faculty (${matching.length})**: ${matching.join(', ') || 'None'}\n`;
    if (outdatedInBot.length > 0) {
        deptBreakdownMD += `- 🔴 **Outdated in Chatbot (${outdatedInBot.length})**: ${outdatedInBot.join(', ')}\n`;
    } else {
        deptBreakdownMD += `- 🔴 **Outdated in Chatbot**: None (0)\n`;
    }
    if (newOnWeb.length > 0) {
        deptBreakdownMD += `- 🟢 **New on Website (${newOnWeb.length})**: ${newOnWeb.join(', ')}\n`;
    } else {
        deptBreakdownMD += `- 🟢 **New on Website**: None (0)\n`;
    }
    deptBreakdownMD += `\n`;
});

const finalDoc = report + deptBreakdownMD;

const artifactPath = `C:/Users/HP/.gemini/antigravity-ide/brain/9c145923-b128-46eb-954f-65de4d06453c/Faculty_Extraction_Report.md`;
fs.writeFileSync(artifactPath, finalDoc, 'utf8');
console.log('Successfully updated Faculty Audit Report v4 with clean strings!');
