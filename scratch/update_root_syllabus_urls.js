const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, '../script.js');
let content = fs.readFileSync(scriptPath, 'utf8');

const ugUrl = 'https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#ug';
const pgUrl = 'https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme';

// Find the boundaries
const ugStart = content.indexOf('ug: [');
const pgStart = content.indexOf('pg: [');
const hostelsStart = content.indexOf('hostels: {');

if (ugStart === -1 || pgStart === -1 || hostelsStart === -1) {
    console.error('Could not find UG, PG, or Hostels section in root script.js');
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
pgSection = pgSection.replace(/({ n:\s*"M\.Tech[^}]+})/g, (match) => {
    if (!match.includes('syllabus:')) {
        // Add syllabus before the closing brace
        return match.replace(/ }\s*$/, `, syllabus: "${pgUrl}" }`);
    }
    return match;
});

// Recombine
const newContent = content.substring(0, ugStart) + ugSection + pgSection + content.substring(hostelsStart);

fs.writeFileSync(scriptPath, newContent, 'utf8');
console.log('Successfully updated syllabus URLs in root script.js');
