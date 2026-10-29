const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');

const target = `            if (d) {
                if (rawStats) {
                    let stats = rawStats;
                    if (isUG && stats.ug) stats = stats.ug;
                    else if (isPG && stats.pg) stats = stats.pg;`;

const replacement = `            if (d) {
                if (rawStats) {
                    if (!isUG && !isPG && (rawStats.ug || rawStats.pg)) {
                        r.text += T(\`The **\${d.n}** department has both UG and PG programs. Which placement statistics would you like to view? 📊\`, 
                                    \`Select the program level for \${d.n} placements:\`);
                        r.buttons = [];
                        if (rawStats.ug) r.buttons.push({l: 'UG Programs (B.E.) 🎓', a: \`plcmt_\${c}_ug\`, i: '🎓'});
                        if (rawStats.pg) r.buttons.push({l: 'PG Programs (M.Tech/MCA) 🎓', a: \`plcmt_\${c}_pg\`, i: '🎓'});
                        r.buttons.push({l: 'Other Departments', a: 'dept_placements_list', i: '📋'});
                        return r;
                    }

                    let stats = rawStats;
                    if (isUG && stats.ug) stats = stats.ug;
                    else if (isPG && stats.pg) stats = stats.pg;`;

if (script.includes(target)) {
    script = script.replace(target, replacement);
    fs.writeFileSync('script.js', script);
    console.log("Success! File modified.");
} else {
    // maybe different line endings
    const target2 = target.replace(/\r\n/g, '\n');
    if (script.includes(target2)) {
        script = script.replace(target2, replacement);
        fs.writeFileSync('script.js', script);
        console.log("Success with \n!");
    } else {
        const target3 = target.replace(/\n/g, '\r\n');
        if (script.includes(target3)) {
            script = script.replace(target3, replacement);
            fs.writeFileSync('script.js', script);
            console.log("Success with \r\n!");
        } else {
            console.log("Failed to find target string.");
        }
    }
}
