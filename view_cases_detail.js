const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

function printCase(caseName) {
    const regex = new RegExp(`case\\s+['"]${caseName}['"]:\\s*([\\s\\S]*?)(?=case\\s+['"]|break;|return\\s+r;)`, 'i');
    const match = code.match(regex);
    if (match) {
        console.log(`=== CASE: ${caseName} ===`);
        console.log(match[0].trim().substring(0, 500));
        console.log('\n-----------------------------------------\n');
    }
}

printCase('sports');
printCase('professional_societies');
printCase('facilities');
