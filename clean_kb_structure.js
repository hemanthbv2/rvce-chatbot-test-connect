const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const targetStr = `865:                 }
866:             ]
867:         },
868:             url: "https://rvce.edu.in/facilities/"
869:         },`;

const replacement = `                }
            ]
        },
        hostels: {
            boys: "Chamundi, Cauvery, Sir MV, Krishna blocks",
            girls: "Diamond Jubilee, Krishna Garden blocks",
            amenities: "Vegetarian mess, Wi-Fi, laundry, 24/7 security",
            note: "Allotted during admission — no advance booking",
            url: "https://rvce.edu.in/facilities/hostel/"
        },
        facilities: {
            list: ["Central Library", "Food Court", "Sports Complex (400m track, Cricket/Football)", "Health Centre", "ICICI Bank", "Post Office", "Gymnatorium", "Labs & Workshops"],
            url: "https://rvce.edu.in/facilities/"
        },`;

content = content.replace(/campus_diaries:\s*"https:\/\/rvce\.edu\.in\/department\/mca\/campus_diaries\/"\s*\}\s*\]\s*\},[\s\S]*?url:\s*"https:\/\/rvce\.edu\.in\/facilities\/"\s*\},/i, `campus_diaries: "https://rvce.edu.in/department/mca/campus_diaries/"
                }
            ]
        },
        hostels: {
            boys: "Chamundi, Cauvery, Sir MV, Krishna blocks",
            girls: "Diamond Jubilee, Krishna Garden blocks",
            amenities: "Vegetarian mess, Wi-Fi, laundry, 24/7 security",
            note: "Allotted during admission — no advance booking",
            url: "https://rvce.edu.in/facilities/hostel/"
        },
        facilities: {
            list: ["Central Library", "Food Court", "Sports Complex (400m track, Cricket/Football)", "Health Centre", "ICICI Bank", "Post Office", "Gymnatorium", "Labs & Workshops"],
            url: "https://rvce.edu.in/facilities/"
        },`);

fs.writeFileSync('script.js', content, 'utf8');
console.log('Cleaned KB structure successfully!');
