const code = require('fs').readFileSync('script.js', 'utf8');

// Extract department code + name
const deptMatches = [...code.matchAll(/n:"([^"]+)",\s*\r?\n\s*c:"([^"]+)"/g)];

// Extract placement_stats blocks
const statsMatches = [...code.matchAll(/placement_stats: \{ highest: "([^"]+)", average: "([^"]+)", offers: "([^"]+)", companies: "([^"]+)" \}/g)];

console.log('=== DEPARTMENT PLACEMENT STATS IN CHATBOT ===\n');
console.log(`Total depts with placement_stats: ${statsMatches.length}\n`);

// Match them up by order
let statIdx = 0;
for (const dept of deptMatches) {
    // Find next placement_stats after this dept
    const deptPos = dept.index;
    const nextStat = statsMatches.find(s => s.index > deptPos);
    if (nextStat && (statIdx === 0 || nextStat.index !== statsMatches[statIdx-1]?.index)) {
        statIdx++;
        console.log(`[${dept[2].toUpperCase()}] ${dept[1]}`);
        console.log(`  Highest: ${nextStat[1]}, Average: ${nextStat[2]}, Offers: ${nextStat[3]}, Companies: ${nextStat[4]}`);
        console.log('');
    }
}
