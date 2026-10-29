const fs = require('fs');
const https = require('https');

async function fetchUrl(url) {
    url = url.replace('http://', 'https://');
    return new Promise((resolve, reject) => {
        const req = https.get(url, {
            rejectUnauthorized: false,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // handle redirect
                return fetchUrl(res.headers.location.startsWith('http') ? res.headers.location : `https://rvce.edu.in${res.headers.location}`).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Status: ${res.statusCode}`));
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.end();
    });
}

async function verifyAndUpdate() {
    let scriptContent = fs.readFileSync('script.js', 'utf8');
    const lines = scriptContent.split('\n');
    
    // Parse HODs and URLs
    const hods = [];
    let currentDept = null;
    let currentHod = null;
    let currentFacultyUrl = null;
    let hodLineIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.match(/n\s*:\s*"/)) {
            const match = line.match(/n\s*:\s*"(.*?)"/);
            if (match) {
                if (currentDept && currentHod && currentFacultyUrl) {
                    hods.push({ dept: currentDept, hod: currentHod, url: currentFacultyUrl, lineIndex: hodLineIndex });
                }
                currentDept = match[1];
                currentHod = null;
                currentFacultyUrl = null;
                hodLineIndex = -1;
            }
        }
        if (line.includes('hod:')) {
            const match = line.match(/hod:\s*"(.*?)"/);
            if (match && currentDept) {
                currentHod = match[1];
                hodLineIndex = i;
            }
        }
        if (line.includes('faculty:')) {
            const match = line.match(/faculty:\s*"(.*?)"/);
            if (match && currentDept) {
                currentFacultyUrl = match[1];
            }
        }
    }
    if (currentDept && currentHod && currentFacultyUrl) {
        hods.push({ dept: currentDept, hod: currentHod, url: currentFacultyUrl, lineIndex: hodLineIndex });
    }
    
    console.log(`Verifying ${hods.length} HODs against the website...`);
    
    let deletedCount = 0;
    const linesToRemove = [];
    
    for (const item of hods) {
        if (!item.hod || item.hod === "To Be Appointed" || item.hod.includes('Under CSE Dept')) {
            continue;
        }
        
        try {
            const html = await fetchUrl(item.url);
            
            // Clean up the name for searching (remove Dr., Prof., I/c, etc.)
            let searchName = item.hod.replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.)\s*/i, '')
                                     .replace(/\(I\/c\)/i, '')
                                     .trim();
                                     
            const parts = searchName.split(' ');
            let found = false;
            
            // RVCE website might have "Shanta Rangaswamy" or "Shantharangaswamy" etc.
            // Check if both first and last parts exist in HTML
            if (parts.length >= 2) {
                found = html.includes(parts[0]) && html.includes(parts[parts.length - 1]);
            } else {
                found = html.includes(searchName);
            }
            
            if (found) {
                console.log(`[VERIFIED] ${item.dept} - ${item.hod}`);
            } else {
                console.log(`[NOT FOUND - DELETING] ${item.dept} - ${item.hod}`);
                linesToRemove.push(item.lineIndex);
                deletedCount++;
            }
            
        } catch (e) {
            console.log(`[ERROR FETCHING - DELETING] ${item.dept} - ${item.url} - ${e.message}`);
            linesToRemove.push(item.lineIndex);
            deletedCount++;
        }
    }
    
    if (linesToRemove.length > 0) {
        // Remove lines from bottom to top to not mess up indexes
        linesToRemove.sort((a, b) => b - a);
        for (const idx of linesToRemove) {
            lines.splice(idx, 1);
        }
        fs.writeFileSync('script.js', lines.join('\n'), 'utf8');
        console.log(`\nDone. Deleted ${deletedCount} HOD entries from script.js that were not verified on the website.`);
    } else {
        console.log(`\nDone. All HODs verified successfully. No deletions needed.`);
    }
}

verifyAndUpdate();
