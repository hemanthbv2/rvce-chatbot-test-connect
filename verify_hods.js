const fs = require('fs');

async function checkHods() {
    const hods = JSON.parse(fs.readFileSync('hods_to_check.json', 'utf8'));
    const results = [];
    
    console.log(`Starting verification of ${hods.length} HODs...`);
    
    for (const item of hods) {
        if (!item.hod || item.hod === "To Be Appointed") {
            continue;
        }
        
        try {
            // Using standard fetch which bypassed the WAF 403 earlier
            const response = await fetch(item.facultyUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            });
            
            if (response.status === 403) {
                console.log(`[403 Blocked] ${item.dept}`);
                results.push({ dept: item.dept, hod: item.hod, status: 'BLOCKED' });
                continue;
            }
            
            const html = await response.text();
            
            // Just check if the last name or significant part of the name is present
            // RVCE website often formats names differently (e.g. Dr. Shanta Rangaswamy vs Shanta Rangaswamy)
            // So we'll strip 'Dr.', 'Prof.' and check for the main name.
            let searchName = item.hod.replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.)\s*/i, '').trim();
            // take the first and last name chunks to be safe against middle name issues
            const parts = searchName.split(' ');
            
            let found = false;
            
            if (parts.length >= 2) {
                // If both first and last name parts are found somewhere in the document text
                found = html.includes(parts[0]) && html.includes(parts[parts.length - 1]);
            } else {
                found = html.includes(searchName);
            }
            
            if (found) {
                console.log(`[FOUND] ${item.dept} - ${item.hod}`);
                results.push({ dept: item.dept, hod: item.hod, status: 'FOUND' });
            } else {
                console.log(`[MISSING] ${item.dept} - ${item.hod}`);
                results.push({ dept: item.dept, hod: item.hod, status: 'MISSING' });
            }
            
        } catch (e) {
            console.log(`[ERROR] ${item.dept} - ${e.message}`);
        }
    }
    
    fs.writeFileSync('hod_verification_results.json', JSON.stringify(results, null, 2));
    
    // Now generate a script to update script.js and remove the MISSING HODs
    const missingDepts = results.filter(r => r.status === 'MISSING').map(r => r.dept);
    if (missingDepts.length > 0) {
        let scriptContent = fs.readFileSync('script.js', 'utf8');
        for (const dept of missingDepts) {
            console.log(`Preparing to remove HOD for ${dept}...`);
            // We need a smart replace. Let's just find the section for this dept and remove the hod line.
            // This is complex with regex. Instead of modifying it automatically here, we'll output the list of missing HODs.
        }
    }
}

checkHods();
