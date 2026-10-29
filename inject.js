const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    'ae': { intake: '60', acc: 'NBA Accredited' },
    'aiml': { intake: '180', acc: 'Not specified/New' },
    'bt': { intake: '60', acc: 'NBA Accredited' },
    'ch': { intake: '40', acc: 'NBA Accredited' },
    'cv': { intake: '60', acc: 'NBA Accredited' },
    'cs': { intake: '360', acc: 'NBA Accredited' },
    'csaiml': { intake: '180', acc: 'Not specified/New' }, 
    'cscy': { intake: '60', acc: 'Not specified/New' },
    'csds': { intake: '60', acc: 'Not specified/New' },
    'ee': { intake: '60', acc: 'NBA Accredited' },
    'ec': { intake: '240', acc: 'NBA Accredited' },
    'ei': { intake: '60', acc: 'NBA Accredited' },
    'et': { intake: '60', acc: 'NBA Accredited' },
    'im': { intake: '60', acc: 'NBA Accredited' },
    'is': { intake: '135', acc: 'NBA Accredited' },
    'me': { intake: '120', acc: 'NBA Accredited' }
};

// Find KB.departments.ug and inject
let result = content;
for (const [code, data] of Object.entries(updates)) {
    // Regex to find: c:"code", followed by other properties
    const regex = new RegExp(`(c:\\s*["']${code}["'],\\s*\\n\\s*u:.*?,)`, 'g');
    result = result.replace(regex, `$1\n                intake: "${data.intake}",\n                accreditation: "${data.acc}",`);
}

fs.writeFileSync('script.js', result);
console.log("Updated script.js");
