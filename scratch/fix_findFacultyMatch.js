const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');

c = c.replace(/function findFacultyMatch[\s\S]*?const INTENT_LABELS/, `function findFacultyMatch(input) {
    const sInput = sanitize(input).toLowerCase().replace(/[^a-z]/g, '');
    let bestMatch = null;
    let bestMatchLength = 0;

    for (const deptCode in KB.faculty) {
        for (const fac of KB.faculty[deptCode]) {
            const fSlug = fac.n.toLowerCase().replace(/[^a-z]/g, '');
            const pSlug = fac.n.replace(/Dr\\.|Prof\\.|Mr\\.|Assistant Prof/gi, '').toLowerCase().replace(/[^a-z]/g, '');
            
            if (sInput === fSlug || sInput === pSlug) {
                return \`fac_\${fSlug}\`;
            }
            if (sInput.length > 5 && (sInput.includes(fSlug) || sInput.includes(pSlug))) {
                const matchLen = sInput.includes(fSlug) ? fSlug.length : pSlug.length;
                if (matchLen > bestMatchLength) {
                    bestMatch = \`fac_\${fSlug}\`;
                    bestMatchLength = matchLen;
                }
            }
        }
    }
    return bestMatch;
}
// Human-readable labels for suggestion buttons
const INTENT_LABELS`);

fs.writeFileSync('script.js', c);
