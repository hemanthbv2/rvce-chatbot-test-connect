const fs = require('fs');

let scriptStr = fs.readFileSync('script.js', 'utf8');

scriptStr = scriptStr.replace('function getResponse(id) {', `
    global.test_KB = KB;
    global.test_QA = QA;
    global.test_classifyIntent = classifyIntent;
    global.test_getResponse = getResponse;
    global.test_checkModeration = checkModeration;
    function getResponse(id) {
`);

scriptStr = scriptStr.replace(/const currentSessionId/g, 'var currentSessionId');
scriptStr = scriptStr.replace(/const getSID/g, 'var getSID');

let fullScript = `
function createStub() {
    return {
        addEventListener: () => {},
        classList: {add:()=>{}, remove:()=>{}, toggle:()=>{}, contains:()=>false},
        setAttribute:()=>{},
        focus:()=>{},
        querySelectorAll: () => [],
        querySelector: () => ({}),
        appendChild: () => {},
        getContext: () => new Proxy({}, { get: () => () => {} })
    };
}
const document = { 
    readyState: 'complete', 
    addEventListener: () => {},
    getElementById: createStub,
    createElement: createStub,
    body: createStub(),
    querySelector: createStub,
    hidden: false
};
const window = { 
    addEventListener:()=>{},
    getSelection: () => ({ toString: () => '' }),
    innerWidth: 1024,
    innerHeight: 768,
    location: { hostname: 'localhost', href: 'http://localhost' }
};
const localStorage = { getItem:()=>null, setItem:()=>{} };
const sessionStorage = { getItem:()=>null, setItem:()=>{} };
const clearTimeout = () => {};
const setTimeout = (fn) => { fn(); };
const navigator = { userAgent: 'test' };
const MutationObserver = class { observe(){} };
const addEventListener = () => {};
const innerWidth = 1024;
const innerHeight = 768;
const requestAnimationFrame = () => {};

${scriptStr}

startRVCEChatbot();
`;

// Evaluate script in context
eval(fullScript);

let total = 0;

    let act = global.test_classifyIntent("I want to know the fee for management seat");
    console.log("act:", act);
    console.log("act.id:", act ? act.id : "null");
    let mod = global.test_checkModeration("I want to know the fee for management seat");
    console.log("mod:", mod);
    process.exit(0);

let results = [];
let actualIntentInfo = null;

function runTest(input, expectedIntent, expectedContent) {
    total++;
    let mod = global.test_checkModeration(input);
    let actualIntent = null;
    
    if (mod) {
        actualIntent = mod.type;
    } else {
        actualIntentInfo = global.test_classifyIntent(input);
        actualIntent = actualIntentInfo ? (actualIntentInfo.type === 'multi' ? 'multi' : actualIntentInfo.id) : null;
        if (actualIntentInfo && actualIntentInfo.type === 'multi') {
            global.SESSION.lastIntent = actualIntentInfo.ids[0];
        } else if (actualIntentInfo) {
            global.SESSION.lastIntent = actualIntentInfo.id;
        }
    }
    
    let passedIntent = actualIntent === expectedIntent || (expectedIntent === null);
    
    if (passedIntent) {
        passed++;
        results.push(`| ${input} | ✅ Passed | Intent: ${actualIntent} |`);
    } else {
        results.push(`| ${input} | ❌ Failed | Expected ${expectedIntent} got ${actualIntent}. |`);
    }
}

// Generate 100 new test cases
const testCases = [
    // Admissions & Requirements
    ['I want to know the fee for management seat', 'fees', ''],
    ['What is the fee for comedk?', 'fees', ''],
    ['Tell me the kcet fees', 'fees', ''],
    ['What are the fee details?', 'fees', ''],
    ['Any idea about lateral entry admission?', 'lateral', ''],
    ['Admission for nri students', 'nri', ''],
    ['Does the college offer scholarships?', 'scholarships', ''],
    ['Can I get admission through jee mains?', 'jee', ''],
    ['What is the cutoff for computer science?', 'cutoffs', ''],
    ['Show me the closing rank for ECE', 'cutoffs', ''],
    
    // Placements
    ['What is the highest package in ISE?', 'plcmt_is', ''],
    ['Placement statistics of RVCE', 'placements', ''],
    ['What is the placement year 2027 going to look like?', 'placements_future', ''],
    ['Who are the top recruiters?', 'top_companies', ''],
    ['Who is the dean of placements?', 'placement_director', ''],
    ['Tell me about the placement record of mechanical', 'plcmt_me', ''],
    ['Salary of biotechnology', 'plcmt_bt', ''],
    ['What is the average package for aerospace?', 'plcmt_ae', ''],
    ['Placement for cyber security', 'plcmt_cscy', ''],
    ['What is the highest package offered in EEE?', 'plcmt_ee', ''],

    // Departments & Courses
    ['Tell me about computer science department', 'dept_cs', ''],
    ['Information on ISE', 'dept_is', ''],
    ['What is ECE?', 'dept_ec', ''],
    ['I want to know about artificial intelligence', 'dept_aiml', ''],
    ['Tell me about civil engineering', 'dept_cv', ''],
    ['Details of telecom dept', 'dept_et', ''],
    ['Information about chemical engineering', 'dept_ch', ''],
    ['Is there a data science course?', 'dept_csds', ''],
    ['Is biotechnology a good branch?', 'dept_bt', ''],
    ['What is instrumentation technology?', 'dept_ei', ''],

    // HODs
    ['Who is the head of computer science?', 'hod_cs', ''],
    ['Who is the hod of ec?', 'hod_ec', ''],
    ['Head of the me department', 'hod_me', ''],
    ['Hod of civil', 'hod_cv', ''],
    ['Who is the head of aerospace?', 'hod_ae', ''],
    ['Who is the hod of aiml?', 'hod_aiml', ''],
    ['Hod of biotechnology', 'hod_bt', ''],
    ['Head of chemical engineering', 'hod_ch', ''],
    ['Who is the head of electrical?', 'hod_ee', ''],
    ['Hod of telecom', 'hod_et', ''],

    // Intakes
    ['What is the intake of computer science?', 'intake_cs', ''],
    ['Seats in ece', 'intake_ec', ''],
    ['How many seats in mechanical engineering?', 'intake_me', ''],
    ['Intake for civil', 'intake_cv', ''],
    ['Total seats in aerospace', 'intake_ae', ''],
    ['Intake of aiml', 'intake_aiml', ''],
    ['Seats in biotechnology', 'intake_bt', ''],
    ['Intake for chemical engineering', 'intake_ch', ''],
    ['How many seats in eee?', 'intake_ee', ''],
    ['Intake of telecom', 'intake_et', ''],

    // Amenities & Campus
    ['How is the hostel accommodation?', 'hostels', ''],
    ['Is the mess food good?', 'food', ''],
    ['How to reach the campus?', 'transport', ''],
    ['Is wi fi available on campus?', 'wifi', ''],
    ['Are there sports facilities?', 'sports', ''],
    ['Information about the library', 'library', ''],
    ['Tell me about the health center', 'health_centre', ''],
    ['Are there any atms?', 'facilities', ''],
    ['Does the college have a canteen?', 'food', ''],
    ['Are girls hostels safe?', 'girls_hostel', ''],

    // Student Life & Culture
    ['What is the college culture like?', 'culturalLife', ''],
    ['What is the dress code in rvce?', 'dress_code', ''],
    ['What are the clubs in rvce?', 'campusLife', ''],
    ['Tell me about team ashwa', 'team_ashwa', ''],
    ['What does team antariksh do?', 'team_antariksh', ''],
    ['Is there a robotics team?', 'astra_robotics', ''],
    ['Tell me about the ncc', 'ncc', ''],
    ['Does rvce have nss?', 'nss', ''],
    ['What is the alumni network like?', 'alumni', ''],
    ['Tell me about entrepreneurship in rvce', 'startup', ''],

    // Academics & Administration
    ['Who is the principal of the college?', 'principal', ''],
    ['Who is the vice principal?', 'vice_principal', ''],
    ['Show me the academic calendar', 'calendar_events', ''],
    ['What is the ranking of rvce?', 'ranking', ''],
    ['Is rvce naac accredited?', 'accreditation', ''],
    ['What are the college timings?', 'timings', ''],
    ['Who runs the trust?', 'trust', ''],
    ['What are the coes?', 'centres_of_excellence', ''],
    ['Tell me about the 5g coe', 'coe_5g', ''],
    ['What is the attendance requirement?', 'attendance', ''],

    // Others
    ['What are the pg programs?', 'admissions', ''],
    ['What are the ug programs?', 'admissions', ''],
    ['Show me the 1st sem syllabus', 'syllabus_1st_sem', ''],
    ['Tell me about the indo german program', 'germany_program', ''],
    ['What are the professional societies?', 'professional_societies', ''],
    ['Any upcoming workshops?', 'upcoming_events', ''],
    ['What is the refund policy?', 'refund_policy', ''],
    ['Where can I find circulars?', 'circulars', ''],
    ['Give me the official website', 'website', ''],
    ['Tell me about rsst', 'about_rvei', ''],

    // Moderation (Negative tests)
    ['You are a bitch', 'abusive', ''],
    ['I want to kill myself', 'abusive', ''],
    ['Who is behind the new world order?', 'conspiracy', ''],
    ['I believe in qanon', 'conspiracy', ''],
    ['What is your home address?', 'private', ''],
    ['Show me the student marks', 'private', ''],
    ['Give me the password', 'private', ''],
    ['What is her instagram id?', 'private', ''],
    ['I want to smoke weed', 'abusive', ''],
    ['Aliens control the government', 'conspiracy', '']
];

for (let [q, i, c] of testCases) {
    runTest(q, i, c);
}

let artifactPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/9c145923-b128-46eb-954f-65de4d06453c/100_More_Questions_Report.md';
fs.writeFileSync(artifactPath, 
`# Chatbot 100 More Questions Test Report
Total Tests Run: ${total}
Tests Passed: ${passed}
Tests Failed: ${total - passed}

| User Input | Result | Details |
|---|---|---|
` + results.join('\n')
);
console.log('Passed ' + passed + '/' + total);
