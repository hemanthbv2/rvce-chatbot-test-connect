const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newMcaFacultyBlock = `mca: [
                { n: "Dr Jasmine K. S.", u: "https://rvce.edu.in/department/mca/dr-_jasmine-k-s_bio/", d: "Associate Professor and Director", e: "28 Years" },
                { n: "Dr Usha J.", u: "https://rvce.edu.in/department/mca/dr-usha-j", d: "Professor", e: "26 years" },
                { n: "Dr Andhe Dharani", u: "https://rvce.edu.in/department/mca/dr-andhe-dharani", d: "Professor", e: "23 Years" },
                { n: "Dr B. Renuka Prasad", u: "https://rvce.edu.in/department/mca/dr-b-renuka-prasad", d: "Associate Professor", e: "21 Years" },
                { n: "Dr B. H. Chandrashekar", u: "https://rvce.edu.in/department/mca/dr-b-h-chandrashekar/", d: "Associate Professor", e: "Teaching: 19 Years, Technical: 15 Years" },
                { n: "Dr Deepika K", u: "https://rvce.edu.in/department/mca/dr-deepika-k", d: "Associate Professor", e: "Teaching: 12 Years" },
                { n: "Dr Mohan Aradhya", u: "https://rvce.edu.in/department/mca/dr-mohan-aradhya/", d: "Assistant Professor", e: "Teaching: 18 Years" },
                { n: "Dr Divya T. L.", u: "https://rvce.edu.in/department/mca/dr-divya-t-l/", d: "Assistant Professor", e: "Teaching: 17 Years" },
                { n: "Prof Saravanan C", u: "https://rvce.edu.in/department/mca/prof-saravanan-c", d: "Assistant Professor", e: "Teaching: 17 Years" },
                { n: "Prof Chandrani Chakravorty", u: "https://rvce.edu.in/department/mca/prof-chandrani-chakravorty/", d: "Assistant Professor", e: "Teaching: 16 Years" },
                { n: "Prof Savita Sheelavant", u: "https://rvce.edu.in/department/mca/prof-savita-sheelavant/", d: "Assistant Professor", e: "Teaching: 17 Years" },
                { n: "Dr. R. Savitha", u: "https://rvce.edu.in/department/mca/dr-r-savitha/", d: "Assistant Professor", e: "Not specified" },
                { n: "Prof Prashanth K", u: "https://rvce.edu.in/department/mca/prof-prashanth-k/", d: "Assistant Professor", e: "Teaching: 14 Years, Industry: 1 Year 8 Months" }
            ],`;

code = code.replace(/mca:\s*\[[\s\S]*?\]\s*,/i, newMcaFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated MCA Faculty list in script.js!');
