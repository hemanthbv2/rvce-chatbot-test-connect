const fs = require('fs');
const path = require('path');

// Absolute paths for robustness
const scriptPath = path.join(__dirname, '../rvce-chatbot/assets/script.js');
const tempKbPath = path.join(__dirname, 'kb_temp.js');
const outputPath = path.join(__dirname, 'extracted_kb_links.json');

try {
    console.log(`Reading chatbot script from: ${scriptPath}`);
    const code = fs.readFileSync(scriptPath, 'utf8');

    // Locate the start of "const KB = {"
    const kbStartIndex = code.indexOf('const KB = {');
    if (kbStartIndex === -1) {
        throw new Error('Could not find start of const KB in script.js');
    }

    // Balance braces to extract the complete KB object block
    let braceCount = 0;
    let kbEndIndex = -1;
    for (let i = kbStartIndex; i < code.length; i++) {
        if (code[i] === '{') {
            braceCount++;
        } else if (code[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
                kbEndIndex = i + 1;
                break;
            }
        }
    }

    if (kbEndIndex === -1) {
        throw new Error('Could not find matching closing brace for const KB');
    }

    const kbBlock = code.slice(kbStartIndex, kbEndIndex);
    
    // Convert to a Node.js module export
    const exportBlock = kbBlock.replace('const KB =', 'module.exports =');
    fs.writeFileSync(tempKbPath, exportBlock, 'utf8');
    console.log('Successfully wrote temporary KB module.');

    // Require the temporary module to load the actual KB object in memory
    const KB = require(tempKbPath);
    console.log('Successfully loaded KB object in memory via Node.js!');

    const extractedLinks = [];

    // 1. General & Contact Links
    if (KB.contact) {
        if (KB.contact.website) {
            extractedLinks.push({
                url: KB.contact.website,
                label: 'Official Website',
                context: 'Contact Information',
                category: 'General & Contact'
            });
        }
        if (KB.contact.email) {
            extractedLinks.push({
                url: KB.contact.email,
                label: 'Principal Email',
                context: 'Contact Information',
                category: 'General & Contact'
            });
        }
        if (KB.contact.vicePrincipalEmail) {
            extractedLinks.push({
                url: KB.contact.vicePrincipalEmail,
                label: 'Vice Principal Email',
                context: 'Contact Information',
                category: 'General & Contact'
            });
        }
        if (KB.contact.social) {
            for (const [key, value] of Object.entries(KB.contact.social)) {
                extractedLinks.push({
                    url: value,
                    label: `${key.charAt(0).toUpperCase() + key.slice(1)} Page`,
                    context: `Social Media (${key})`,
                    category: 'Social Media'
                });
            }
        }
    }

    // 2. Admissions, Placements, Hostels & Facilities
    if (KB.placements && KB.placements.url) {
        extractedLinks.push({
            url: KB.placements.url,
            label: 'Placements & Training Portal',
            context: 'Placement Information',
            category: 'Admissions & Placements'
        });
    }
    if (KB.admissions && KB.admissions.url) {
        extractedLinks.push({
            url: KB.admissions.url,
            label: 'Admissions Info Page',
            context: 'Admissions Information',
            category: 'Admissions & Placements'
        });
    }
    if (KB.hostels && KB.hostels.url) {
        extractedLinks.push({
            url: KB.hostels.url,
            label: 'Hostels & Campus Facilities Page',
            context: 'Hostel Information',
            category: 'Admissions & Placements'
        });
    }
    if (KB.facilities && KB.facilities.url) {
        extractedLinks.push({
            url: KB.facilities.url,
            label: 'Campus Facilities Portal',
            context: 'Campus Facilities',
            category: 'Admissions & Placements'
        });
    }
    if (KB.campus && KB.campus.urls) {
        if (KB.campus.urls.innovation) {
            extractedLinks.push({
                url: KB.campus.urls.innovation,
                label: 'Innovative Student Teams Portal',
                context: 'Extra-curricular Innovation',
                category: 'Campus Life & Teams'
            });
        }
        if (KB.campus.urls.cultural) {
            extractedLinks.push({
                url: KB.campus.urls.cultural,
                label: 'Cultural Teams Portal',
                context: 'Extra-curricular Activities',
                category: 'Campus Life & Teams'
            });
        }
    }

    // 3. Circulars
    if (KB.circulars) {
        for (const [key, value] of Object.entries(KB.circulars)) {
            extractedLinks.push({
                url: value,
                label: `${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} Circular`,
                context: `Academic Circulars (${key})`,
                category: 'Circulars'
            });
        }
    }

    // 4. Departments
    if (KB.departments) {
        // UG Departments
        if (KB.departments.ug) {
            KB.departments.ug.forEach(dept => {
                const deptName = dept.n;
                const linkKeys = ['u', 'hod_url', 'about', 'syllabus', 'faculty', 'research', 'placement', 'labs', 'facilities', 'campus_diaries', 'hod_message', 'collab', 'coe_3s', 'coe_cisss', 'coe_vision', 'coe_mobility', 'coe_vidyuth', 'coc_ev', 'coe_mfc', 'coe_cav', 'coe_icas', 'coe_sasm', 'coe_sensor', 'coe_health', 'coe_logistics', 'coe', 'coe_quantum', 'coe_toyota', 'coe_ev', 'scholarship', 'tournaments'];
                
                linkKeys.forEach(key => {
                    if (dept[key] && typeof dept[key] === 'string' && dept[key].startsWith('http')) {
                        let label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
                        if (key === 'u') label = 'Department Homepage';
                        if (key === 'hod_url') label = 'HOD Profile';
                        
                        extractedLinks.push({
                            url: dept[key],
                            label: label,
                            context: `${deptName} Department`,
                            category: 'Department Resources'
                        });
                    }
                });
            });
        }

        // PG Departments
        if (KB.departments.pg) {
            KB.departments.pg.forEach(dept => {
                const deptName = dept.n;
                const linkKeys = ['u', 'about', 'syllabus', 'faculty', 'placement', 'labs', 'facilities', 'research', 'campus_diaries'];
                
                linkKeys.forEach(key => {
                    if (dept[key] && typeof dept[key] === 'string' && dept[key].startsWith('http')) {
                        let label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
                        if (key === 'u') label = 'PG Department Homepage';
                        
                        extractedLinks.push({
                            url: dept[key],
                            label: label,
                            context: `${deptName} (PG)`,
                            category: 'Department Resources'
                        });
                    }
                });
            });
        }
    }

    // 5. Faculty Links
    if (KB.faculty) {
        for (const [deptCode, members] of Object.entries(KB.faculty)) {
            if (Array.isArray(members)) {
                members.forEach(member => {
                    if (member.u && typeof member.u === 'string' && member.u.startsWith('http') && member.u !== 'https://rvce.edu.in/department/chemistry/faculty/') {
                        extractedLinks.push({
                            url: member.u,
                            label: `${member.n} (${member.r || 'Faculty'})`,
                            context: `${deptCode.toUpperCase()} Department Faculty`,
                            category: 'Faculty Profiles'
                        });
                    }
                });
            }
        }
    }

    // De-duplicate links (some departments might share a URL or something)
    const seenUrls = new Set();
    const uniqueLinks = [];
    extractedLinks.forEach(item => {
        const uniqueKey = `${item.url.trim()}-${item.label.trim()}`;
        if (!seenUrls.has(uniqueKey)) {
            seenUrls.add(uniqueKey);
            uniqueLinks.push(item);
        }
    });

    // Write output to JSON
    fs.writeFileSync(outputPath, JSON.stringify(uniqueLinks, null, 2), 'utf8');
    console.log(`\nSuccessfully extracted ${uniqueLinks.length} UNIQUE links!`);
    console.log(`Saved output to: ${outputPath}`);

} catch (error) {
    console.error('Error during extraction:', error);
} finally {
    // Cleanup temporary file
    if (fs.existsSync(tempKbPath)) {
        fs.unlinkSync(tempKbPath);
        console.log('Cleaned up temporary KB module.');
    }
}
