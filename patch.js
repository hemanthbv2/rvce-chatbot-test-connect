const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Replace Fees case block with intent injections
let getResponseStart = code.indexOf(`case 'fees':`);
let replaceBlock = `case 'fees':
                return "Tuition fees depend on the admission quota:<br>• <strong>KCET:</strong> ~₹1,00,000 to ₹1,20,000 per year<br>• <strong>COMEDK:</strong> ~₹2,50,000 to ₹3,00,000 per year<br>• <strong>Management:</strong> Can exceed ₹10L depending on branch.<br><em>Note: Hostels cost an additional ₹1.1L - ₹1.3L per year.</em>";
            case 'refund_policy':
                return "The Fee Refund Policy strictly follows <strong>AICTE Regulations</strong>.<br><br>• <strong>Before Course Start:</strong> Full refund minus a processing fee (max ₹1,000).<br>• <strong>After Course Start:</strong> Refundable only if the vacated seat is filled, minus proportionate deductions.<br>• <strong>Original Docs:</strong> By AICTE mandate, colleges cannot retain original certificates.<br><br>Consult the RVCE Admissions Office directly for your specific cut-off dates.";
            case 'syllabus_1st_sem':
                return "The <strong>1st Year B.E. Syllabus</strong> follows the VTU 2022 Scheme.<br><br>Students are divided into Physics and Chemistry Cycles. Key subjects include:<br>• Engineering Mathematics<br>• Basic Electronics/Electrical<br>• Programming in C<br><br>🔗 <a href='https://rvce.edu.in/sites/default/files/FIRST-YEAR-SYLLABUS-BOOK-2022-SCHEMEFORPRINT.pdf' target='_blank'>Download Official Syllabus PDF</a>";
            case 'hod_cs':
                return "The Head of Department for <strong>Computer Science and Engineering (CSE)</strong> is <strong>Dr. Shanta Rangaswamy</strong>.";
            case 'dress_code':
                return "As an institution affiliated with <strong>VTU</strong>, RVCE enforces a dress code that aligns with professional and academic decorum.<br><br>• <strong>General Wear:</strong> Clean, neat, and non-revealing casual wear is permitted (Jeans, T-shirts).<br>• <strong>Prohibited:</strong> Shorts, ripped jeans, revealing tops, or clothing featuring offensive language/imagery are strictly banned.<br>• <strong>Labs/Workshops:</strong> Specific departments require closed-toe shoes and safety uniforms (Khakis/Aprons) mandatory for entry.<br><br>Formal attire is required during presentations and interviews.";
            case 'anti_ragging':
                return "RVCE strictly adheres to the <strong>UGC Regulations on Curbing the Menace of Ragging (2009)</strong>. Ragging is a criminal offense.<br><br>🚨 <strong>National 24x7 Anti-Ragging Helpline:</strong> 1800-180-5522<br>Email: helpline@antiragging.in<br><br>The campus has an active Anti-Ragging Committee and Squad. Any form of physical or psychological harassment will result in immediate rustication and police action.";`;

let getResponseEnd = code.indexOf(`case 'innovationTeams':`, getResponseStart);
code = code.substring(0, getResponseStart) + replaceBlock + "\n            " + code.substring(getResponseEnd);

// Inject Keyword Mappings
let kbInjection = `    {k:['refund','fee refund','cancellation','cancel admission','get money back','refund policy','aicte refund'],id:'refund_policy',p:1},
    {k:['syllabus','1st semester syllabus','1st sem syllabus','first semester syllabus','scheme','first year subjects','1st year syllabus','what are we studying'],id:'syllabus_1st_sem',p:0.5},
    {k:['hod cs','hod cse','head of department cs','head of department cse','cs hod','cse hod','who is the hod of cse','hod for cse','hod of cse'],id:'hod_cs',p:0.5},
    {k:['dress code','uniform','what to wear','clothes allowed','is there a uniform','can i wear shorts','can i wear jeans','dress rules'],id:'dress_code',p:0.8},
    {k:['anti ragging','ragging','helpline','report ragging','ragging completely banned','bullied','harassed','ragging helpline'],id:'anti_ragging',p:0.8},
    // End Official Additions
`;
let kbStart = code.indexOf(`{k:['contact','phone'`);
code = code.substring(0, kbStart) + kbInjection + code.substring(kbStart);

fs.writeFileSync('script.js', code);
console.log("Successfully injected official data.");
