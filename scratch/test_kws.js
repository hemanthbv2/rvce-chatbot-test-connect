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

console.log(branchPlacementIntents[0].k);
