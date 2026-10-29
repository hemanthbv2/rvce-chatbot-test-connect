const fs = require('fs');

let c = fs.readFileSync('script.js', 'utf8');

// 1. Sanitize Regex (Allow Underscores)
c = c.replace(/cleaned = cleaned\.replace\(\/\[\^a-zA-Z0-9\\\\s\]\/g, ' '\);/, "cleaned = cleaned.replace(/[^a-zA-Z0-9_\\\\s]/g, ' ');");

// 2. Faculty Override & Better Composite Logic
const oldBlock = `    // Composite Intent Resolution: Combine Department + Topic (e.g., CSE + Placements)
    let isComposite = false;
    if (matchedIntents.length > 1) {
        const matchedIds = matchedIntents.map(q => q.id);
        const deptMatch = matchedIds.find(id => id.startsWith('dept_'));
        if (deptMatch) {
            const branchCode = deptMatch.replace('dept_', '');
            if (matchedIds.includes('placements') || cleanInput.includes('placement')) {
                best = \`plcmt_\${branchCode}\`;
                isComposite = true;
            } else if (matchedIds.includes('hods_list') || matchedIds.includes('faculty') || cleanInput.includes('hod')) {
                best = \`hod_\${branchCode}\`;
                isComposite = true;
            }
        }
    }`;

const newBlock = `    // 2.5 Faculty Override (Prioritize specific faculty matches over generic keywords)
    const facultyId = findFacultyMatch(input);
    if (facultyId) {
        return { type: 'exact', id: facultyId, suggestions: [] };
    }

    // Composite Intent Resolution: Combine Department + Topic (e.g., CSE + Placements)
    let isComposite = false;
    if (matchedIntents.length > 1) {
        const matchedIds = matchedIntents.map(q => q.id);
        // Prioritize specific composite matches if already found before overriding
        const existingComposite = matchedIds.find(id => id.startsWith('plcmt_') || id.startsWith('hod_'));
        
        const deptMatches = matchedIds.filter(id => id.startsWith('dept_')).sort((a, b) => b.length - a.length);
        const deptMatch = deptMatches[0];
        
        if (deptMatch) {
            const branchCode = deptMatch.replace('dept_', '');
            if (matchedIds.includes('placements') || cleanInput.includes('placement')) {
                if (!best || !(best.startsWith('plcmt_') && best !== 'placements')) {
                    best = \`plcmt_\${branchCode}\`;
                    isComposite = true;
                }
            } else if (matchedIds.includes('hods_list') || matchedIds.includes('faculty') || cleanInput.includes('hod')) {
                if (!best || !(best.startsWith('hod_') && best !== 'hods_list')) {
                    best = \`hod_\${branchCode}\`;
                    isComposite = true;
                }
            } else if (matchedIds.includes('syllabus_1st_sem') || cleanInput.includes('syllabus') || cleanInput.includes('labs')) {
                if (!best || !best.startsWith('dept_')) {
                    best = \`dept_\${branchCode}\`;
                    isComposite = true;
                }
            }
        }
    }`;

// Replace exactly to fix Windows vs Linux line endings
const cleanOldBlock = oldBlock.replace(/\r\n/g, '\n');
const scriptLines = c.replace(/\r\n/g, '\n');

if (scriptLines.includes(cleanOldBlock)) {
    c = scriptLines.replace(cleanOldBlock, newBlock);
    console.log("Replaced Composite block successfully.");
} else {
    console.log("ERROR: Could not find Composite block to replace.");
}

// Write it back
fs.writeFileSync('script.js', c);
console.log("Master Fix completed.");
