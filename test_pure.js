const QA = [
    {k:['electronics and communication','ece','ec','ec department','ece department','entc','e and c','ec branch'],id:'dept_ec',p:1},
    {k:['placement stats','placement statistics','placement year','year wise placement','2024 placement','placement 2024','2023 placement','placement 2023','2022 placement','placement 2022','2021 placement','placement 2021','2020 placement','placement 2020','past placements','previous year placements','2024','2023','2022','2021','2020'],id:'placements_yearly',p:0.1}
];

function classifyIntent(input) {
    const cleanInput = input.toLowerCase().replace(/[^\w\s-]/g, '').trim();
    let matchedIntents = [];
    let intentIndices = {};

    for (const q of QA) {
        let matchedKeyword = null;
        for (const kw of q.k) {
            const regex = new RegExp(`\\b${kw}\\b`, 'i');
            if (regex.test(cleanInput)) {
                matchedKeyword = kw;
                break;
            }
        }
        if (matchedKeyword) {
            matchedIntents.push(q);
            intentIndices[q.id] = cleanInput.indexOf(matchedKeyword);
        }
    }
    
    let best = null, bestP = 999;
    for (const q of matchedIntents) {
        if (q.p < bestP) {
            best = q.id; bestP = q.p; 
        }
    }
    
    let isComposite = false;
    if (matchedIntents.length > 1) {
        const matchedIds = matchedIntents.map(q => q.id);
        const deptMatches = matchedIds.filter(id => id.startsWith('dept_')).sort((a, b) => b.length - a.length);
        const deptMatch = deptMatches[0];
        
        if (deptMatch) {
            const branchCode = deptMatch.replace('dept_', '');
            if (matchedIds.includes('placements') || cleanInput.includes('placement')) {
                best = `plcmt_${branchCode}`;
                isComposite = true;
            }
        }
    }

    // Auto-mapper
    if (best && best.startsWith('dept_')) {
        best = best.replace('dept_', 'plcmt_');
        isComposite = true;
    }
    
    return best;
}

console.log(classifyIntent("ECE PLACEMENT STATS 2025"));
