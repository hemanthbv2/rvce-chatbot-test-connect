const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Clean up QA duplicate entries
// We see multiple blocks of dress_code, anti_ragging, etc.
// Let's just find the whole QA array start and end and rewrite the content of the array carefully.

const qaStart = code.indexOf('const QA = [') + 'const QA = ['.length;
const qaEnd = code.indexOf('];', qaStart);

let newQAContent = `
    {k:['hi','hello','hey','hii','hola','good morning','good evening','good afternoon','namaste','yo','sup','howdy','wassup'],id:'greet',p:0},
    {k:['bye','goodbye','thank you','thanks','thats all','see you','cya','take care','ok bye','okay bye','good night','tata'],id:'bye',p:0},
    {k:['hostel','hostels','accommodation','dorm','dormitory','boys hostel','girls hostel','hostel fee','hostel room','single room','shared room','hostel mess','staying','where to stay','stay at rvce'],id:'hostels',p:1},
    {k:['transport','how to reach','bmtc','bus route','kengeri metro','commute to rvce','distance from','reach rvce','reach the college','how to get there','travel to rvce'],id:'transport',p:1},
    {k:['wifi','internet','wi fi','connectivity','broadband','net access'],id:'wifi',p:1},
    {k:['canteen','food','mess food','eat','dining','cafeteria','food court','what to eat','lunch','breakfast','snacks'],id:'food',p:1},
    {k:['exam','exams','examination','examinations','semester exam','end semester','internal','assessment','cie','end sem','mid sem','exam pattern','question paper','question papers'],id:'exam',p:1},
    {k:['lateral','lateral entry','diploma holder','dcet'],id:'lateral',p:1},
    {k:['nri','international student','foreign student','overseas','ciwg','pio','oci'],id:'nri',p:1},
    {k:['scholarship','financial aid','stipend','merit scholarship'],id:'scholarships',p:1},
    {k:['jee','jee mains','jee main','jee accepted','jee score'],id:'jee',p:1},
    {k:['kcet','comedk','comed k'],id:'examTypes',p:1},
    {k:['management quota','management seat','direct admission','donation seat'],id:'management_quota',p:1},
    {k:['cutoff','cut off','closing rank','kcet rank','comedk cutoff'],id:'cutoffs',p:1},
    {k:['fee','fees','tuition','fee structure','semester fee','total cost','how much cost','how much does it cost'],id:'fees',p:1},
    {k:['refund','fee refund','cancellation','cancel admission','get money back','refund policy','aicte refund'],id:'refund_policy',p:1},
    {k:['syllabus','1st semester syllabus','1st sem syllabus','first semester syllabus','scheme','first year subjects','1st year syllabus','what are we studying'],id:'syllabus_1st_sem',p:0.5},
    {k:['innovation team','formula student','uav','ashwa','chimera','jatayu','astra robotics','antariksh','student projects','project teams'],id:'innovationTeams',p:1},
    {k:['cultural','culture','cultural life','college culture','music club','dance club','theatre','drama','tedx','tedxrvce','rotaract','fest','8th mile','eighth mile','annual fest','college fest','events','college events','cultural events','cultural activities'],id:'culturalLife',p:1},
    {k:['vision','mission','motto'],id:'vision',p:1},
    {k:['principal','principal name','who is principal','head of institution','director of rvce','who is the principal','about principal','tell me about principal'],id:'principal',p:1},
    {k:['hod cs','hod cse','head of department cs','head of department cse','cs hod','cse hod','who is the hod of cse','hod for cse','hod of cse'],id:'hod_cs',p:0.5},
    {k:['ranking','nirf','iirf','college ranking','where does rvce rank','ranked','best college'],id:'ranking',p:1},
    {k:['accreditation','naac','nba','naac grade'],id:'accreditation',p:1},
    {k:['timing','timings','working hours','college hours','college time','what time','opening time','closing time','open close'],id:'timings',p:1},
    {k:['trust','rsst','rvei','parent organization','who manages'],id:'trust',p:1},
    {k:['research','patent','patents','innovation centre','centre of excellence','research centre','grants','funding','research at rvce'],id:'research',p:1},
    {k:['mca','master of computer application','mca dept','mca department'],id:'mca',p:1},
    {k:['phd','doctoral','doctorate','research program','doctor degree'],id:'phd',p:1},
    {k:['vtu','visvesvaraya','affiliated university','university affiliation'],id:'vtu',p:1},
    {k:['seat','seats','total seats','intake','how many students','total students','student count','student strength','intake capacity'],id:'intake',p:0.5},
    {k:['library','central library','books','reading room','e library','digital library'],id:'library',p:0.3},
    {k:['sports','cricket','football','basketball','volleyball','athletics','gym','gymnatorium','sports complex','games'],id:'sports',p:1},
    {k:['autonomous','autonomy','own syllabus','own exam'],id:'autonomous',p:1},
    {k:['stat','stats','statistic','statistics','number','numbers','figure','figures','data','how many'],id:'stats_disambiguation',p:0.4},
    {k:['computer science','cse','cs department','computer science engineering','cse department'],id:'dept_cs',p:1},
    {k:['artificial intelligence','aiml','ai ml','machine learning','ai department','ai branch'],id:'dept_aiml',p:1},
    {k:['electronics and communication','ece','ec department','ece department'],id:'dept_ec',p:1},
    {k:['mechanical engineering','me department','mech','mech department','mechanical'],id:'dept_me',p:1},
    {k:['civil engineering','cv department','civil department','civil'],id:'dept_cv',p:1},
    {k:['electrical','eee','ee department','eee department','electrical engineering'],id:'dept_ee',p:1},
    {k:['aerospace','ae department','aero','aero department','aeronautical','aerospace engineering'],id:'dept_ae',p:1},
    {k:['biotech','bt','biotechnology','bio technology','bt department'],id:'dept_bt',p:1},
    {k:['chemical engineering','ch department','chemical engg','che'],id:'dept_ch',p:1},
    {k:['information science','ise','is department','ise department'],id:'dept_is',p:1},
    {k:['data science','csds','cs data science','csds department'],id:'dept_csds',p:1},
    {k:['cyber security','cscy','cs cyber security','cscy department'],id:'dept_cscy',p:1},
    {k:['telecom','ete','telecommunication','ete department'],id:'dept_et',p:1},
    {k:['instrumentation','eie','ei department','eie department'],id:'dept_ei',p:1},
    {k:['industrial engineering','iem','iem department','industrial management'],id:'dept_im',p:1},
    {k:['placement','placements','placed','salary','package','lpa','ctc','highest package','average salary','recruit','hiring','companies visit','which companies','recruiters','job','jobs','placement details'],id:'placements',p:0.5},
    {k:['admission','admissions','how to apply','how to join','entrance','eligibility','enroll','apply to rvce','join rvce','get into rvce','admission process','how to get admission','ug adm','pg adm','ug b e'],id:'admissions',p:1.5},
    {k:['department','departments','branch','branches','stream','streams','course','courses','program','programmes','what courses','which branch','all branches','view programs'],id:'departments',p:2},
    {k:['ug','ug program','ug programs','undergraduate','undergrad','b e','be','btech','b tech','ug courses','b e flavors','b e course','b e courses','be courses'],id:'ugPrograms',p:1.5},
    {k:['pg','pg program','pg programs','postgraduate','postgrad','m tech','mtech','masters','pg courses'],id:'pgPrograms',p:1.5},
    {k:['facility','facilities','infrastructure','what facilities','amenities','all facilities'],id:'facilities',p:2},
    {k:['website','site','official website','rvce website','visit website'],id:'website',p:2},
    {k:['about','rvce','college','history','founded','established','overview','tell me about','know about','information about'],id:'about',p:3},
    {k:['campus life','student life','extracurricular','clubs','life at rvce','campus','student experience','college life'],id:'campusLife',p:1.5},
    {k:['dress code','uniform','what to wear','clothes allowed','is there a uniform','can i wear shorts','can i wear jeans','dress rules'],id:'dress_code',p:0.8},
    {k:['anti ragging','ragging','helpline','report ragging','ragging completely banned','bullied','harassed','ragging helpline'],id:'anti_ragging',p:0.8},
    {k:['contact','phone','email','address','location','where is rvce','map','direction','call','bengaluru','bangalore'],id:'contact',p:3},
    {k:['menu','main menu','options','help','start','what can you do','show menu'],id:'menu',p:3}
`;

code = code.substring(0, qaStart) + newQAContent + code.substring(qaEnd);

// 2. Fix getResponse switch cases
// Find the first occurrence of case 'fees': and replace the whole block until innovationTeams

const feesStart = code.indexOf("case 'fees':");
const innovationTeamsStart = code.indexOf("case 'innovationTeams':", feesStart);

let newCases = `case 'fees':
        r.text = T("Tuition fees depend on the admission quota:\\n• KCET: ~₹1.0L to ₹1.2L /yr\\n• COMEDK: ~₹2.5L to ₹3.0L /yr\\n• Management: ₹16L to ₹70L total",
            "Tuition fees depend on the admission quota:\\n• KCET: ~₹1,00,000 to ₹1,20,000 per year\\n• COMEDK: ~₹2,50,000 to ₹3,00,000 per year\\n• Management: ~₹16L to ₹70L total depending on branch.");
        r.buttons = [{l:'Admissions',a:'admissions',i:'🎓'}]; return r;
    case 'refund_policy':
        r.text = T("Refund policy? Strictly AICTE! 💸\\n• Before start: Full refund (-₹1k)\\n• After start: Only if seat filled\\n• Document retention is BANNED.",
            "The Fee Refund Policy follows AICTE Regulations:\\n• Before Course Start: Full refund minus a max ₹1,000 processing fee.\\n• After Course Start: Refundable only if the vacated seat is filled.\\n• Original Docs: Institutions cannot retain original certificates.");
        return r;
    case 'syllabus_1st_sem':
        r.text = T("1st Year Syllabus (VTU 2022 Scheme) 📚\\nPhysics & Chemistry cycles apply! Subjects include Math, Electronics, C-Programming.",
            "The 1st Year B.E. Syllabus follows the VTU 2022 Scheme. Students are divided into Physics and Chemistry Cycles.\\n\\nKey subjects: Engineering Mathematics, Basic Electronics/Electrical, Programming in C.");
        r.buttons = [{l:'Download Syllabus PDF',u:'https://rvce.edu.in/sites/default/files/FIRST-YEAR-SYLLABUS-BOOK-2022-SCHEMEFORPRINT.pdf',i:'📑'}]; return r;
    case 'hod_cs':
        r.text = T("Dr. Shanta Rangaswamy leads CSE! 👨‍🏫","The Head of Department for Computer Science & Engineering (CSE) is Dr. Shanta Rangaswamy.");
        r.buttons = [{l:'CSE Faculty',u:dUrl('cs'),i:'🌐'}]; return r;
    case 'dress_code':
        r.text = T("Stay sharp! 👔 No shorts/ripped jeans allowed. Casuals okay but lab uniforms (Khakis/Aprons) mandatory!","As a VTU affiliated college, RVCE ensures professional decorum.\\n\\n• Permitted: Clean, neat casual wear.\\n• Prohibited: Shorts, ripped jeans, revealing tops.\\n• Labs: Closed-toe shoes and safety uniforms mandatory.");
        return r;
    case 'anti_ragging':
        r.text = T("Ragging is a crime! 🛑 Total ban at RVCE! Contact the squad or dial 1800-180-5522 🚨",
            "RVCE strictly follows UGC Regulations on Curbing Ragging. It is a criminal offense.\\n\\n🚨 National 24/7 Helpline: 1800-180-5522\\nEmail: helpline@antiragging.in.");
        r.buttons = [{l:'Portal',u:'https://www.antiragging.in/',i:'🌐'}]; return r;
    `;

code = code.substring(0, feesStart) + newCases + code.substring(innovationTeamsStart);

// 3. Remove duplicate case statements further down (if they still exist)
// I need to find the specific blocks for dress_code, anti_ragging, hod_cs, syllabus_1st_sem and remove them.

const duplicateSyllabus = code.indexOf("case 'syllabus_1st_sem':", code.indexOf('case ' + 'innovationTeams':'));
if (duplicateSyllabus !== -1) {
    const endOfDuplicates = code.indexOf("case 'exam':", duplicateSyllabus);
    if (endOfDuplicates !== -1) {
        code = code.substring(0, duplicateSyllabus) + code.substring(endOfDuplicates);
    }
}

fs.writeFileSync('script.js', code);
console.log("Successfully fixed script.js and removed duplicates.");
