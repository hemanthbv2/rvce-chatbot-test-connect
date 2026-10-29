const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');
const lines = scriptContent.split('\n');

const hods = [];
let currentDept = null;
let currentHod = null;
let currentFacultyUrl = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // We expect each department object to have n, hod, and faculty
    if (line.includes('n:') || line.includes('n :') || line.includes('n="') || line.match(/n\s*:\s*"/)) {
        const match = line.match(/n\s*:\s*"(.*?)"/);
        if (match) {
            // New department found, push previous if valid
            if (currentDept && currentHod && currentFacultyUrl) {
                hods.push({ dept: currentDept, hod: currentHod, facultyUrl: currentFacultyUrl });
            }
            currentDept = match[1];
            currentHod = null;
            currentFacultyUrl = null;
        }
    }
    
    if (line.includes('hod:')) {
        const match = line.match(/hod:\s*"(.*?)"/);
        if (match && currentDept) {
            currentHod = match[1];
        }
    }
    
    if (line.includes('faculty:')) {
        const match = line.match(/faculty:\s*"(.*?)"/);
        if (match && currentDept) {
            currentFacultyUrl = match[1];
        }
    }
}

// Push the last one
if (currentDept && currentHod && currentFacultyUrl) {
    hods.push({ dept: currentDept, hod: currentHod, facultyUrl: currentFacultyUrl });
}

fs.writeFileSync('hods_to_check.json', JSON.stringify(hods, null, 2));
console.log('Extracted ' + hods.length + ' HODs to check.');
