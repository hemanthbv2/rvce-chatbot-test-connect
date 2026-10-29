const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');

c = c.replace("cleaned = cleaned.replace(/[^a-zA-Z0-9\\s]/g, ' ');", "cleaned = cleaned.replace(/[^a-zA-Z0-9_\\s]/g, ' ');");

const oldComposite = `            if (matchedIds.includes('placements') || cleanInput.includes('placement')) {
                best = \`plcmt_\${branchCode}\`;
                isComposite = true;
            } else if (matchedIds.includes('hods_list') || matchedIds.includes('faculty') || cleanInput.includes('hod')) {
                best = \`hod_\${branchCode}\`;
                isComposite = true;
            }`;

const newComposite = `            if (matchedIds.includes('placements') || cleanInput.includes('placement')) {
                if (!best || !(best.startsWith('plcmt_') && best !== 'placements')) {
                    best = \`plcmt_\${branchCode}\`;
                    isComposite = true;
                }
            } else if (matchedIds.includes('hods_list') || matchedIds.includes('faculty') || cleanInput.includes('hod')) {
                if (!best || !(best.startsWith('hod_') && best !== 'hods_list')) {
                    best = \`hod_\${branchCode}\`;
                    isComposite = true;
                }
            }`;

c = c.replace(oldComposite, newComposite);

fs.writeFileSync('script.js', c);
console.log("Applied mega_fix_4 successfully!");
