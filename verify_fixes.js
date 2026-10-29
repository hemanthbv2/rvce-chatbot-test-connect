// Quick verification test for all 10 fixes
const fs = require('fs');
const code = fs.readFileSync('./script.js', 'utf8');

let pass = 0, fail = 0;
function check(desc, condition) {
    if (condition) { console.log(`✅ PASS: ${desc}`); pass++; }
    else { console.log(`❌ FAIL: ${desc}`); fail++; }
}

// 1. Fees → Admission Circulars
check('Fees case links to admission-circulars', code.includes("case 'fees':") && code.includes("'https://rvce.edu.in/admission-circulars/'"));

// 2. Management Quota → Admission Circulars (no KB.admissions.fees)
const mgmtBlock = code.substring(code.indexOf("case 'management_quota':"), code.indexOf("case 'management_quota':") + 500);
check('Management quota no longer shows KB.admissions.fees', !mgmtBlock.includes('KB.admissions.fees'));
check('Management quota links to admission-circulars', mgmtBlock.includes('admission-circulars'));

// 3. Hostel Fee → Contact Us
check('Hostel deep dive says contact instead of fee amounts', code.includes('For hostel fee details, please contact the hostel administration'));

// 4. IQAC Intent
check('IQAC intent in QA array', code.includes("id:'iqac'"));
check('IQAC in title map', code.includes("iqac:'IQAC"));
check('IQAC case in responses', code.includes("case 'iqac':"));
check('IQAC links to rvce.edu.in/iqac/', code.includes("https://rvce.edu.in/iqac/"));

// 5. AIML HOD → Dr. Deepamala N
check('AIML HOD is Dr. Deepamala N', code.includes('Dr. Deepamala N (Program Coordinator)'));
check('AIML HOD URL present', code.includes('https://rvce.edu.in/department/cse/dr_deepamala_n/'));

// 6. CSE AIML / DS / CY combined keywords
check('dept_aiml has cse aiml keyword', code.includes("'cse aiml'"));
check('dept_csds has cse ds keyword', code.includes("'cse ds'"));
check('dept_cscy has cse cy keyword', code.includes("'cse cy'"));
check('dept_aiml priority is 0.5', code.includes("id:'dept_aiml',p:0.5"));
check('dept_csds priority is 0.5', code.includes("id:'dept_csds',p:0.5"));
check('dept_cscy priority is 0.5', code.includes("id:'dept_cscy',p:0.5"));

// 7. Principal Department Info
check('Principal has IEM department', code.includes('Industrial Engineering & Management (IEM)'));
check('Principal link to #teaching', code.includes("https://rvce.edu.in/about-k_n_subramanya/#teaching"));
check('Principal email', code.includes('subramanyakn@rvce.edu.in'));

// 8. MoU keywords
check('MoU keywords include mous', code.includes("'mous'"));
check('MoU keywords include memorandum', code.includes("'memorandum'"));
check('MoU keywords include memorandum of understanding', code.includes("'memorandum of understanding'"));

// 9. Events search fix
check('Events keywords include event (singular)', code.includes("'event'"));
check('Events keywords include rvce events', code.includes("'rvce events'"));
check('Events response links to rvce.edu.in/events/', code.includes("https://rvce.edu.in/events/"));

// 10. Departments overview AIML update
check('Departments overview shows Program Coordinator for AIML', code.includes('AIML — Program Coordinator: Dr. Deepamala N'));

console.log(`\n--- Results: ${pass} passed, ${fail} failed ---`);
process.exit(fail > 0 ? 1 : 0);
