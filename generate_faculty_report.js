const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('full_faculty_audit_raw.json', 'utf8'));

let report = `# 🎓 Master Faculty Audit Report Across All Departments

We have completed the department-by-department crawl of the official RVCE website faculty pages and compared every listed faculty member against the chatbot's current knowledge base (\`script.js\`).

---

## 📊 Summary Table

| Department | Live Website Faculty | Chatbot Faculty | Matching | Outdated in Chatbot (To Remove) | New on Website (To Add) |
|---|---|---|---|---|---|
`;

const detailedSections = [];

for (const [dept, data] of Object.entries(raw)) {
    if (data.error) {
        report += `| **${dept.toUpperCase()}** | Error | ${data.botFaculty.length} | - | - | - |\n`;
        continue;
    }

    const liveList = data.liveFaculty || [];
    const botList = data.botFaculty || [];

    // Helper normalization for matching
    const normalize = (name) => name.toLowerCase().replace(/^(dr\.|prof\.|mr\.|mrs\.|ms\.|shri\.)\s*/i, '').replace(/[^a-z]/g, '');

    const liveNorm = liveList.map(n => ({ original: n, norm: normalize(n) }));
    const botNorm = botList.map(n => ({ original: n, norm: normalize(n) }));

    const matching = [];
    const botOnly = []; // In bot, not on site
    const liveOnly = []; // On site, not in bot

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

    report += `| **${dept.toUpperCase()}** | ${liveList.length} | ${botList.length} | ${matching.length} | ${botOnly.length} | ${liveOnly.length} |\n`;

    let section = `### 🏢 Department: ${dept.toUpperCase()}
- **Official Page**: [${data.url}](${data.url})
- **Matching Faculty (${matching.length})**: ${matching.length > 0 ? matching.join(', ') : 'None'}

`;

    if (botOnly.length > 0) {
        section += `🔴 **In Chatbot, BUT NOT on Website (${botOnly.length} - Proposed to Remove)**:\n`;
        botOnly.forEach(f => section += `  - ${f}\n`);
    } else {
        section += `🔴 **In Chatbot, BUT NOT on Website**: None\n`;
    }

    if (liveOnly.length > 0) {
        section += `🟢 **New on Website, NOT in Chatbot (${liveOnly.length} - Available to Add)**:\n`;
        liveOnly.slice(0, 15).forEach(f => section += `  - ${f}\n`);
        if (liveOnly.length > 15) {
            section += `  - *...and ${liveOnly.length - 15} more*\n`;
        }
    } else {
        section += `🟢 **New on Website, NOT in Chatbot**: None\n`;
    }

    detailedSections.push(section);
}

report += `\n---\n\n## 📝 Detailed Department Breakdown\n\n` + detailedSections.join('\n---\n\n');

fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/9c145923-b128-46eb-954f-65de4d06453c/Faculty_Extraction_Report.md', report, 'utf8');
console.log("Master Faculty Audit Report generated successfully!");
