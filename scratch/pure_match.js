const fs = require('fs');

const KB = {
    departments: {
        ug: [],
        pg: [
            {n:"M.Tech CSE",c:"cs_cse"}
        ]
    }
};

function sanitize(input) {
    let cleaned = input.replace(/\./g, '');
    cleaned = cleaned.replace(/[^a-zA-Z0-9_\s]/g, ' ');
    return cleaned.replace(/\s+/g, ' ').trim();
}

const branchPlacementIntents = [];
const allBranches = [...KB.departments.ug, ...KB.departments.pg];

allBranches.forEach(branch => {
    const code = branch.c;
    const name = sanitize(branch.n.replace(/\(.*\)/, '')).toLowerCase();
    
    const kws = [
        `${code} placement`, `${code} placements`, `${code} salary`, `${code} package`, `${code} job`,
        `${name} placement`, `${name} placements`,
        `placement in ${code}`, `placements in ${code}`,
        `placement in ${name}`, `placements in ${name}`
    ];
    
    if (code === 'cs') kws.push('cse placement', 'cse placements', 'computer science placement');
    
    branchPlacementIntents.push({ k: kws, id: `plcmt_${code}`, p: 1.5 });
});

let input = "can you tell me about placements in m.tech cse";
let cleanInput = sanitize(input).toLowerCase();

const stopWords = ['the', 'is', 'for', 'a', 'an', 'of', 'in', 'to', 'and', 'with', 'about', 'on', 'at', 'please', 'can', 'you', 'tell', 'me', 'know'];
let strippedInput = cleanInput.split(' ').filter(w => !stopWords.includes(w)).join(' ');

console.log("cleanInput:", cleanInput);
console.log("strippedInput:", strippedInput);

const q = branchPlacementIntents[0]; // plcmt_cs_cse
console.log("Intent ID:", q.id);

let matched = false;
for (const k of q.k) {
    const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');
    
    let isMatch = regex.test(cleanInput) || regex.test(strippedInput);
    if (isMatch) {
        console.log("MATCHED Keyword:", k);
        const idx = cleanInput.indexOf(k.toLowerCase());
        
        if (idx !== -1) {
            const precedingText = cleanInput.substring(Math.max(0, idx - 20), idx);
            console.log("precedingText:", precedingText);
            if (/\b(not|no|don't|dont|without|excluding|except)\b/i.test(precedingText)) {
                console.log("Negation detected, continuing");
                continue;
            }
        }
        
        console.log("Successfully matched", q.id);
        matched = true;
        break;
    }
}

if (!matched) {
    console.log("FAILED to match", q.id);
}
