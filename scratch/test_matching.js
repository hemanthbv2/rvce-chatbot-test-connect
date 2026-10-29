const fs = require('fs');
const path = require('path');

function getKB(filePath) {
    const fullPath = path.join(__dirname, '..', filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    const startIndex = content.indexOf('const KB = {');
    const delimiterIndex = content.indexOf('/* =============== INPUT SANITIZATION =============== */');
    const kbCode = content.substring(startIndex, delimiterIndex).trim();
    return new Function(`return (function() { ${kbCode}; return KB; })()`)();
}

const KB = getKB('script.js');

function testMatch(text) {
    const cleanInput = text.toLowerCase().replace(/\./g, '').replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    
    // Original Step 4 logic
    const sOriginal = cleanInput.replace(/[^a-z]/g, '');
    const originalMatches = [];
    if (sOriginal.length >= 3) {
        for (const deptCode in KB.faculty) {
            for (const fac of KB.faculty[deptCode]) {
                const fn = fac.n.toLowerCase().replace(/[^a-z]/g, '');
                const pn = fac.n.replace(/Dr\.|Prof\.|Mr\.|Assistant Prof/gi, '').toLowerCase().replace(/[^a-z]/g, '');
                if (fn.includes(sOriginal) || pn.includes(sOriginal) || sOriginal.includes(pn)) {
                    originalMatches.push(fac.n);
                }
            }
        }
    }

    // Proposed Step 4 logic
    const cleanText = cleanInput.replace(/\b(view|profile|of|show|who|is|details|faculty|professor|teacher|dr|prof|mr|ms|mrs|assistant|associate|head|department|dept)\b/g, '').replace(/[^a-z]/g, '').trim();
    const sProposed = cleanText.length >= 3 ? cleanText : sOriginal;
    const proposedMatches = [];
    if (sProposed.length >= 3) {
        for (const deptCode in KB.faculty) {
            for (const fac of KB.faculty[deptCode]) {
                const fn = fac.n.toLowerCase().replace(/[^a-z]/g, '');
                const pn = fac.n.replace(/Dr\.|Prof\.|Mr\.|Assistant Prof/gi, '').toLowerCase().replace(/[^a-z]/g, '');
                if (fn.includes(sProposed) || pn.includes(sProposed) || sProposed.includes(pn)) {
                    proposedMatches.push(fac.n);
                }
            }
        }
    }

    console.log(`Input: "${text}"`);
    console.log(`Original: matches=[${originalMatches.join(', ')}] (query: "${sOriginal}")`);
    console.log(`Proposed: matches=[${proposedMatches.join(', ')}] (query: "${sProposed}")`);
    console.log('-'.repeat(40));
}

testMatch("karthik");
testMatch("view profile of karthik");
testMatch("view profile of balaguru");
testMatch("profile of srinath");
testMatch("who is dr karthik");
