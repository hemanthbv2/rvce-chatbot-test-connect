const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

// 1. Update HOD for EEE in department object
code = code.replace(
    /n:\s*"Electrical & Electronics \(EEE\)"[\s\S]*?hod:\s*"[^"]*"/i,
    (match) => match.replace(/hod:\s*"[^"]*"/, 'hod: "Dr. Hemalatha J.N."')
);

// 2. Update EEE faculty list in KB.faculty.ee
const newEeeFacultyBlock = `ee: [
                { n: "Dr. Hemalatha J.N.", u: "https://rvce.edu.in/department/eee/dr-hemalatha-j-n", d: "Professor & HoD (I/c)", e: "Teaching: 22 Years" },
                { n: "Dr. S G Srivani", u: "https://rvce.edu.in/department/eee/dr-s-g-srivani-bio", d: "Professor (Fixed Term)", e: "Teaching & Research: 39 years | Industry : 6 months" },
                { n: "Dr. P. Nagaraju", u: "https://rvce.edu.in/department/etc/dr-p-nagaraju/", d: "Professor", e: "Teaching: 30 Years" },
                { n: "Dr. Adinath Jain", u: "https://rvce.edu.in/department/eee/dr-adinatha-jain/", d: "Associate Professor", e: "Teaching: 22 Years , Industry: 5 years" },
                { n: "Dr. Rachana S. Akki", u: "https://rvce.edu.in/department/eee/dr-rachana-s-akki/", d: "Associate Professor", e: "Teaching: 18 Years , Industry: 7 Years" },
                { n: "Dr. C. Sunanda", u: "https://rvce.edu.in/department/eee/dr-c-sunanda/", d: "Assistant Professor (Selection Grade)", e: "Teaching: 22 years" },
                { n: "Dr. Suresha C.", u: "https://rvce.edu.in/department/eee/dr-suresh-c", d: "Assistant Professor (Selection Grade)", e: "Teaching: 20 years" },
                { n: "Dr. Ajay K.M.", u: "https://rvce.edu.in/department/eee/dr-ajay-k-m", d: "Assistant Professor (Selection Grade)", e: "Teaching: 13 Years" },
                { n: "Dr. Madhu B.R.", u: "https://rvce.edu.in/department/eee/dr-madhu-b-r", d: "Assistant Professor (Senior Scale)", e: "Teaching: 17 Years" },
                { n: "Dr. Sushmita Sarkar", u: "https://rvce.edu.in/department/eee/dr-sushmita-sarkar", d: "Assistant Professor (Senior Scale)", e: "Teaching: 14 Years" },
                { n: "Dr. Raja Vidya", u: "https://rvce.edu.in/department/eee/raja-vidya/", d: "Assistant Professor (Senior Scale)", e: "Teaching – 12.5 Years , Industry – 04 years" },
                { n: "Dr. Parth Sarathi Panigrahy", u: "https://rvce.edu.in/department/eee/dr-parth-sarathi-panigrahy/", d: "Assistant Professor", e: "8.8 years" },
                { n: "Dr. Pandry Narendra Rao", u: "https://rvce.edu.in/department/eee/dr-pandry-narendra-rao", d: "Assistant Professor", e: "Teaching & Research: 9 years , Industry : 3 Years" },
                { n: "Ashok G Gadavi", u: "https://rvce.edu.in/department/wp-content/uploads/2025/10/ASHOK-CV_0.pdf", d: "Chief Officer", e: "Industry: ~30+ Years" },
                { n: "Dr. Abhilash Krishna D G", u: "https://rvce.edu.in/department/eee/dr-abhilash-krishna-d-g", d: "Assistant Professor", e: "02 Years" }
            ],`;

code = code.replace(/ee:\s*\[[\s\S]*?\]\s*,/i, newEeeFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated EEE HOD, Faculty list, and direct profile URLs in script.js!');
