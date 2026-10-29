const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

// 1. In classifyIntent, extract the year before stripping stop words.
const classifyIntentStart = script.indexOf('function classifyIntent(input) {');
const stopWordsStart = script.indexOf('const stopWords = ', classifyIntentStart);

const targetClassify = `    // Context Memory: Implicitly inject department if requested contextually`;
const replacementClassify = `    // Extract requested year if any (e.g., 2024, 2023)
    let extractedYear = null;
    const yearMatch = cleanInput.match(/\\b20\\d{2}\\b/);
    if (yearMatch) {
        extractedYear = yearMatch[0];
    }

    // Context Memory: Implicitly inject department if requested contextually`;

if (script.includes(targetClassify)) {
    script = script.replace(targetClassify, replacementClassify);
}

// Ensure the return objects of classifyIntent include the year.
const returnRegex = /return\s+\{\s*type:\s*([^,]+),\s*ids?:\s*([^,]+)(?:,\s*overflow:\s*([^,]+))?,\s*suggestions:\s*([^}]+)\s*\}/g;
script = script.replace(returnRegex, (match, type, ids, overflow, sugg) => {
    if (overflow) {
        return `return { type: ${type}, ids: ${ids}, overflow: ${overflow}, year: extractedYear, suggestions: ${sugg} }`;
    }
    return `return { type: ${type}, id: ${ids}, year: extractedYear, suggestions: ${sugg} }`;
});
// Need to handle faculty multi:
script = script.replace(/return\s+\{\s*type:\s*'fac_multi',\s*matches:\s*facultyMatches,\s*suggestions:\s*\[\]\s*\};/g, `return { type: 'fac_multi', matches: facultyMatches, year: extractedYear, suggestions: [] };`);
// Handle null:
script = script.replace(/return\s+\{\s*type:\s*null,\s*id:\s*null,\s*suggestions:\s*\[\]\s*\};/g, `return { type: null, id: null, year: extractedYear, suggestions: [] };`);
// Handle fuzzy:
script = script.replace(/return\s+\{\s*type:\s*'fuzzy',\s*id:\s*null,\s*suggestions\s*\}/g, `return { type: 'fuzzy', id: null, year: extractedYear, suggestions }`);
// Ah wait, there is also:
script = script.replace(/return\s+\{\s*type:\s*'fuzzy',\s*id:\s*null,\s*suggestions:\s*\[ABBR\[cleanInput\]\]\s*\};/g, `return { type: 'fuzzy', id: null, year: extractedYear, suggestions: [ABBR[cleanInput]] };`);

// 2. In process(rawText), store it to SESSION
const targetProcess = `    // Classify the intent with confidence detection
    const result = classifyIntent(text);

    // === MULTI-INTENT HANDLING ===`;
const replacementProcess = `    // Classify the intent with confidence detection
    const result = classifyIntent(text);
    if (result.year && typeof SESSION !== 'undefined') {
        SESSION.requestedYear = result.year;
    } else if (typeof SESSION !== 'undefined') {
        SESSION.requestedYear = null;
    }

    // === MULTI-INTENT HANDLING ===`;

if (script.includes(targetProcess)) {
    script = script.replace(targetProcess, replacementProcess);
}

// 3. In getResponse, use SESSION.requestedYear
const targetResponse = `                    // Check if they use the new structured format
                    if (stats.ongoing) {
                        const progs = Array.isArray(stats.ongoing) ? stats.ongoing : [stats.ongoing];
                        progs.forEach(prog => {
                            r.text += \`**\${prog.name}**\\n\`;
                            r.text += \`• Highest Package: \${prog.max}\\n• Average Package: \${prog.avg}\\n• Offers: \${prog.offers} (ongoing)\\n• Companies: \${prog.companies}\\n\\n\`;
                        });
                        r.text += \`*(Showing latest ongoing placements. Click below for full history!)*\\n\\n\`;
                        r.buttons.push({l: \`Full \${d.n} History 📈\`, a: \`plcmt_\${c}_full\`, i: '📈'});`;
const replacementResponse = `                    let requestedYearFound = false;
                    const reqYear = (typeof SESSION !== 'undefined') ? SESSION.requestedYear : null;
                    
                    if (reqYear && stats.full) {
                        const targetProgs = stats.full.filter(p => p.name.includes(reqYear));
                        if (targetProgs.length > 0) {
                            requestedYearFound = true;
                            r.text = getPrefix() + T(\`Here are the placement highlights for **\${d.n}** from the **\${reqYear}** batch: 🚀\\n\\n\`, \`Placement Statistics for \${d.n} (\${reqYear}):\\n\\n\`);
                            targetProgs.forEach(prog => {
                                r.text += \`**\${prog.name}**\\n\`;
                                r.text += \`• Highest Package: \${prog.max}\\n• Average Package: \${prog.avg}\\n• Offers: \${prog.offers}\\n• Companies: \${prog.companies}\\n\\n\`;
                            });
                        }
                    }

                    if (!requestedYearFound) {
                        if (reqYear) {
                            r.text = getPrefix() + \`I couldn't find specific stats for the year **\${reqYear}** for \${d.n}. Here are the latest ongoing highlights instead:\\n\\n\`;
                        }
                        // Check if they use the new structured format
                        if (stats.ongoing) {
                            const progs = Array.isArray(stats.ongoing) ? stats.ongoing : [stats.ongoing];
                            progs.forEach(prog => {
                                r.text += \`**\${prog.name}**\\n\`;
                                r.text += \`• Highest Package: \${prog.max}\\n• Average Package: \${prog.avg}\\n• Offers: \${prog.offers} (ongoing)\\n• Companies: \${prog.companies}\\n\\n\`;
                            });
                            r.text += \`*(Showing latest ongoing placements. Click below for full history!)*\\n\\n\`;
                            r.buttons.push({l: \`Full \${d.n} History 📈\`, a: \`plcmt_\${c}_full\`, i: '📈'});
                        } else if (stats.programs) {
                            stats.programs.forEach(prog => {
                                r.text += \`**\${prog.name}**\\n\`;
                                r.text += \`• Companies visited: \${prog.companies}\\n• Offers made: \${prog.offers}\\n• Students selected: \${prog.students}\\n• Average Salary: \${prog.avg}\\n• Maximum salary: \${prog.max}\\n\\n\`;
                            });
                            r.buttons.push({l: 'Placements Overview', a: 'placements', i: '💼'});
                        } else {
                            r.text += \`• Number of companies visited: \${stats.companies}\\n• Number of offers made: \${stats.offers}\\n• Number of students selected: \${stats.students}\\n• Average Salary: \${stats.avg}\\n• Maximum salary: \${stats.max}\\n\\n\`;
                        }
                    }

                    if (typeof SESSION !== 'undefined') SESSION.requestedYear = null; // Clear it`;

// Wait, the targetResponse is slightly wrong because of `stats.programs` block inside script.js.
// Let's replace the whole `// Check if they use the new structured format` block down to the end of `if(stats.ongoing)`
// Actually, it's safer to just inject BEFORE `if (stats.ongoing) {`
const targetResponse2 = `                    // Check if they use the new structured format
                    if (stats.ongoing) {`;

const replacementResponse2 = `                    let requestedYearFound = false;
                    const reqYear = (typeof SESSION !== 'undefined') ? SESSION.requestedYear : null;
                    
                    if (reqYear && stats.full) {
                        const targetProgs = stats.full.filter(p => p.name.includes(reqYear));
                        if (targetProgs.length > 0) {
                            requestedYearFound = true;
                            // Overwrite the initial generic text
                            r.text = getPrefix() + T(\`Here are the placement highlights for **\${d.n}** from the **\${reqYear}** batch: 🚀\\n\\n\`, \`Placement Statistics for \${d.n} (\${reqYear}):\\n\\n\`);
                            targetProgs.forEach(prog => {
                                r.text += \`**\${prog.name}**\\n\`;
                                r.text += \`• Highest Package: \${prog.max}\\n• Average Package: \${prog.avg}\\n• Offers: \${prog.offers}\\n• Companies: \${prog.companies}\\n\\n\`;
                            });
                            r.buttons.push({l: \`Full \${d.n} History 📈\`, a: \`plcmt_\${c}_full\`, i: '📈'});
                        }
                    }

                    if (!requestedYearFound) {
                        if (reqYear) {
                            r.text = getPrefix() + \`I couldn't find specific stats for the year **\${reqYear}** for \${d.n}. Here are the latest ongoing highlights instead:\\n\\n\`;
                        }
                        
                        // Check if they use the new structured format
                        if (stats.ongoing) {`;

if (script.includes(targetResponse2)) {
    script = script.replace(targetResponse2, replacementResponse2);
}

// Clear SESSION.requestedYear at the end of the `if(d){ if(rawStats){ ... } }` block.
const clearSessionTarget = `                    }
                    r.buttons.push({l: 'Other Departments', a: 'dept_placements_list', i: '📋'});`;

const clearSessionReplacement = `                    }
                    if (typeof SESSION !== 'undefined') SESSION.requestedYear = null; // Clear it
                    r.buttons.push({l: 'Other Departments', a: 'dept_placements_list', i: '📋'});`;

if (script.includes(clearSessionTarget)) {
    script = script.replace(clearSessionTarget, clearSessionReplacement);
}


fs.writeFileSync('script.js', script);
console.log("Done");
