// Simulate the core parts of the chatbot logic to test COE matching

const fs = require('fs');
const raw = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

// Extract QA array and coes_db from the script
// We'll use eval in a controlled way by extracting relevant data

// Test 1: Check coes_db exists and has right entries
const coeDbMatch = (raw.match(/id:\s*'coe_\w+'/g) || []);
console.log('✅ COE DB entries:', coeDbMatch.length);

// Test 2: Check 'benz' is a keyword for coe_benz
const benzLine = raw.match(/\{k:\[([^\]]+)\],id:'coe_benz',p:([\d.]+)\}/);
if (benzLine) {
    const hasBenz = benzLine[1].includes("'benz'");
    console.log('✅ coe_benz priority:', benzLine[2], '| has "benz" keyword:', hasBenz);
} else {
    console.log('❌ coe_benz QA entry not found!');
}

// Test 3: Check collaborations no longer has 'mercedes'
const collabLine = raw.match(/\{k:\[([^\]]+)\],id:'collaborations',p:([\d.]+)\}/);
if (collabLine) {
    const hasMercedes = collabLine[1].includes("'mercedes'");
    console.log('✅ collaborations has "mercedes":', hasMercedes, '(should be false)');
}

// Test 4: Check coe_* handler exists in getResponse default case
const hasGetResponseHandler = raw.includes("id.startsWith('coe_')") ;
const count = (raw.match(/id\.startsWith\('coe_'\)/g) || []).length;
console.log('✅ coe_* handlers in script:', count, '(should be 2+ — one in classifyIntent alias, one in getResponse)');

// Test 5: Check coe_benz aliases include 'benz'
const benzAliases = raw.match(/id:\s*'coe_benz'[\s\S]{1,500}?aliases:\s*\[([^\]]+)\]/);
if (benzAliases) {
    const hasBenzAlias = benzAliases[1].includes("'benz'");
    console.log('✅ coe_benz aliases has "benz":', hasBenzAlias);
}

// Test 6: Simulate keyword matching for 'benz'
// Step 2: exact match
function sanitize(input) {
    let cleaned = input.replace(/\./g, '');
    cleaned = cleaned.replace(/[^a-zA-Z0-9\s]/g, ' ');
    return cleaned.replace(/\s+/g, ' ').trim();
}

const testInputs = ['benz', 'mercedes', 'cisss', 'mfc coe', 'hydrogen coe', 'quantum computing coe', 'toyota coe', 'iot coe'];
// Extract QA entries (partial simulation)
const qaEntries = [
    {k:['benz','mercedes benz','mercedes-benz','adam','mercedes coe','benz coe','adam coe','automotive mechatronics coe','rv mercedes benz','mercedes benz mechatronics'],id:'coe_benz',p:0.3},
    {k:['cisss','cisss coe','hpcc systems','cognitive intelligent systems','hpcc coe','cognitive systems coe'],id:'coe_cisss',p:0.5},
    {k:['coe mfc','mfc coe','materials fabrication coe','materials fabrication characterization','coe-mfc','fabrication characterization'],id:'coe_mfc',p:0.5},
    {k:['hydrogen coe','green tech coe','hydrogen technology coe','fuel cell coe','dover india coe'],id:'coe_hydrogen',p:0.5},
    {k:['quantum coe','circuit coe','quantum computing coe','quantum information coe','q-rvce','qrvce'],id:'coe_quantum',p:0.5},
    {k:['toyota coe','rv toyota coe','automotive engineering coe','toyota kirloskar coe','rv toyota','toyota kirloskar','toyota automotive'],id:'coe_toyota',p:0.3},
    {k:['iot coe','cisco iot coe','internet of things coe','cisco rvce coe','cisco networking','cisco rvce'],id:'coe_iot',p:0.3},
    {k:['collaboration','collaborations','partnership','partnerships','industry partners','mou','tie up','tieups','industry tie ups','google','microsoft','tata','tata technologies','boeing','airbus','isro','navy','all collaborations','rvce partners','industry mou'],id:'collaborations',p:1},
];

console.log('\n--- Simulated keyword matching ---');
testInputs.forEach(input => {
    const cleanInput = sanitize(input).toLowerCase();
    // Step 2: exact match
    for (const q of qaEntries) {
        if (q.k.includes(cleanInput)) {
            console.log(`✅ "${input}" → exact match → ${q.id}`);
            return;
        }
    }
    // Step 3: keyword-in-sentence
    let best = null, bestP = 99, bestL = 0;
    for (const q of qaEntries) {
        for (const k of q.k) {
            const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');
            if (regex.test(cleanInput)) {
                if (q.p < bestP || (q.p === bestP && k.length > bestL)) {
                    best = q.id; bestP = q.p; bestL = k.length;
                }
            }
        }
    }
    if (best) {
        console.log(`✅ "${input}" → keyword match → ${best} (p:${bestP})`);
    } else {
        console.log(`❌ "${input}" → NO MATCH`);
    }
});
