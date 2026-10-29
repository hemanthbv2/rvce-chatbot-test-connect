const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// 1. Add ieee URL into KB.campus.urls if not present
if (!content.includes('ieee: "https://rvce.edu.in/ieee-rvce/"')) {
    content = content.replace(
        'cultural: "https://rvce.edu.in/cultural_teams/"',
        'cultural: "https://rvce.edu.in/cultural_teams/",\n            ieee: "https://rvce.edu.in/ieee-rvce/",\n            sports: "https://rvce.edu.in/facilities/sports_and_gymnatorium/"'
    );
}

// 2. Add IEEE button to case 'professional_societies'
if (!content.includes("IEEE RVCE")) {
    // Check professional_societies case
    content = content.replace(
        "r.buttons = [{ l: 'Innovation Teams', a: 'innovationTeams', i: '💡' }, { l: 'Cultural Clubs', a: 'culturalLife', i: '🎭' }];",
        "r.buttons = [{ l: 'IEEE RVCE Portal', u: 'https://rvce.edu.in/ieee-rvce/', i: '🌐' }, { l: 'Innovation Teams', a: 'innovationTeams', i: '💡' }, { l: 'Cultural Clubs', a: 'culturalLife', i: '🎭' }];"
    );
} else {
    // If professional_societies doesn't have IEEE portal button yet
    content = content.replace(
        "r.buttons = [{ l: 'Innovation Teams', a: 'innovationTeams', i: '💡' }, { l: 'Cultural Clubs', a: 'culturalLife', i: '🎭' }];",
        "r.buttons = [{ l: 'IEEE RVCE Portal', u: 'https://rvce.edu.in/ieee-rvce/', i: '🌐' }, { l: 'Innovation Teams', a: 'innovationTeams', i: '💡' }, { l: 'Cultural Clubs', a: 'culturalLife', i: '🎭' }];"
    );
}

// 3. Update sports case button to point to https://rvce.edu.in/facilities/sports_and_gymnatorium/
content = content.replace(
    /case 'sports':[\s\S]*?r\.buttons\s*=\s*\[[\s\S]*?\];/i,
    `case 'sports':
                r.text += T("Stay fit and active at RVCE! 🏃‍♂️🏆\\n\\nThe Department of Physical Education & Sports provides excellent facilities for indoor and outdoor games. RVCE students regularly participate in VTU, State, and National level tournaments.",
                    "Department of Physical Education & Sports:\\nRVCE provides comprehensive sports facilities and scholarships for outstanding athletes.");
                r.buttons = [{ l: 'Sports & Games Portal', u: 'https://rvce.edu.in/facilities/sports_and_gymnatorium/', i: '🌐' }, { l: 'Sports Dept Page', u: 'https://rvce.edu.in/department-of-physical-education-sports/', i: '🏆' }];`
);

fs.writeFileSync('script.js', content, 'utf8');
console.log('Successfully updated script.js with IEEE portal and Sports & Gymnatorium direct link!');
