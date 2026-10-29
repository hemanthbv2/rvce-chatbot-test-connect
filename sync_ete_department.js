const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newEteFacultyBlock = `et: [
                { n: "Dr. Nagamani K", u: "https://rvce.edu.in/department/etc/dr-nagamani-k-bio/", d: "Professor and Head", e: "21 Years" },
                { n: "Dr. H.V. Kumaraswamy", u: "https://rvce.edu.in/department/etc/dr-h-v-kumaraswamy/", d: "Professor", e: "30 Years" },
                { n: "Dr. K. Sreelakshmi", u: "https://rvce.edu.in/department/etc/dr-k-sreelakshmi/", d: "Professor & PG Dean Studies (Circuit Branches)", e: "28 yrs" },
                { n: "Dr. B. Roja Reddy", u: "https://rvce.edu.in/department/etc/dr-b-roja-reddy/", d: "Associate Professor", e: "20 Years" },
                { n: "Dr. Premananda B S", u: "https://rvce.edu.in/department/etc/dr-premananda-b-s/", d: "Associate Professor", e: "19 Years" },
                { n: "Dr. Bhagya R", u: "https://rvce.edu.in/department/etc/dr-bhagya-r", d: "Assistant Professor", e: "20 Years" },
                { n: "Dr. Shanthi P", u: "https://rvce.edu.in/department/etc/dr-shanthi-p", d: "Assistant Professor", e: "19 Years" },
                { n: "Dr. Usha Padma", u: "https://rvce.edu.in/department/etc/dr-usha-padma", d: "Assistant Professor", e: "19 Years" },
                { n: "Prof. T.P. Mithun", u: "https://rvce.edu.in/department/etc/prof-t-p-mithun/", d: "Assistant Professor", e: "14 Years" },
                { n: "Dr. Shambulinga M", u: "https://rvce.edu.in/department/etc/dr-shambulinga-m", d: "Assistant Professor", e: "15 Years" },
                { n: "Dr. Sandya H B", u: "https://rvce.edu.in/department/etc/dr-sandya-h-b", d: "Assistant Professor", e: "13 Years" },
                { n: "Prof. N.N. Nagendra", u: "https://rvce.edu.in/department/etc/prof-nagendra-n-n/", d: "Assistant Professor", e: "13 Years" },
                { n: "Prof. Mahalakshmi M. N.", u: "https://rvce.edu.in/department/etc/prof-mahalakshmi-m-n", d: "Assistant Professor", e: "13 Years" },
                { n: "Prof. Rakesh K.R", u: "https://rvce.edu.in/department/etc/prof-rakesh-k-r", d: "Assistant Professor", e: "13 Years" },
                { n: "Dr. K. Saraswathi", u: "https://rvce.edu.in/department/etc/dr-k-saraswathi", d: "Assistant Professor", e: "07 Years" },
                { n: "Dr. Ranjani G", u: "https://rvce.edu.in/department/etc/dr-ranjani-g", d: "Assistant Professor", e: "07 Years" }
            ],`;

code = code.replace(/et:\s*\[[\s\S]*?\]\s*,/i, newEteFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated ETE Faculty list in script.js!');
