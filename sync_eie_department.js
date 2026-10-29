const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newEieFacultyBlock = `ei: [
                { n: "Dr. CH. Renu Madhavi", u: "https://rvce.edu.in/department/eim/dr_ch_renu_madhavi/", d: "Professor & Head", e: "25+ Yrs" },
                { n: "Dr. Sudarshan B. G.", u: "https://rvce.edu.in/department/eim/dr_sudarshan_b_g/", d: "Associate Professor", e: "20 yrs" }
            ],`;

code = code.replace(/ei:\s*\[[\s\S]*?\]\s*,/i, newEieFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated EIE Faculty list in script.js!');
