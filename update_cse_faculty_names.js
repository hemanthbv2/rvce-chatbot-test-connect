const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const targetCsMatch = code.match(/cs:\s*\[([\s\S]*?)\]\s*,\s*ee:/i);

if (targetCsMatch) {
    let csContent = targetCsMatch[1];
    
    // 1. Remove Prof. Deepthi L. line
    csContent = csContent.replace(/\{\s*n:\s*"Prof\. Deepthi L\."[\s\S]*?\},\r?\n?/g, '');
    
    // 2. Rename Prof. Saraswathi Govind Datard -> Prof. Saraswathi Govind Datar
    csContent = csContent.replace('Prof. Saraswathi Govind Datard', 'Prof. Saraswathi Govind Datar');
    
    const newCsBlock = `cs: [\n${csContent.trim()}\n            ],\n            ee:`;
    
    code = code.replace(/cs:\s*\[[\s\S]*?\]\s*,\s*ee:/i, newCsBlock);
    
    fs.writeFileSync('script.js', code, 'utf8');
    console.log('Successfully updated CSE faculty in script.js!');
} else {
    console.error('Could not find CSE (cs) block');
}
