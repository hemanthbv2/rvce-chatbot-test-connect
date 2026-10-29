const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newIemFacultyBlock = `im: [
                { n: "Dr. Rajeswara Rao K V S", u: "https://rvce.edu.in/department/iem/dr-rajeswara-rao-k-v-s/", d: "Professor and Head", e: "27 Years" },
                { n: "Dr. K N Subramanya", u: "https://rvce.edu.in/department/iem/dr-k-n-subramanya/", d: "Principal & Professor", e: "30 Years" },
                { n: "Dr. C K Nagendra Gupta", u: "https://rvce.edu.in/department/iem/dr-c-k-nagendra-gupta/", d: "Professor", e: "29 Years" },
                { n: "Dr M N Vijaya Kumar", u: "https://rvce.edu.in/department/iem/dr-m-n-vijaya-kumar/", d: "Professor", e: "22 Years" },
                { n: "Dr. Ramaa A", u: "https://rvce.edu.in/department/iem/dr-ramaa-a/", d: "Professor", e: "25 Years" },
                { n: "Dr. Shobha N S", u: "https://rvce.edu.in/department/iem/dr-shobha-n-s/", d: "Associate Professor", e: "24 Years" },
                { n: "Dr. Vivekanand S. Gogi", u: "https://rvce.edu.in/department/iem/dr-vivekanand-s-gogi/", d: "Associate Professor", e: "19 Years" },
                { n: "Dr Vikram N Bahadurdesai", u: "https://rvce.edu.in/department/iem/dr-vikram-n-bahadurdesai/", d: "Associate Professor", e: "15 Years" },
                { n: "Dr Chitra B T", u: "https://rvce.edu.in/department/iem/dr-chitra-b-t/", d: "Associate Professor", e: "16 Years" },
                { n: "Dr Bindu Ashwini C.", u: "https://rvce.edu.in/department/iem/dr-bindu-ashwini-c/", d: "Assistant Professor", e: "17 Years" },
                { n: "Prof Shruthi M N", u: "https://rvce.edu.in/department/iem/prof-shruthi-m-n/", d: "Assistant Professor", e: "14 Years" },
                { n: "Prof B. Nandini", u: "https://rvce.edu.in/department/iem/prof-b-nandini/", d: "Assistant Professor", e: "11 Years" },
                { n: "Prof Bhaskar M G", u: "https://rvce.edu.in/department/iem/prof-bhaskar-m-g/", d: "Assistant Professor", e: "08 Years" },
                { n: "Dr N. S. Narahari", u: "https://rvce.edu.in/department/iem/n-s-narahari/", d: "Professor (Fixed Term)", e: "34 Years" }
            ],`;

code = code.replace(/im:\s*\[[\s\S]*?\]\s*,/i, newIemFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated IEM Faculty list in script.js!');
