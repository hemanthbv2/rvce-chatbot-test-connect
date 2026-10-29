const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const targetCvMatch = code.match(/cv:\s*\[([\s\S]*?)\]\s*,\s*cs:/i);

if (targetCvMatch) {
    let cvContent = targetCvMatch[1];
    
    // Remove Dr. B. C. Udayashankar line
    cvContent = cvContent.replace(/\{\s*n:\s*"Dr\. B\. C\. Udayashankar"[\s\S]*?\},\r?\n?/g, '');
    
    // Add Rajashekhar Malur entry
    const newEntry = `{ n: "Rajashekhar Malur", u: "https://rvce.edu.in/department/civil_engineering/rajashekhar_malur/", d: "Professor of Practice", e: "Product and Plant Engineering" }`;
    
    const updatedCvContent = cvContent.trim() + `,\n                ` + newEntry;
    
    const newCvBlock = `cv: [\n                ${updatedCvContent}\n            ],\n            cs:`;
    
    code = code.replace(/cv:\s*\[[\s\S]*?\]\s*,\s*cs:/i, newCvBlock);
    
    fs.writeFileSync('script.js', code, 'utf8');
    console.log('Successfully updated Civil Engineering (CV) faculty list in script.js!');
} else {
    console.error('Could not find Civil Engineering (cv) block');
}
