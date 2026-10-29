const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, '../rvce-chatbot/assets/script.js');
let content = fs.readFileSync(scriptPath, 'utf8');

const ugUrl = 'https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug';
const pgUrl = 'https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme';

// Find the boundaries
const ugStart = content.indexOf('ug: [');
const pgStart = content.indexOf('pg: [');
const hostelsStart = content.indexOf('hostels: {');

if (ugStart === -1 || pgStart === -1 || hostelsStart === -1) {
    console.error('Could not find UG, PG, or Hostels section');
    process.exit(1);
}

// Extract UG section
let ugSection = content.substring(ugStart, pgStart);
// Replace syllabus URLs in UG section
ugSection = ugSection.replace(/syllabus:\s*"[^"]+"/g, `syllabus: "${ugUrl}"`);

// Extract PG section
let pgSection = content.substring(pgStart, hostelsStart);
// Replace syllabus URLs in PG section
pgSection = pgSection.replace(/syllabus:\s*"[^"]+"/g, `syllabus: "${pgUrl}"`);

// Optional: should we add syllabus to pg items that don't have it?
// The pg items look like: { n: "M.Tech Biotechnology", c: "bt", hod: "Dr. Nagashree N Rao", u: "https://rvce.edu.in/department/biotechnology/department-of-biotechnology/" }
// The user said: "for all departments syllabus url put this there. for ug:... for pg:..."
// If they meant to just update existing syllabus keys:
pgSection = pgSection.replace(/({ n: "M\.Tech[^}]+})/g, (match) => {
    if (!match.includes('syllabus:')) {
        // Add syllabus before the closing brace
        return match.replace(/ }\s*$/, `, syllabus: "${pgUrl}" }`);
    }
    return match;
});

// Recombine
const newContent = content.substring(0, ugStart) + ugSection + pgSection + content.substring(hostelsStart);

fs.writeFileSync(scriptPath, newContent, 'utf8');
console.log('Successfully updated syllabus URLs in script.js');
