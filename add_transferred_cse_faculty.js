const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const targetCsMatch = code.match(/cs:\s*\[([\s\S]*?)\]\s*,\s*ee:/i);

if (targetCsMatch) {
    let csContent = targetCsMatch[1].trim();
    
    const newEntries = [
        `{ n: "Dr. Somesh Nandi", u: "https://rvce.edu.in/department/cse/dr_somesh_nandi/", d: "Assistant Professor", e: "7 years" }`,
        `{ n: "Prof. Manasa M", u: "https://rvce.edu.in/department/cse/prof_manasa_m/", d: "Assistant Professor", e: "2 years" }`,
        `{ n: "Prof. Harshitha V", u: "https://rvce.edu.in/department/cse/prof_harshitha_v/", d: "Assistant Professor", e: "Not specified" }`,
        `{ n: "Prof. Rushikesh Anil Padaki", u: "https://rvce.edu.in/department/cse/prof_rushikesh_anil_padaki/", d: "Assistant Professor", e: "Not specified" }`
    ];
    
    const updatedCsContent = csContent + `,\n                ` + newEntries.join(`,\n                `);
    
    const newCsBlock = `cs: [\n                ${updatedCsContent}\n            ],\n            ee:`;
    
    code = code.replace(/cs:\s*\[[\s\S]*?\]\s*,\s*ee:/i, newCsBlock);
    
    fs.writeFileSync('script.js', code, 'utf8');
    console.log('Successfully added transferred faculty members to CSE in script.js!');
} else {
    console.error('Could not find CSE (cs) block');
}
