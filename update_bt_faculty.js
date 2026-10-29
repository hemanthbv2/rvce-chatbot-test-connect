const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newBtFacultyBlock = `bt: [
                { n: "Dr. Nagashree N Rao", u: "https://rvce.edu.in/department/biotechnology/dr_nagashree_n_rao/", d: "Professor and HoD", e: "27 Years" },
                { n: "Dr. Vidya Niranjan", u: "https://rvce.edu.in/department/biotechnology/dr_vidya_niranjan/", d: "Professor", e: "22 years" },
                { n: "Dr. G Vijaya Kumar", u: "https://rvce.edu.in/department/biotechnology/dr_g_vijaya_kumar/", d: "Associate Professor and Associate Dean (PG Studies)", e: "20 years" },
                { n: "Dr. A. H. Manjunatha Reddy", u: "https://rvce.edu.in/department/biotechnology/dr_a_h_manjunatha_reddy/", d: "Professor", e: "18 years" },
                { n: "Dr. Neeta Shivakumar", u: "https://rvce.edu.in/department/biotechnology/dr_neeta_shivakumar/", d: "Associate Professor", e: "16 years" },
                { n: "Dr. M Rajeswari", u: "https://rvce.edu.in/department/biotechnology/dr_m_rajeswari/", d: "Assistant Professor", e: "21 years" },
                { n: "Dr. Ajeet Kumar Srivastava", u: "https://rvce.edu.in/department/biotechnology/dr_ajeet_kumar_srivastava/", d: "Assistant Professor", e: "19 years" },
                { n: "Dr. Shivandappa", u: "https://rvce.edu.in/department/biotechnology/dr_shivandappa/", d: "Assistant Professor", e: "17 years" },
                { n: "Dr. S Narendra Kumar", u: "https://rvce.edu.in/department/biotechnology/dr_narendra_kumar_s/", d: "Assistant Professor", e: "15 years" },
                { n: "Dr. Praveen Kumar Gupta", u: "https://rvce.edu.in/department/biotechnology/dr_praveen_kumar_gupta/", d: "Assistant Professor", e: "15 years" },
                { n: "Dr. Trilok Chandran B", u: "https://rvce.edu.in/department/biotechnology/dr_trilok_chandran_b/", d: "Assistant Professor", e: "17 years" },
                { n: "Dr. H. Raju", u: "https://rvce.edu.in/department/biotechnology/dr_h_raju/", d: "Assistant Professor", e: "15 years" },
                { n: "Dr. Sumathra M", u: "https://rvce.edu.in/department/biotechnology/dr_sumathra_m/", d: "Assistant Professor", e: "13 years" },
                { n: "Dr. A V Narayan", u: "https://rvce.edu.in/department/biotechnology/dr_a_v_narayan/", d: "Associate Professor", e: "19 Years" },
                { n: "Dr. Ashwani Sharma", u: "https://rvce.edu.in/department/biotechnology/dr_ashwani_sharma/", d: "Assistant Professor", e: "19 Years" }
            ],`;

code = code.replace(/bt:\s*\[[\s\S]*?\]\s*,/i, newBtFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated Biotechnology (BT) faculty list in script.js!');
