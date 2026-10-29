const QA = [
    { k: ['computer science', 'cse', 'cs', 'cs department', 'computer science engineering', 'cse department', 'comps', 'comp sci', 'cs branch', 'cs dept'], id: 'dept_cs', p: 1 },
    { k: ['electronics and communication', 'ece', 'ec', 'ec department', 'ece department', 'entc', 'e and c', 'ec branch'], id: 'dept_ec', p: 1 },
    { k: ['placement stats', 'placement statistics', 'placement year', 'year wise placement', '2024 placement', 'placement 2024', '2023 placement', 'placement 2023', '2022 placement', 'placement 2022', '2021 placement', 'placement 2021', '2020 placement', 'placement 2020', 'past placements', 'previous year placements', '2024', '2023', '2022', '2021', '2020'], id: 'placements_yearly', p: 0.1 },
];

function classifyIntent(input) {
    const strippedInput = input.replace(/[^\w\s-]/g, '').trim();
    const cleanInput = strippedInput.toLowerCase();

    let extractedYear = null;
    const yearMatch = input.match(/\b(20[1-2][0-9])\b/);
    if (yearMatch) {
        extractedYear = yearMatch[1];
    }

    let best = null;
    let bestP = 0;
    let bestL = 0;

    let matchedIntents = [];

    for (const q of QA) {
        let matchedKeyword = null;

        for (const k of q.k) {
            const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');

            let isMatch = regex.test(cleanInput) || regex.test(strippedInput);

            if (!isMatch && /^\d+$/.test(k)) {
                const numRegex = new RegExp('\\b' + k + '\\b', 'i');
                isMatch = numRegex.test(cleanInput);
            }

            if (isMatch) {
                matchedKeyword = k;
                break;
            }
        }

        if (matchedKeyword) {
            matchedIntents.push(q);
            if (q.p > bestP || (q.p === bestP && matchedKeyword.length > bestL)) {
                best = q.id; bestP = q.p; bestL = matchedKeyword.length;
            }
        }
    }

    let isComposite = false;

    if (matchedIntents.length > 1) {
        const matchedIds = matchedIntents.map(q => q.id);
        const existingComposite = matchedIds.find(id => id.startsWith('plcmt_') || id.startsWith('hod_'));

        if (existingComposite) {
            best = existingComposite;
            isComposite = true;
        } else {
            const deptMatches = matchedIds.filter(id => id.startsWith('dept_')).sort((a, b) => b.length - a.length);
            const deptMatch = deptMatches[0];

            if (deptMatch) {
                const branchCode = deptMatch.replace('dept_', '');
                if (matchedIds.includes('placements') || cleanInput.includes('placement')) {
                    best = \`plcmt_\${branchCode}\`;
                    isComposite = true;
                } else if (matchedIds.includes('hod_list') || cleanInput.includes('hod')) {
                    best = \`hod_\${branchCode}\`;
                    isComposite = true;
                }
            }
        }
    }

    if (best) {
        if (extractedYear && best.startsWith('dept_')) {
            best = best.replace('dept_', 'plcmt_');
            isComposite = true; 
        }
        return { type: isComposite ? 'exact' : 'keyword', id: best, year: extractedYear, suggestions: [] };
    }
    
    return { type: 'fuzzy', id: null, suggestions: [] };
}

console.log(classifyIntent("ECE PLACEMENT STATS 2025"));
