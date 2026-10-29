const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newEceFacultyBlock = `ec: [
                { n: "Dr. H. V. Ravish Aradhya", u: "https://rvce.edu.in/department/ece/dr-h-v-ravish-aradhya/", d: "Professor & HoD", e: "34 years" },
                { n: "Dr. K. S. Geetha", u: "https://rvce.edu.in/department/ece/dr-k-s-geetha/", d: "Professor and Vice-Principal", e: "34 years" },
                { n: "Dr. M. Uttara Kumari", u: "https://rvce.edu.in/department/ece/dr-m-uttara-kumari/", d: "Professor & Dean (R&D)", e: "22 years" },
                { n: "Dr. Padmaja. K. V", u: "https://rvce.edu.in/department/ece/dr-padmaja-k-v/", d: "Professor", e: "33 yrs" },
                { n: "Dr. Prasanna Kumar. S. C", u: "https://rvce.edu.in/department/ece/dr-prasanna-kumar-s-c/", d: "Professor", e: "25 yrs" },
                { n: "Dr. Ramesh K B", u: "https://rvce.edu.in/department/ece/dr_ramesh_k_b/", d: "Associate Professor", e: "Not specified" },
                { n: "Dr. Anand Jatti", u: "https://rvce.edu.in/department/ece/dr-anand-jatti/", d: "Professor", e: "22 yrs" },
                { n: "Dr. Veena Devi", u: "https://rvce.edu.in/department/ece/dr-veena-devi/", d: "Associate Professor", e: "20 years" },
                { n: "Dr. Abhay A. Deshpande", u: "https://rvce.edu.in/department/ece/dr-abhay-a-deshpande/", d: "Associate Professor", e: "8 years" },
                { n: "Dr. Mahesh A", u: "https://rvce.edu.in/department/ece/dr-mahesh-a/", d: "Associate Professor", e: "16 years" },
                { n: "Dr. Shilpa D. R.", u: "https://rvce.edu.in/department/ece/dr-shilpa-d-r/", d: "Associate Professor & Assoc. Dean(P&T)", e: "10 years" },
                { n: "Dr. Govinda Raju M", u: "https://rvce.edu.in/department/ece/dr-govinda-raju-m/", d: "Associate Professor", e: "15 Years" },
                { n: "Dr. Chethana G", u: "https://rvce.edu.in/department/ece/dr-chethana-g/", d: "Assistant Professor", e: "12 years" },
                { n: "Dr. Sujata D. Badiger", u: "https://rvce.edu.in/department/ece/dr-sujata-d-badiger/", d: "Assistant Professor", e: "20 Years" },
                { n: "Dr. Sujatha Hiremath", u: "https://rvce.edu.in/department/ece/dr-sujatha-hiremath/", d: "Assistant Professor", e: "20 years" },
                { n: "Dr. Rohini S. Hallikar", u: "https://rvce.edu.in/department/ece/dr-rohini-s-hallikar/", d: "Assistant Professor", e: "20 Years" },
                { n: "Dr. Tabitha Janumala", u: "https://rvce.edu.in/department/ece/dr-tabitha-janumala/", d: "Associate Professor", e: "17 yrs" },
                { n: "Dr. Deepashree Devaraj", u: "https://rvce.edu.in/department/ece/dr-deepashree-devaraj/", d: "Assistant Professor (Selection Grade)", e: "Not specified" },
                { n: "Dr. Rajani Katiyar", u: "https://rvce.edu.in/department/ece/dr-rajani-katiyar/", d: "Assistant Professor", e: "Teaching: 20 Years" },
                { n: "Dr. K. A. Nethravathi", u: "https://rvce.edu.in/department/ece/dr-k-a-nethravathi/", d: "Assistant Professor (Selection Grade)", e: "Teaching: 18 Years." },
                { n: "Dr. Harsha H", u: "https://rvce.edu.in/department/ece/dr-harsha/", d: "Assistant Professor", e: "Teaching: 17 Years." },
                { n: "Dr. Ramavenkateswaran N", u: "https://rvce.edu.in/department/ece/dr-ramavenkateswaran-n/", d: "Assistant Professor (Selection Grade)", e: "Teaching: 16 Years Industry: 2 Years" },
                { n: "Dr. Roopa J", u: "https://rvce.edu.in/department/ece/dr-roopa-j/", d: "Assistant Professor", e: "Teaching: 16 Years , Industry: 2 Years , Research: 10 Years" },
                { n: "P Narashimaraja", u: "https://rvce.edu.in/department/ece/p-narashimaraja/", d: "Assistant Professor", e: "Teaching: 18 Years" },
                { n: "Dr. Veena Divya Krishnappa", u: "https://rvce.edu.in/department/ece/veena-divya-krishnappa/", d: "Assistant Professor", e: "Teaching: 16 yrs; Industry: 02 yrs; Research: 09 yrs" },
                { n: "Dr. Sowmya Nag K", u: "https://rvce.edu.in/department/ece/dr-sowmya-nag-k/", d: "Assistant Professor", e: "Not specified" },
                { n: "Rajithkumar B K", u: "https://rvce.edu.in/department/ece/rajithkumar-b-k/", d: "Assistant Professor", e: "Not specified" },
                { n: "Ravishankar Holla", u: "https://rvce.edu.in/department/ece/ravishankar-holla/", d: "Assistant Professor", e: "Not specified" },
                { n: "Sujata Priyambada Mishra", u: "https://rvce.edu.in/department/ece/sujata-priyambada-mishra/", d: "Assistant Professor", e: "Not specified" },
                { n: "Neeta B Malvi", u: "https://rvce.edu.in/department/ece/neeta-b-malvi", d: "Assistant Professor", e: "Not specified" },
                { n: "Deepika P", u: "https://rvce.edu.in/department/ece/deepika-p/", d: "Assistant Professor", e: "Not specified" },
                { n: "Shwetha Baliga", u: "https://rvce.edu.in/department/ece/shwetha-baliga/", d: "Assistant Professor", e: "Not specified" },
                { n: "Anusha L S", u: "https://rvce.edu.in/department/ece/anusha-l-s/", d: "Assistant Professor", e: "Not specified" },
                { n: "S. Praveen", u: "https://rvce.edu.in/department/ece/s-praveen/", d: "Assistant Professor", e: "Not specified" },
                { n: "Mrs Pratibha K", u: "https://rvce.edu.in/department/ece/pratibha-k/", d: "Assistant Professor", e: "Not specified" },
                { n: "Ms Sindhu Rajendran", u: "https://rvce.edu.in/department/ece/r-sindhu-rajendran/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Avik Banerjee", u: "https://rvce.edu.in/department/ece/dr-avik-banerjee/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. S Ravi Shankar", u: "https://rvce.edu.in/department/ece/dr-s-ravi-shankar/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Usharani K R", u: "https://rvce.edu.in/department/ece/dr-usharani-k-r/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Kiran V", u: "https://rvce.edu.in/department/ece/dr-kiran-v/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Jayanthi P N", u: "https://rvce.edu.in/department/ece/dr-jayanthi-p-n/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Kariyappa B S", u: "https://rvce.edu.in/department/ece/dr-kariyappa-b-s/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Shylashree N", u: "https://rvce.edu.in/department/ece/dr-shylashree-n/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Srividya P", u: "https://rvce.edu.in/department/ece/dr-srividya-p/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Sowmya K B", u: "https://rvce.edu.in/department/ece/dr-sowmya-k-b/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr. Eleena Mohapatra", u: "https://rvce.edu.in/department/ece/dr-eleena-mohapatra/", d: "Assistant Professor", e: "Not specified" }
            ],`;

code = code.replace(/ec:\s*\[[\s\S]*?\]\s*,/i, newEceFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated ECE Faculty list in script.js!');
