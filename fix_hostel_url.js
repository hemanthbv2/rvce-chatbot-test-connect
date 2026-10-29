const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// If hostels object was deleted or modified, let's restore it properly right before facilities
if (!content.includes('hostels: {')) {
    const hostelBlock = `        hostels: {
            boys: "Chamundi, Cauvery, Sir MV, Krishna blocks",
            girls: "Diamond Jubilee, Krishna Garden blocks",
            amenities: "Vegetarian mess, Wi-Fi, laundry, 24/7 security",
            note: "Allotted during admission — no advance booking",
            url: "https://rvce.edu.in/facilities/hostel/"
        },
        facilities: {`;

    content = content.replace('facilities: {', hostelBlock);
} else {
    content = content.replace('url: "https://rvce.edu.in/facilities/"', 'url: "https://rvce.edu.in/facilities/hostel/"');
}

// Also make sure MCA end block is intact
if (!content.includes('campus_diaries: "https://rvce.edu.in/department/mca/campus_diaries/"')) {
    content = content.replace(
        'research: "https://rvce.edu.in/department/mca/research/"',
        'research: "https://rvce.edu.in/department/mca/research/",\n                    campus_diaries: "https://rvce.edu.in/department/mca/campus_diaries/"\n                }\n            ]\n        },'
    );
}

fs.writeFileSync('script.js', content, 'utf8');
console.log('Restored hostels object and updated URL!');
