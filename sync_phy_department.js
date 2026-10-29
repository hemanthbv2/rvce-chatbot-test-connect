const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newPhyFacultyBlock = `phy: [
                { n: "Dr. G. Shireesha", u: "https://rvce.edu.in/department/physics/dr_g_shireesha/", d: "Associate Professor and Head", e: "25 Years" },
                { n: "Dr. Sudha Kamath M K", u: "https://rvce.edu.in/department/physics/dr-sudha-kamath-m-k/", d: "Associate Professor", e: "18 Years" },
                { n: "Dr. D. N. Avadhani", u: "https://rvce.edu.in/department/physics/dr-avadhani-d-n/", d: "Assistant Professor", e: "24 Years" },
                { n: "Dr. Shubha S", u: "https://rvce.edu.in/department/physics/dr-shubha-s/", d: "Assistant Professor", e: "17 Years" },
                { n: "Dr. Tribikram Gupta", u: "https://rvce.edu.in/department/physics/dr-tribikram-gupta/", d: "Assistant Professor", e: "16 Years" },
                { n: "Dr. B. M. Rajesh", u: "https://rvce.edu.in/department/physics/dr-b-m-rajesh/", d: "Assistant Professor", e: "14 Years" },
                { n: "Dr. Ramya P", u: "https://rvce.edu.in/department/physics/dr-ramya-p/", d: "Assistant Professor", e: "13 Years" },
                { n: "Dr. Niranjana K M", u: "https://rvce.edu.in/department/physics/dr-niranjana-k-m/", d: "Assistant Professor", e: "12 Years" },
                { n: "Dr. Dileep M S", u: "https://rvce.edu.in/department/physics/dr-dileep-m-s/", d: "Assistant Professor", e: "10 Years" },
                { n: "Dr. Shwetha K P", u: "https://rvce.edu.in/department/physics/dr-shwetha-k-p/", d: "Assistant Professor", e: "09 Years" },
                { n: "Dr. Rini Ganguly", u: "https://rvce.edu.in/department/physics/dr-rini-ganguly/", d: "Assistant Professor", e: "06 Years" },
                { n: "Dr. Kavya K. Nayak", u: "https://rvce.edu.in/department/physics/dr-kavya-k-nayak/", d: "Assistant Professor", e: "06 Years" }
            ]`;

code = code.replace(/phy:\s*\[[\s\S]*?\]\s*$/, newPhyFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated Physics Faculty list in script.js!');
