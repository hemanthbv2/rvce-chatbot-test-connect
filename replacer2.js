const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');

const targetStr = `                    let stats = rawStats;
                    if (isUG && stats.ug) stats = stats.ug;
                    else if (isPG && stats.pg) stats = stats.pg;

                    r.text += T(\`Here are the placement highlights for **\${d.n}**: 🚀\\n\\n\`, \`Detailed Placement Statistics for \${d.n}:\\n\\n\`);
                    
                    // Check if they use the new structured format
                    if (stats.ongoing) {`;

const replaceStr = `                    let stats = rawStats;
                    if (isUG && stats.ug) stats = stats.ug;
                    else if (isPG && stats.pg) stats = stats.pg;

                    // Support year-specific queries directly
                    let specificProg = null;
                    if (typeof SESSION !== 'undefined' && SESSION.reqYear) {
                        const yr = SESSION.reqYear;
                        if (stats.full) {
                            specificProg = stats.full.find(p => p.name.includes(yr));
                        }
                        if (!specificProg && stats.ongoing && (stats.ongoing.name||'').includes(yr)) {
                            specificProg = stats.ongoing;
                        }
                    }

                    if (specificProg) {
                        r.text += T(\`Here are the placement statistics for **\${d.n}** (Year \${SESSION.reqYear}): 🚀\\n\\n\`, \`Placement Statistics for \${d.n} (\${SESSION.reqYear}):\\n\\n\`);
                        r.text += \`**\${specificProg.name}**\\n\`;
                        r.text += \`• **Number of companies visited:** \${specificProg.companies}\\n\`;
                        r.text += \`• **Number of offers made:** \${specificProg.offers}\\n\`;
                        r.text += \`• **Number of students selected:** \${specificProg.students}\\n\`;
                        r.text += \`• **Average Salary:** \${specificProg.avg}\\n\`;
                        r.text += \`• **Maximum salary:** \${specificProg.max}\\n\\n\`;
                        r.buttons = [{l: 'View Full Year-wise Stats 📊', a: \`plcmt_full_\${originalId}\`, i: '📅'}, {l: 'Other Departments', a: 'dept_placements_list', i: '📋'}];
                        return r;
                    }

                    r.text += T(\`Here are the placement highlights for **\${d.n}**: 🚀\\n\\n\`, \`Detailed Placement Statistics for \${d.n}:\\n\\n\`);
                    
                    // Check if they use the new structured format
                    if (stats.ongoing) {`;

script = script.replace(targetStr, replaceStr);
fs.writeFileSync('script.js', script);
console.log("Replaced placement formatting logic.");
