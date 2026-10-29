const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const intakeIntentsCode = `
// 2.6 Dynamically inject specific Intake queries for ALL departments from KB
const branchIntakeIntents = [];
allBranches.forEach(branch => {
    const code = branch.c;
    const name = sanitize(branch.n.replace(/\\(.*\\)/, '')).toLowerCase();
    const shortCode = branch.c.toLowerCase();
    
    const kws = [
        \`\${shortCode} intake\`, \`intake of \${shortCode}\`, \`how many seats in \${shortCode}\`, \`\${shortCode} seats\`,
        \`\${name} intake\`, \`intake of \${name}\`, \`how many seats in \${name}\`, \`\${name} seats\`
    ];
    
    if (shortCode === 'cs') kws.push('cse intake', 'cse seats', 'computer science intake');
    if (shortCode === 'ec') kws.push('ece intake', 'ece seats');
    if (shortCode === 'ee') kws.push('eee intake', 'eee seats');
    if (shortCode === 'me') kws.push('mechanical intake', 'mech intake');
    if (shortCode === 'cv') kws.push('civil intake');

    branchIntakeIntents.push({ k: kws, id: \`intake_\${shortCode}\`, p: 0.4 });
});
QA.push(...branchIntakeIntents);
`;

content = content.replace('QA.push(...branchPlacementIntents);', 'QA.push(...branchPlacementIntents);\n' + intakeIntentsCode);

const labelCode = `branchPlacementIntents.forEach(di => {
    const c = di.id.replace('plcmt_', '');
    const d = KB.departments.ug.find(x=>x.c===c) || KB.departments.pg.find(x=>x.c===c);
    if (d) INTENT_LABELS[di.id] = d.n + " Placements 💼";
});
branchIntakeIntents.forEach(di => {
    const c = di.id.replace('intake_', '');
    const d = KB.departments.ug.find(x=>x.c===c) || KB.departments.pg.find(x=>x.c===c);
    if (d) INTENT_LABELS[di.id] = d.n + " Intake 🎓";
});`;

content = content.replace(/branchPlacementIntents\.forEach\([\s\S]*?Placements 💼";\n}\);/, labelCode);

const handlerCode = `        // Handle Department Intake requests
        if (id && id.startsWith('intake_')) {
            const c = id.replace('intake_','');
            const d = KB.departments.ug.find(x=>x.c===c) || KB.departments.pg.find(x=>x.c===c);
            if (d) {
                if (d.intake) {
                    r.text += T(\`The intake for **\${d.n}** is **\${d.intake}** seats! 🎓\`, \`The intake for \${d.n} is \${d.intake} seats.\`);
                } else {
                    r.text += T(\`I don't have the specific intake numbers for **\${d.n}**.\`, \`Intake numbers for \${d.n} are currently unavailable.\`);
                }
                r.buttons = [{l:'Department Info',a:'dept_'+c,i:'📚'}, {l:'All Intakes',a:'intake',i:'🎓'}];
                return r;
            }
        }
        // Handle Department Placement requests`;

content = content.replace('// Handle Department Placement requests', handlerCode);

fs.writeFileSync('script.js', content);
console.log('Successfully injected intake intents!');
