const fs = require('fs');

let scriptStr = fs.readFileSync('script.js', 'utf8');

scriptStr = scriptStr.replace('function getResponse(id) {', `
    global.test_KB = KB;
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

try {
    eval(fullScript);
} catch (e) {
    console.error("Eval error:", e);
    process.exit(1);
}

console.log(global.test_classifyIntent("What is the highest package in CSE?")); process.exit(0); let passed = 0;
let total = 0;
let results = [];

function runTest(input, expectedIntent, expectedContent) {
    total++;
    global.SESSION = { history: [], navStack: [] };
    
    let actualIntentInfo = null;
    let actualIntent = null;
    let mod = global.test_checkModeration ? global.test_checkModeration(input) : {blocked: false};
    
    if (mod.blocked) {
        actualIntent = mod.type;
        actualIntentInfo = { type: 'exact', id: mod.type };
    } else {
        actualIntentInfo = global.test_classifyIntent(input);
        actualIntent = actualIntentInfo ? (actualIntentInfo.type === 'multi' ? 'multi' : actualIntentInfo.id) : null;
    }
    
    if (actualIntentInfo && !mod.blocked) {
        if (actualIntentInfo.type === 'multi') {
            global.SESSION.lastIntent = actualIntentInfo.ids[0];
        } else {
            global.SESSION.lastIntent = actualIntentInfo.id;
        }
        if (actualIntentInfo.year) global.SESSION.reqYear = actualIntentInfo.year;
    }
    
    let res = actualIntentInfo ? global.test_getResponse(actualIntent) : {text: ''};
    
    let passedIntent = actualIntent === expectedIntent || (expectedIntent === null);
    let passedContent = expectedContent ? res.text.includes(expectedContent) : true;
    
    if (passedIntent && passedContent) {
        passed++;
        results.push(`| ${input} | ✅ Passed | Intent: ${actualIntent} |`);
    } else {
        results.push(`| ${input} | ❌ Failed | Expected ${expectedIntent} got ${actualIntent}. ${!passedContent ? 'Missing content: '+expectedContent : ''} |`);
    }
}


const testCases = [
    // Admissions & Fees
    ['What is the fee for management quota?', 'fees', ''],
    ['How to get admission via comedk?', 'admissions', ''],
    ['What is the fee for KCET students?', 'fees', ''],
    ['What is the fee for COMEDK students?', 'fees', ''],
    ['What is the management quota fee for CSE?', 'fees', ''],
    ['What is the management quota fee for ECE?', 'fees', ''],
    ['I want to know about M.Tech admission', 'admissions', ''],
    ['What is the cutoff for CSE?', 'cutoffs', ''],
    ['What is the cutoff for ISE?', 'cutoffs', ''],
    ['What is the cutoff for ECE?', 'cutoffs', ''],
    ['What is the cutoff for Mechanical?', 'cutoffs', ''],
    ['What is the cutoff for Civil?', 'cutoffs', ''],
    ['What is the cutoff for Aerospace?', 'cutoffs', ''],
    ['What is the cutoff for AIML?', 'cutoffs', ''],
    ['What is the cutoff for Biotechnology?', 'cutoffs', ''],
    ['What is the cutoff for Chemical Engineering?', 'cutoffs', ''],
    ['What is the cutoff for EEE?', 'cutoffs', ''],
    ['What is the cutoff for EIE?', 'cutoffs', ''],
    ['What is the cutoff for ETE?', 'cutoffs', ''],
    ['What is the cutoff for IEM?', 'cutoffs', ''],

    // Placements
    ['What is the highest package in CSE?', 'plcmt_cs', ''],
    ['What is the highest package in ECE?', 'plcmt_ec', ''],
    ['What is the highest package in ISE?', 'plcmt_is', ''],
    ['What is the highest package in Mechanical?', 'plcmt_me', ''],
    ['What is the highest package in Civil?', 'plcmt_cv', ''],
    ['What is the highest package in Aerospace?', 'plcmt_ae', ''],
    ['What is the highest package in AIML?', 'plcmt_aiml', ''],
    ['What is the highest package in Biotechnology?', 'plcmt_bt', ''],
    ['What is the highest package in Chemical?', 'plcmt_ch', ''],
    ['What is the highest package in EEE?', 'plcmt_ee', ''],
    ['What is the highest package in EIE?', 'plcmt_ei', ''],
    ['What is the highest package in ETE?', 'plcmt_et', ''],
    ['What is the highest package in IEM?', 'plcmt_im', ''],
    ['What is the highest package in MCA?', 'plcmt_mca', ''],
    ['RVCE placement details', 'placements', ''],
    ['Who is the placement director?', 'placement_director', ''],

    // Faculty & HODs
    ['Who is the principal of RVCE?', 'principal', ''],
    ['Who is the HOD of CSE?', 'hod_cs', ''],
    ['Who is the HOD of ECE?', 'hod_ec', ''],
    ['Who is the HOD of Mechanical?', 'hod_me', ''],
    ['Who is the HOD of Civil?', 'hod_cv', ''],
    ['Who is the HOD of Aerospace?', 'hod_ae', ''],
    ['Who is the HOD of AIML?', 'hod_aiml', ''],
    ['Who is the HOD of Biotechnology?', 'hod_bt', ''],
    ['Who is the HOD of Chemical Engineering?', 'hod_ch', ''],
    ['Who is the HOD of EEE?', 'hod_ee', ''],
    ['Who is the HOD of EIE?', 'hod_ei', ''],
    ['Who is the HOD of ETE?', 'hod_et', ''],
    ['Who is the HOD of IEM?', 'hod_im', ''],
    ['Who is the HOD of MCA?', 'hod_mca', ''],

    // Intakes
    ['What is the intake for CSE?', 'intake_cs', ''],
    ['What is the intake for ISE?', 'intake_is', ''],
    ['What is the intake for ECE?', 'intake_ec', ''],
    ['What is the intake for Mechanical?', 'intake_me', ''],
    ['What is the intake for Civil?', 'intake_cv', ''],
    ['What is the intake for Aerospace?', 'intake_ae', ''],
    ['What is the intake for AIML?', 'intake_aiml', ''],
    ['What is the intake for Biotechnology?', 'intake_bt', ''],
    ['What is the intake for Chemical Engineering?', 'intake_ch', ''],
    ['What is the intake for EEE?', 'intake_ee', ''],
    ['What is the intake for EIE?', 'intake_ei', ''],
    ['What is the intake for ETE?', 'intake_et', ''],
    ['What is the intake for IEM?', 'intake_im', ''],
    ['What is the intake for MCA?', 'intake_mca', ''],

    // General & Amenities
    ['Is there a hostel facility?', 'hostels', ''],
    ['What is the address of RVCE?', 'contact', ''],
    ['Phone number of admission office', 'contact', ''],
    ['When was RVCE established?', 'about_rvce', ''],
    ['Is RVCE autonomous?', 'autonomous', ''],
    ['Tell me about clubs', 'campusLife', ''],
    ['Does RVCE have a gym?', 'sports', ''],
    ['Are there any scholarships available?', 'scholarships', ''],
    ['Do you offer MCA?', 'dept_mca', ''],
    ['What is the dress code?', 'dress_code', ''],
    ['Tell me about cultural fest', 'culturalLife', ''],
    ['What are the research centers?', 'research', ''],
    ['What are the bus routes?', 'transport', ''],
    ['How to reach RVCE from Majestic?', 'transport', ''],
    ['Is there a bank on campus?', 'facilities', ''],
    ['Where is the canteen?', 'food', ''],
    ['Does the college have medical facilities?', 'health_centre', ''],
    ['What is the grading system?', 'vtu', ''],
    ['What is the attendance policy?', 'attendance', ''],
    ['Are there any international exchange programs?', 'collaborations', ''],
    ['Tell me about entrepreneurship cell', 'startup', ''],
    ['What are the working hours?', 'timings', ''],
    ['How is the library?', 'library', ''],
    ['What is the wifi speed?', 'wifi', ''],
    ['Tell me about the alumni network', 'alumni', ''],
    ['Is ragging allowed?', 'anti_ragging', ''],
    
    // Safety / Content moderation
    ['Fuck you', 'abusive', ''],
    ['You are an idiot', 'abusive', ''],
    ['Illuminati is real', 'conspiracy', ''],
    ['What is the principal\'s personal phone number?', 'private', ''],
    ['I want to hack the system', 'abusive', ''],
    ['Tell me a dirty joke', 'abusive', ''],
    ['Earth is flat', 'conspiracy', ''],
    ['Vaccines have microchips', 'conspiracy', ''],
    ['What is your bank account number?', 'private', '']
];

for (let [q, i, c] of testCases) {
    runTest(q, i, c);
}

let artifactPath = 'C:/Users/HP/.gemini/antigravity-ide/brain/9c145923-b128-46eb-954f-65de4d06453c/100_Questions_Report.md';
fs.writeFileSync(artifactPath, 
`# Chatbot 100 Questions Test Report
Total Tests Run: ${total}
Tests Passed: ${passed}
Tests Failed: ${total - passed}

| User Input | Result | Details |
|---|---|---|
` + results.join('\n')
);
console.log('Passed ' + passed + '/' + total);
