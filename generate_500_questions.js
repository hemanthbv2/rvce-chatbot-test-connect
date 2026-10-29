const fs = require('fs');

const depts = ['CSE', 'ISE', 'AIML', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Biotech', 'Chemical', 'Aerospace', 'EIE', 'ETE', 'IEM', 'MCA', 'CSDS', 'CSCY'];
const deptSlang = ['cs', 'ise', 'aiml', 'ec', 'eee', 'mech', 'civil', 'bt', 'chem', 'aero', 'ei', 'ete', 'iem', 'mca', 'ds', 'cyber'];
const prefixes = [
    '', 'can you tell me ', 'please show me ', 'i want to know ', 'what is ', 'how about ',
    'pls give details of ', 'could u tell me ', 'whats the ', 'tell me ', 'give info on ',
    'hey chatbot ', 'sir please tell ', 'im curious about '
];
const suffixes = ['', ' ?', '??', ' please', ' urgent', ' for me', ' in rvce'];

const questionTemplates = [
    d => `placement stats for ${d}`,
    d => `highest package in ${d}`,
    d => `average salary of ${d} branch`,
    d => `how are placements in ${d}`,
    d => `${d} placement statistics 2026`,
    d => `${d} placement package 2025`,
    d => `who is HOD of ${d}`,
    d => `head of department ${d}`,
    d => `${d} department HOD name`,
    d => `faculty list in ${d}`,
    d => `professors in ${d} department`,
    d => `total intake for ${d}`,
    d => `how many seats in ${d}`,
    d => `is ${d} NBA accredited`,
    d => `${d} seat capacity`,
    () => `who is placement director`,
    () => `who is the placement officer`,
    () => `dean placement name`,
    () => `who is the principal`,
    () => `who is vice principal`,
    () => `who is dean academics`,
    () => `who is dean student affairs`,
    () => `who is dean research`,
    () => `what is management quota fee`,
    () => `fee structure for BE 2026`,
    () => `kcet cutoff for cse`,
    () => `comedk cutoff ranks`,
    () => `is rvce autonomous`,
    () => `is jee mains accepted for admission`,
    () => `hostel fee details`,
    () => `mess food menu`,
    () => `girls hostel facilities`,
    () => `boys hostel single room`,
    () => `dress code rules`,
    () => `anti ragging helpline number`,
    () => `college timings on saturday`,
    () => `what are the centres of excellence`,
    () => `tell me about cisco iot coe`,
    () => `innovation teams in rvce`,
    () => `ashwa racing team details`,
    () => `8th mile college fest`,
    () => `central library timings`,
    () => `sports ground and gym facilities`,
    () => `canteen food options`,
    () => `campus size and address`,
    () => `official website link`,
    () => `contact phone numbers`,
    () => `how to reach rvce by bus`,
    () => `nearest metro station`,
    () => `value for money roi of rvce`,
    () => `refund policy for fee cancellation`,
    () => `is parking available for students`,
    () => `addmissions procedure 2026`,
    () => `plakement statistics cse`,
    () => `who is princpal of rvce`,
    () => `fee structur for management quota`,
    () => `hostel mess food quality`,
    () => `what is cse`,
    () => `what is ise`,
    () => `tell me about mechanical engg`,
    () => `civil branch average package`,
    () => `biotech department intake`,
    () => `what is ece highest salary`,
    () => `eee placement report`
];

const generated = new Set();
let attempts = 0;

while (generated.size < 500 && attempts < 10000) {
    attempts++;
    const t = questionTemplates[Math.floor(Math.random() * questionTemplates.length)];
    const dept = Math.random() > 0.5 ? depts[Math.floor(Math.random() * depts.length)] : deptSlang[Math.floor(Math.random() * deptSlang.length)];
    const rawQ = typeof t === 'function' ? t(dept) : t;
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    let q = `${prefix}${rawQ}${suffix}`.trim();
    q = q.charAt(0).toUpperCase() + q.slice(1);
    generated.add(q);
}

const questionList = Array.from(generated);

// Format with 3 evaluation checkboxes per question:
// [ ] Correct  |  [ ] Wrong Answer  |  [ ] No Info
const txtContent = questionList.map((q, i) =>
    `${i + 1}. Query: "${q}"\n   [ ] Correct  |  [ ] Wrong Answer  |  [ ] No Info / Fallback\n`
).join('\n');

fs.writeFileSync('500_test_questions.txt', txtContent);

const mdContent = `# 500 Question Evaluation Checklist

Use this interactive checklist to evaluate each query response. Mark:
- **[x] Correct** if the bot gave the right answer.
- **[x] Wrong Answer** if it returned incorrect/mismatched data.
- **[x] No Info / Fallback** if it couldn't answer.

---

` + questionList.map((q, i) =>
    `### Question ${i + 1}\n**Query:** \`${q}\`  \n- [ ] ✅ Correct  \n- [ ] ❌ Wrong Answer  \n- [ ] ❓ No Info / Fallback\n`
).join('\n---\n\n');

fs.writeFileSync('500_test_checklist.md', mdContent);

console.log("Generated evaluation checklist with Correct / Wrong / No Info checkboxes!");
