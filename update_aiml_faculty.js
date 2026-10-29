const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

// 1. Update HOD for AIML in department object
code = code.replace(
    /n:\s*"AI & Machine Learning \(AIML\)"[\s\S]*?hod:\s*"To Be Appointed"/i,
    (match) => match.replace('hod: "To Be Appointed"', 'hod: "Dr. Deepamala N"')
);

// 2. Update AIML faculty list in KB.faculty.aiml
const newAimlFacultyBlock = `aiml: [
                { n: "Dr. Deepamala N", u: "https://rvce.edu.in/department/cse/dr-deepamala-n/", d: "Professor & Program Coordinator (HoD)", e: "15 years" },
                { n: "Dr. Vijayalakshmi M N", u: "https://rvce.edu.in/department/ai_ml/dr_vijayalakshmi_m_n/", d: "Associate Professor", e: "25 years" },
                { n: "Dr. S. Anupama Kumar", u: "https://rvce.edu.in/department/ai_ml/dr_s_anupama_kumar/", d: "Associate Professor", e: "25 years" },
                { n: "Dr. K.Viswavardhan Reddy", u: "https://rvce.edu.in/department/ai_ml/dr_k_vishwavardhan_reddy/", d: "Associate Professor", e: "11 Years" },
                { n: "Dr. Narasimha Swamy S", u: "https://rvce.edu.in/department/ai_ml/dr_narasimha_swamy_s/", d: "Associate Professor", e: "Teaching: 4 years" }
            ],`;

code = code.replace(/aiml:\s*\[[\s\S]*?\]\s*,/i, newAimlFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated AIML HOD and Faculty list in script.js!');
