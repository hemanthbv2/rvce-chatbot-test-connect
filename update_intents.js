const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

// Add accreditation keywords to branchIntakeIntents
content = content.replace(/(`\$\{name\} seats`\s*\];)/g, `$1
    
    kws.push(\`\${shortCode} accreditation\`, \`\${shortCode} accredited\`, \`\${name} accreditation\`, \`\${name} accredited\`);`);

// Update cs, ec, etc. specific keywords
content = content.replace(/('computer science intake'\);)/g, `$1
    if (shortCode === 'cs') kws.push('cse accreditation', 'computer science accreditation');
    if (shortCode === 'ec') kws.push('ece accreditation');
    if (shortCode === 'ee') kws.push('eee accreditation');
    if (shortCode === 'me') kws.push('mechanical accreditation', 'mech accreditation');
    if (shortCode === 'cv') kws.push('civil accreditation');`);

// Update the handler to show both intake and accreditation
content = content.replace(/r\.text \+= T\(`The intake for \*\*\\\$\\{d\.n\\}\*\* is \*\*\\\$\\{d\.intake\\}\*\* seats! 🎓`, `The intake for \\\$\\{d\.n\\} is \\\$\\{d\.intake\\} seats.`\);/g, `r.text += T(\`The intake for **\${d.n}** is **\${d.intake}** seats, and its status is **\${d.accreditation}**! 🎓💎\`, \`The intake for \${d.n} is \${d.intake} seats (\${d.accreditation}).\`);`);

content = content.replace(/INTENT_LABELS\[di\.id\] = d\.n \+ \" Intake 🎓\";/g, `INTENT_LABELS[di.id] = d.n + " Intake & Accreditation 🎓";`);

fs.writeFileSync('script.js', content);
console.log('Successfully updated intake intents to include accreditation!');
