const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');

// 1. Fix Faculty DEANS duplicate
c = c.replace(/deans:\s*\[[\s\S]*?\],/, '');
c = c.replace(/\{ n: "Dr\. B\. M\. Sagar", u: "https:\/\/rvce\.edu\.in\/department\/ise\/dr_b_m_sagar\/", d: "Professor & HoD", e: "19\.5 Years" \}/, `{ n: "Dr. B. M. Sagar", u: "https://rvce.edu.in/department/ise/dr_b_m_sagar/", d: "Professor, Dean Student Affairs & HoD", e: "21 Years" }`);
c = c.replace(/\{ n: "Dr\. Shanmukha N", u: "https:\/\/rvce\.edu\.in\/department\/me\/faculty-bio\/", d: "Professor and HOD", e: "23 years" \}/, `{ n: "Dr. Shanmukha Nagaraj", u: "https://rvce.edu.in/department/me/faculty-bio/", d: "Professor, HOD & Dean (Student Affairs)", e: "23 years" }`);

// 2. Fix findFacultyMatch logic
c = c.replace(/function findFacultyMatch[\s\S]*?const INTENT_LABELS/, `function findFacultyMatch(input) {
    const sInput = sanitize(input).toLowerCase().replace(/[^a-z]/g, '');
    let bestMatch = null;
    let bestMatchLength = 0;

    for (const deptCode in KB.faculty) {
        for (const fac of KB.faculty[deptCode]) {
            const fSlug = fac.n.toLowerCase().replace(/[^a-z]/g, '');
            const pSlug = fac.n.replace(/Dr\\.|Prof\\.|Mr\\.|Assistant Prof/gi, '').toLowerCase().replace(/[^a-z]/g, '');
            
            if (sInput === fSlug || sInput === pSlug) {
                return \`fac_\${fSlug}\`;
            }
            if (sInput.length > 5 && (sInput.includes(fSlug) || sInput.includes(pSlug))) {
                const matchLen = sInput.includes(fSlug) ? fSlug.length : pSlug.length;
                if (matchLen > bestMatchLength) {
                    bestMatch = \`fac_\${fSlug}\`;
                    bestMatchLength = matchLen;
                }
            }
        }
    }
    return bestMatch;
}
// Human-readable labels for suggestion buttons
const INTENT_LABELS`);

// 3. Fix QA Dynamic Generation for HOD and Placement
c = c.replace(/const name = branch\.n\.replace\(\/\\\(.*\\\)\/,\s*''\)\.trim\(\)\.toLowerCase\(\);/g, `const name = sanitize(branch.n.replace(/\\(.*\\)/, '')).toLowerCase();`);
c = c.replace(/branchHodIntents\.push\(\{ k: kws, id: \`hod_\$\{shortCode\}\`, p: 0\.5 \}\);/g, `branchHodIntents.push({ k: kws, id: \`hod_\${code}\`, p: 1.5 });`);
c = c.replace(/branchPlacementIntents\.push\(\{ k: kws, id: \`plcmt_\$\{shortCode\}\`, p: 0\.4 \}\);/g, `branchPlacementIntents.push({ k: kws, id: \`plcmt_\${code}\`, p: 1.5 });`);
c = c.replace(/const shortCode = branch\.c\.toLowerCase\(\);/g, '');
c = c.replace(/shortCode/g, 'code');

// 4. Fix Composite Intent Resolution overwrite bug
c = c.replace(/    \/\/ Composite Intent Resolution: Combine Department \+ Topic \(e\.g\., CSE \+ Placements\)\n    let isComposite = false;\n    if \(matchedIntents\.length > 1\) \{\n        const matchedIds = matchedIntents\.map\(q => q\.id\);\n        const deptMatch = matchedIds\.find\(id => id\.startsWith\('dept_'\)\);\n        if \(deptMatch\) \{\n            const branchCode = deptMatch\.replace\('dept_', ''\);\n            if \(matchedIds\.includes\('placements'\) \|\| cleanInput\.includes\('placement'\)\) \{\n                best = \`plcmt_\$\{branchCode\}\`;\n                isComposite = true;\n            \} else if \(matchedIds\.includes\('hods_list'\) \|\| matchedIds\.includes\('faculty'\) \|\| cleanInput\.includes\('hod'\)\) \{\n                best = \`hod_\$\{branchCode\}\`;\n                isComposite = true;\n            \} else if \(matchedIds\.includes\('syllabus_1st_sem'\) \|\| cleanInput\.includes\('syllabus'\) \|\| cleanInput\.includes\('labs'\)\) \{\n                best = \`dept_\$\{branchCode\}\`; \/\/ Return department card which has syllabus\/labs buttons\n                isComposite = true;\n            \}\n        \}\n    \}/, `    // Composite Intent Resolution: Combine Department + Topic (e.g., CSE + Placements)
    let isComposite = false;
    if (matchedIntents.length > 1) {
        const matchedIds = matchedIntents.map(q => q.id);
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
                    best = \`dept_\${branchCode}\`; // Return department card which has syllabus/labs buttons
                    isComposite = true;
                }
            }
        }
    }`);

// 5. Fix `Administration` button code
c = c.replace(/    const btnLabel = isDeans \? "Administration" : \`\$\{deptCode\.toUpperCase\(\)\} Dept\`;\n    const btnIcon = isDeans \? "🏢" : "🏫";\n\n    return \{\n        text: T\(\n            \`Found them! 👨‍🏫 \*\*\$\{f\.n\}\*\* is part of the \$\{affilLabel\}\.\\n\\\\n\`/g, `    const btnLabel = isDeans ? "Administration" : \`\${deptCode.toUpperCase()} Dept\`;
    const btnIcon = isDeans ? "🏢" : "🏫";
    const actionId = isDeans ? "deans_list" : \`dept_\${deptCode}\`;

    return {
        text: T(
            \`Found them! 👨‍🏫 **\${f.n}** is part of the \${affilLabel}.\\n\\n\``);
            
c = c.replace(/                \{ l: btnLabel, a: \`dept_\$\{deptCode\}\`, i: btnIcon \}/g, `                { l: btnLabel, a: typeof actionId !== 'undefined' ? actionId : \`dept_\${deptCode}\`, i: btnIcon }`);

fs.writeFileSync('script.js', c);
