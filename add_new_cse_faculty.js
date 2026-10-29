const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const targetCsMatch = code.match(/cs:\s*\[([\s\S]*?)\]\s*,\s*ee:/i);

if (targetCsMatch) {
    let csContent = targetCsMatch[1].trim();
    
    const newEntries = [
        `{ n: "Prof. Shraddha H D", u: "https://rvce.edu.in/department/cse/shraddha-h-d/", d: "Assistant Professor", e: "Blockchain and Machine Learning" }`,
        `{ n: "Prof. Shreya B T", u: "https://rvce.edu.in/department/cse/shreya-b-t/", d: "Assistant Professor", e: "AI & ML and Mobile Application Development" }`,
        `{ n: "Prof. Damini N", u: "https://rvce.edu.in/department/cse/damini-n/", d: "Assistant Professor", e: "1 years" }`,
        `{ n: "Prof. Dhanush C U", u: "https://rvce.edu.in/department/cse/dhanush-c-u-2/", d: "Assistant Professor", e: "1 years" }`,
        `{ n: "Prof. Vallabh V Kulkarni", u: "https://rvce.edu.in/department/cse/vallabh-v-kulkarni/", d: "Assistant Professor", e: "Not specified" }`,
        `{ n: "Prof. Rajesh R M", u: "https://rvce.edu.in/department/ai_ml/prof_rajesh_r_m/", d: "Assistant Professor", e: "Teaching: 3years, Industry: 1 Year" }`,
        `{ n: "Dr. Neethu S", u: "https://rvce.edu.in/department/cse/prof_neethu_s/", d: "Assistant Professor", e: "Teaching: 13 yrs" }`
    ];
    
    const updatedCsContent = csContent + `,\n                ` + newEntries.join(`,\n                `);
    
    const newCsBlock = `cs: [\n                ${updatedCsContent}\n            ],\n            ee:`;
    
    code = code.replace(/cs:\s*\[[\s\S]*?\]\s*,\s*ee:/i, newCsBlock);
    
    fs.writeFileSync('script.js', code, 'utf8');
    console.log('Successfully added 7 new CSE faculty members to script.js!');
} else {
    console.error('Could not find CSE (cs) block');
}
