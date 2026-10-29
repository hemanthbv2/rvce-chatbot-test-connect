const fs = require('fs');
const code = fs.readFileSync('script.js', 'utf8');

const ugMatch = code.match(/departments:\s*\{\s*ug:\s*\[([\s\S]*?)\]\s*,\s*pg:/);
if (!ugMatch) {
    console.log("Could not find UG departments block");
    process.exit(1);
}

const ugBlock = ugMatch[1];
const deptBlocks = ugBlock.split(/\{\s*n:/);

console.log("=== CURRENT DEPARTMENT DATA IN CHATBOT ===\n");

deptBlocks.forEach(b => {
    if (!b.trim()) return;
    const nameMatch = b.match(/^"([^"]+)"/);
    const codeMatch = b.match(/c:\s*"([^"]+)"/);
    const hodMatch = b.match(/hod:\s*"([^"]+)"/);
    const intakeMatch = b.match(/intake:\s*"([^"]+)"/);
    const accMatch = b.match(/accreditation:\s*"([^"]+)"/);

    if (nameMatch && codeMatch) {
        console.log(`- ${codeMatch[1].toUpperCase()} (${nameMatch[1]}):`);
        console.log(`   • HoD: ${hodMatch ? hodMatch[1] : 'N/A'}`);
        console.log(`   • Intake: ${intakeMatch ? intakeMatch[1] : 'N/A'}`);
        console.log(`   • Accreditation: ${accMatch ? accMatch[1] : 'N/A'}`);
        console.log('');
    }
});
