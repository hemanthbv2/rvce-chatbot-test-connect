const fs = require('fs');
const path = require('path');

const scriptPaths = [
    path.join(__dirname, '../script.js'),
    path.join(__dirname, '../rvce-chatbot/assets/script.js')
];

const pgUrl = 'https://rvce.edu.in/academics_and_examinations/rvce_scheme_syllabus/#pgscheme';

scriptPaths.forEach(scriptPath => {
    let content = fs.readFileSync(scriptPath, 'utf8');

    const pgStart = content.indexOf('pg: [');
    const hostelsStart = content.indexOf('hostels: {');

    if (pgStart === -1 || hostelsStart === -1) {
        console.error('Could not find PG section in', scriptPath);
        return;
    }

    let pgSection = content.substring(pgStart, hostelsStart);
    
    // Add syllabus to pg items that don't have it
    pgSection = pgSection.replace(/(\{n:\s*"M\.Tech[^}]+})/g, (match) => {
        if (!match.includes('syllabus:')) {
            return match.replace(/}\s*$/, `, syllabus: "${pgUrl}"}`);
        }
        return match;
    });
    
    // And also fix any \{ n: ... \}
    pgSection = pgSection.replace(/(\{\s*n:\s*"M\.Tech[^}]+})/g, (match) => {
        if (!match.includes('syllabus:')) {
            return match.replace(/}\s*$/, `, syllabus: "${pgUrl}" }`);
        }
        return match;
    });

    const newContent = content.substring(0, pgStart) + pgSection + content.substring(hostelsStart);
    fs.writeFileSync(scriptPath, newContent, 'utf8');
    console.log('Successfully updated M.Tech syllabus URLs in', scriptPath);
});
