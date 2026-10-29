const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const targetAeBlockMatch = code.match(/ae:\s*\[([\s\S]*?)\]\s*,\s*aiml:/i);
if (targetAeBlockMatch) {
    let aeContent = targetAeBlockMatch[1];
    
    // Remove Prof. Deepak Bana line
    aeContent = aeContent.replace(/\{\s*n:\s*"Prof\. Deepak Bana"[\s\S]*?\},\r?\n?/g, '');
    // Remove Dr. Balaguru Pandian line
    aeContent = aeContent.replace(/\{\s*n:\s*"Dr\. Balaguru Pandian"[\s\S]*?\},\r?\n?/g, '');
    
    const newAeBlock = `ae: [\n${aeContent.trim()}\n            ],\n        aiml:`;
    code = code.replace(/ae:\s*\[[\s\S]*?\]\s*,\s*aiml:/i, newAeBlock);
    
    fs.writeFileSync('script.js', code, 'utf8');
    console.log('Successfully updated AE faculty in script.js');
} else {
    console.error('Could not find ae faculty block');
}
