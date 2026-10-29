const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newIseFacultyBlock = `is: [
                { n: "Dr. G. S. Mamatha", u: "https://rvce.edu.in/department/ise/dr_g_s_mamatha/", d: "Professor and HoD", e: "20 Years" },
                { n: "Dr. B. M. Sagar", u: "https://rvce.edu.in/department/ise/dr_b_m_sagar/", d: "Professor & Dean Student Affairs", e: "21 Years" },
                { n: "Dr Ashwini K. B.", u: "https://rvce.edu.in/department/ise/dr_ashwini_k_b/", d: "Associate Professor", e: "17 years" },
                { n: "Dr Vanishree K.", u: "https://rvce.edu.in/department/ise/dr_vanishree_k/", d: "Associate Professor", e: "16 years" },
                { n: "Dr Merin Meleet", u: "https://rvce.edu.in/department/ise/dr_merin_meleet/", d: "Associate Professor", e: "17 years" },
                { n: "Dr S. G. Raghavendra Prasad", u: "https://rvce.edu.in/department/ise/s_g_raghavendra_prasad/", d: "Assistant Professor", e: "20 Years" },
                { n: "Dr Rekha B. S.", u: "https://rvce.edu.in/department/ise/rekha_b_s/", d: "Assistant Professor", e: "15 years" },
                { n: "Dr Swetha S.", u: "https://rvce.edu.in/department/ise/swetha_s/", d: "Assistant Professor", e: "13 years" },
                { n: "B K Srinivas", u: "https://rvce.edu.in/department/ise/b_k_srinivas/", d: "Assistant Professor", e: "11 years" },
                { n: "Dr Sushmitha N.", u: "https://rvce.edu.in/department/ise/sushmitha_n/", d: "Assistant Professor", e: "17 years" },
                { n: "Chethana R", u: "https://rvce.edu.in/department/ise/chethana-r/", d: "Assistant Professor", e: "Not specified" },
                { n: "Dr Kavitha S. N.", u: "https://rvce.edu.in/department/ise/dr_kavitha_s_n/", d: "Associate Professor", e: "17Years" },
                { n: "Dr Rashmi R", u: "https://rvce.edu.in/department/ise/rashmi_r/", d: "Assistant Professor", e: "18 years" },
                { n: "Dr Anala M. R.", u: "https://rvce.edu.in/department/ise/dr_anala_m_r/", d: "Professor", e: "20 years" },
                { n: "Dr Padmashree T", u: "https://rvce.edu.in/department/ise/dr_padmashree_t/", d: "Associate Professor", e: "17 years" },
                { n: "Dr Poornima Kulkarni", u: "https://rvce.edu.in/department/ise/poornima_kulkarni/", d: "Assistant Professor", e: "10 Years" }
            ],`;

code = code.replace(/is:\s*\[[\s\S]*?\]\s*,/i, newIseFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated ISE Faculty list in script.js!');
