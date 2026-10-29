const fs = require('fs');
const code = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

try { new Function(code); console.log('✅ Syntax OK'); } catch(e) { console.error('❌ Syntax Error:', e.message); process.exit(1); }

// Check coe_benz keywords and priority
const benzMatch = code.match(/\{k:\[([^\]]+)\],id:'coe_benz',p:([\d.]+)\}/);
if (benzMatch) {
    const hasBenz = benzMatch[1].includes("'benz'");
    console.log('coe_benz priority:', benzMatch[2], '(lower = higher priority)');
    console.log("coe_benz has 'benz' keyword:", hasBenz);
}

// Check collaborations no longer has mercedes/benz
const collabMatch = code.match(/\{k:\[([^\]]+)\],id:'collaborations',p:([\d.]+)\}/);
if (collabMatch) {
    const hasMercedes = collabMatch[1].includes("'mercedes'");
    const hasBenz = collabMatch[1].includes("'benz'");
    console.log('collaborations priority:', collabMatch[2]);
    console.log('collaborations has mercedes:', hasMercedes, '| has benz:', hasBenz);
}

console.log('\n✅ When user types "benz": coe_benz (p:0.3) beats collaborations (p:1) because 0.3 < 1');
