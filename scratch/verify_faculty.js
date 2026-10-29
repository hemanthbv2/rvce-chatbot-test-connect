
// Mock KB and classifyIntent to verify multi-match logic
const KB = {
    faculty: {
        etc: [
            { n: "Dr. Usha Padma", u: "...", r: "Assistant Professor" }
        ],
        mca: [
            { n: "Dr Usha J.", u: "...", r: "Assistant Professor" }
        ],
        other: [
            { n: "Subramanya", u: "...", r: "Principal" }
        ]
    }
};

function classifyIntent(cleanInput) {
    if (KB.faculty) {
        const s = cleanInput.replace(/[^a-z]/g, '');
        if (s.length >= 3) {
            const facultyMatches = [];
            for (const deptCode in KB.faculty) {
                for (const fac of KB.faculty[deptCode]) {
                    const fn = fac.n.toLowerCase().replace(/[^a-z]/g, '');
                    const pn = fac.n.replace(/Dr\.|Prof\.|Mr\.|Assistant Prof/gi, '').toLowerCase().replace(/[^a-z]/g, '');
                    
                    if (fn.includes(s) || pn.includes(s) || s.includes(pn)) {
                        facultyMatches.push({f: fac, d: deptCode});
                    }
                }
            }
            
            if (facultyMatches.length === 1) {
                const fac = facultyMatches[0].f;
                const finalId = `fac_${fac.n.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
                return { type: 'exact', id: finalId, suggestions: [] };
            } else if (facultyMatches.length > 1) {
                return { type: 'fac_multi', matches: facultyMatches, suggestions: [] };
            }
        }
    }
    return { type: null };
}

console.log("Testing 'usha':");
console.log(JSON.stringify(classifyIntent("usha"), null, 2));

console.log("\nTesting 'subramanya':");
console.log(JSON.stringify(classifyIntent("subramanya"), null, 2));
