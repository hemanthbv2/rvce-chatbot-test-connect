const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const targetChyMatch = code.match(/chy:\s*\[([\s\S]*?)\]\s*,\s*cv:/i);

if (targetChyMatch) {
    let chyContent = targetChyMatch[1].trim();
    const newEntry = `{ n: "Dr. Girish Kumar S", u: "https://rvce.edu.in/department/chemistry/girish_kumar_s/", d: "Assistant Professor", e: "Teaching: 7.5 Years, Research: 1 Years" }`;
    
    // Append new entry to chy list
    const updatedChyContent = chyContent + `,\n                ` + newEntry;
    
    const newChyBlock = `chy: [\n                ${updatedChyContent}\n            ],\n            cv:`;
    
    code = code.replace(/chy:\s*\[[\s\S]*?\]\s*,\s*cv:/i, newChyBlock);
    
    fs.writeFileSync('script.js', code, 'utf8');
    console.log('Successfully added Dr. Girish Kumar S to Chemistry (CHY) faculty list in script.js!');
} else {
    console.error('Could not find Chemistry (chy) block');
}
