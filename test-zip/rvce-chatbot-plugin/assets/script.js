/* RVCE Chatbot v3 — Smart Engine with Content Moderation */
(function () {
'use strict';

let tone = 'funny';
let chatOpen = false;

/* =============== CONTENT MODERATION =============== */
const BLOCKED = {
    abusive: [
        'fuck','shit','ass','bitch','bastard','damn','dick','pussy','slut','whore',
        'stupid','idiot','dumb','moron','retard','crap','screw you','shut up','suck',
        'hate you','loser','trash','worthless','ugly','go to hell','kill','murder',
        'rape','abuse','harass','molest','stalk','threat','bomb','attack','terror',
        'drug','weed','cocaine','heroin','alcohol','drunk','smoke','gambling','porn',
        'sex','nude','naked','obscene','vulgar','profanity','racist','sexist','bigot',
        'ass hole','wtf','stfu','lmao','lmfao','bloody','madarchod','behenchod',
        'chutiya','bc','mc','gaand','saala','kamina','haramkhor','bewakoof','gadha','hack'
    ],
    conspiracy: [
        'illuminati','flat earth','reptilian','chemtrail','5g cause','qanon','deep state',
        'new world order','fake moon','area 51','aliens control','government mind control',
        'covid fake','vaccine microchip','bill gates chip','controlled demolition',
        'pizza gate','fake news media','rigged election','brainwash','propaganda',
        'freemason','secret society','population control','depopulation','mk ultra','political affiliation'
    ],
    private: [
        'student phone number','personal number','private email','home address',
        'student address','teacher address','salary of','faculty salary',
        'personal data','student marks','result of','cgpa of','gpa of',
        'marks of','percentage of','private detail','confidential','password',
        'bank detail','account number','aadhaar','pan card','dob of','date of birth of',
        'caste of','religion of','family of','father of','mother of','girlfriend',
        'boyfriend','relationship','married','wife of','husband of','someone\'s phone',
        'whatsapp number','instagram id','social media of','facebook of'
    ]
};

const SESSION = {
    lastIntent: null,
    history: []
};

const PREFIXES = [
    "Sure thing!", "I can help with that!", "Got it!", "Great question.",
    "Here's what I found:", "Looking into that...", "Certainly!", "Happy to help."
];

function getPrefix() {
    return PREFIXES[Math.floor(Math.random() * PREFIXES.length)] + " ";
}

function checkModeration(input) {
    const lower = input.toLowerCase();
    
    // Helper to check for blocked pattern with word boundaries
    const isBlocked = (list) => {
        for (const word of list) {
            // Escape special chars and use word boundary (?:^|\s) and (?=\s|$) for broad match
            // or use \b if we want strict letter boundaries. 
            // Given "c.s.e" type sanitization, \b is generally safe for letters/numbers.
            const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp('(?:^|\\s)' + escaped + '(?=\\s|$|[?!.])', 'i');
            if (regex.test(lower)) return true;
        }
        return false;
    };

    if (isBlocked(BLOCKED.abusive)) return { blocked: true, type: 'abusive' };
    if (isBlocked(BLOCKED.conspiracy)) return { blocked: true, type: 'conspiracy' };
    if (isBlocked(BLOCKED.private)) return { blocked: true, type: 'private' };
    
    return { blocked: false };
}

function getModerationResponse(type) {
    const responses = {
        abusive: {
            funny: "Whoa there! 🚫 Let's keep it friendly, shall we? I'm here to help with RVCE stuff, not to trade insults! 😅",
            pro: "⚠️ I'm unable to respond to inappropriate or offensive language. Please keep our conversation respectful. I'm here to help you with genuine RVCE queries."
        },
        conspiracy: {
            funny: "Nice try! 🛸 But I only deal in verified RVCE facts, not conspiracy theories! Let's stick to something I can actually help with 😄",
            pro: "⚠️ I'm designed to provide factual information about RVCE only. I cannot engage with conspiracy theories or unverified claims. Please ask me about admissions, placements, or campus facilities."
        },
        private: {
            funny: "Sorry, that's classified! 🔒 I can't share anyone's private information. I'm a college chatbot, not a spy! 🕵️",
            pro: "⚠️ I cannot share personal or confidential information about students, faculty, or staff. This includes contact details, marks, or personal data. I can help with general college information instead."
        }
    };
    return responses[type][tone === 'funny' ? 'funny' : 'pro'];
}

/* =============== KNOWLEDGE BASE =============== */
const KB = {
    general: {
        name: "RV College of Engineering (RVCE)", est: "1963",
        campus: "16.85 acres on Mysuru Road, Bengaluru – 560 059",
        trust: "Rashtreeya Sikshana Samithi Trust (RSST)",
        status: "Autonomous (UG), Affiliated to VTU",
        accreditation: "NAAC A+ Grade, NBA Accredited",
        ranking: "NIRF 101-150 band (Engineering, 2025), #1 Private Engineering College in IIRF 2025",
        principal: "Dr. K.N. Subramanya",
        timings: "Mon-Fri: 9:00 AM – 4:45 PM, Sat: 9:00 AM – 1:00 PM",
        vision: "Leadership in quality technical education, interdisciplinary research & innovation, with focus on sustainable and inclusive technology.",
        intake: "2000+ students annually across UG and PG",
        research: "100+ Patents, ₹30+ Crores in grants, 20 Centres of Excellence, 15 VTU-recognized Research Centres",
        researchDomains: "AI, Quantum Tech, 5G, Electric Vehicles, Hydrogen Technology, IC Design",
        coes: [
            "Macroelectronics (CME)", "Macroelectronics (CME) - Thin Film Lab",
            "Internet of Things (IoT)", "Smart Antenna Systems (CSAS)",
            "Visual Computing", "Excellence in Materials & Manufacturing",
            "Robotics & Cognitive Systems", "Automotive Mechatronics (Mercedes Benz)",
            "Computational Genomics", "Quantum Computing (Q-RVCE)"
        ],
        cocs: [
            "Bosch Rexroth - Automation Tech", "Toyota - Automotive Tech",
            "Cisco - Networking", "HP - Cloud Computing"
        ],
        industryPartners: ["Google", "Microsoft", "Toyota", "Mercedes Benz", "Cisco", "IBM", "Intel", "Honeywell"]
    },
    contact: {
        address: "RV College of Engineering, RV Vidyanikethan Post, Mysuru Road, Bengaluru – 560 059",
        phone: "+91-080-68188112 / 8111", admissionPhone: "080-68188147/48/49",
        email: "principal@rvce.edu.in", placementPhone: "9886130504",
        website: "https://rvce.edu.in/"
    },
    rvei: {
        history: "Founded in 1940 by Sri M. C. Shivananda Sarma and Sri Meda Kasturi Ranga Setty.",
        institutions: "Manages over 25 institutions including RV College of Engineering, RV University, NMKRV College, DAPM RV Dental College, and RV Institute of Management.",
        motto: "Excellence in Education with Societal Commitment."
    },
    placements: {
        companies: "249 companies participated in the 2024 campus drive", avgSalary: "~₹35 LPA (2024 Avg)",
        maxSalary: "₹92 LPA Highest Package (2024 Batch)", recruiters: "ABB, Boeing, CTS, Infosys, Wipro, TCS, Amazon, Microsoft",
        scholarships: "₹72+ Lakhs awarded to ~110 students annually from ABB, Boeing, CTS",
        infra: "800+ systems, seminar halls, 6 interview rooms, 2 GD rooms",
        offers: "917 total offers with a 75% placement rate for 2024",
        url: "https://rvce.edu.in/placement_and_training/"
    },
    admissions: {
        ug: { eligibility: "12th/2nd PUC with min 45% in Physics + Maths + Chemistry/Biotech/Biology/CS/Electronics (40% for SC/ST/OBC Karnataka)", exams: "KCET (KEA), COMED-K, Management Quota. JEE Mains is NOT considered.", quotas: "Also available: CIWG/PIO/OCI/Nepal Citizens quota" },
        pg: { eligibility: "B.E./B.Tech with min 50% marks (45% for SC/ST/OBC Karnataka)", exams: "Valid GATE or PGCET score" },
        mca: { eligibility: "Bachelor's degree with min 50% marks (45% for SC/ST/OBC Karnataka)" },
        phd: { info: "Doctoral programs in all departments via entrance test + interview. 15 VTU-recognized Research Centres." },
        fees: "Management Quota B.E. fees range from ~₹16 Lakhs to ~₹70 Lakhs total over 4 years (e.g., CSE highest at ~₹70L, Core branches ~₹16L-₹24L). M.Tech/MCA ranges from ₹2L to ₹16L.",
        cutoffs: "Official KCET cutoffs are released by KEA (e.g., ISE cutoff was ~832 in 2023).",
        url: "https://rvce.edu.in/admissions/"
    },
    departments: {
        ug: [
            {n:"Aerospace Engineering (AE)",c:"ae", u:"https://rvce.edu.in/department/ae/b_e_ase/", hod:"Dr. Supreeth R"},
            {n:"AI & Machine Learning (AIML)",c:"aiml", u:"https://rvce.edu.in/department/ai_ml/department-of-artificial-intelligence-machine-learning/", hod:"Dr. Sathish Babu B"},
            {n:"Biotechnology (BT)",c:"bt", u:"https://rvce.edu.in/department/biotechnology/b-e-in-biotechnology/", hod:"Dr. Nagashree N Rao"},
            {n:"Chemical Engineering (CH)",c:"ch", u:"https://rvce.edu.in/department/chemical_engineering/b_e_ce/", hod:"Dr. Jagadish H Patil"},
            {n:"Civil Engineering (CV)",c:"cv", u:"https://rvce.edu.in/department/civil_engineering/b-e-civil/", hod:"Dr. Anjaneyappa"},
            {n:"Computer Science & Engg (CSE)",c:"cs", u:"https://rvce.edu.in/department/cse/b-e-cse-2/", hod:"Dr. Shanta Rangaswamy"},
            {n:"CSE (AI & ML) (CSAIML)",c:"csaiml", u:"https://rvce.edu.in/department/cse/b_e_ai_ml/", hod:"Dr. Shanta Rangaswamy"},
            {n:"CSE (Cyber Security) (CSCY)",c:"cscy", u:"https://rvce.edu.in/department/cse/b_e_cse_cy/", hod:"Dr. Shanta Rangaswamy"},
            {n:"CSE (Data Science) (CSDS)",c:"csds", u:"https://rvce.edu.in/department/cse/main-department/", hod:"Dr. Shanta Rangaswamy"},
            {n:"Electrical & Electronics (EEE)",c:"ee", u:"https://rvce.edu.in/department/eee/be_eee/", hod:"Dr. J N Hemalatha"},
            {n:"Electronics & Communication (ECE)",c:"ec", u:"https://rvce.edu.in/department/ece/b-e-in-electronics-and-communication-engineering/", hod:"Dr. Ravish Aradhya H V"},
            {n:"Electronics & Instrumentation (EIE)",c:"ei", u:"https://rvce.edu.in/department/eim/b-e-eie/", hod:"Dr. Kendaganna Swamy S"},
            {n:"Electronics & Telecom (ETE)",c:"et", u:"https://rvce.edu.in/department/etc/b-e-ete/", hod:"Dr. K S Geetha"},
            {n:"Industrial Engg & Mgmt (IEM)",c:"im", u:"https://rvce.edu.in/department/iem/b-e-industrial-engineering-and-management/", hod:"Dr. N S Narahari"},
            {n:"Information Science & Engg (ISE)",c:"is", u:"https://rvce.edu.in/department/ise/b_e_ise/", hod:"Dr. Mamatha G S"},
            {n:"Mechanical Engineering (ME)",c:"me", u:"https://rvce.edu.in/department/me/b-e-mechanical/", hod:"Dr. Shanmukha N"}
        ],
        pg: [
            {n:"M.Tech Biotechnology",c:"bt"},{n:"M.Tech Structural Engg",c:"cv"},
            {n:"M.Tech Highway Tech",c:"cv"},{n:"M.Tech CSE",c:"cs"},
            {n:"M.Tech Computer Network Engg",c:"cs"},{n:"M.Tech Power Electronics",c:"ee"},
            {n:"M.Tech VLSI & Embedded",c:"ec"},{n:"M.Tech Comm Systems",c:"ec"},
            {n:"M.Tech Software Engg",c:"is"},{n:"M.Tech Info Tech",c:"is"},
            {n:"M.Tech Product Design",c:"me"},{n:"M.Tech Machine Design",c:"me"},
            {n:"M.Tech Digital Comm",c:"et"},{n:"MCA",c:"mca"}
        ]
    },
    hostels: {
        boys: "Chamundi, Cauvery, Sir MV, Krishna blocks",
        girls: "Diamond Jubilee, Krishna Garden blocks",
        amenities: "Vegetarian mess, Wi-Fi, laundry, 24/7 security",
        note: "Allotted during admission — no advance booking",
        url: "https://rvce.edu.in/facilities/"
    },
    facilities: {
        list: ["Central Library","Food Court","Sports Complex (400m track, Cricket/Football)","Health Centre","ICICI Bank","Post Office","Gymnatorium","Labs & Workshops"],
        url: "https://rvce.edu.in/facilities/"
    },
    placements2025: {
        maxSalary: "₹67 LPA Highest Package (2025 Batch, B.E.)",
        mtechMax: "₹35 LPA (M.Tech highest)",
        mcaMax: "₹20 LPA (MCA highest)",
        avgSalary: "~₹15-17 LPA (2025 B.E. Avg)",
        companies: "260+ companies participated in 2025 drive",
        offers: "800+ offers to B.E./B.Tech students",
        topRecruiters: "Microsoft, Google, Amazon, Atlassian, Cisco, Dell, Intel, Adobe, Flipkart, Samsung, PayPal, IBM, Deloitte, JP Morgan, Goldman Sachs, Bosch, Mercedes-Benz"
    },
    hostelDetails: {
        boysBlocks: { chamundi: "1st year UG", cauvery: "2nd & 3rd year UG", cauveryAnnex: "1st year UG", sirMV: "Final year UG & PG" },
        girlsBlocks: { djBlock: "1st year & higher sem B.E. (On-campus)", krishnaGarden: "Higher sem B.E., M.Tech, MCA (Off-campus, Pattanagere)" },
        fees: { tripleSharing: "~₹1,42,000 – ₹1,53,000 per annum", doubleSharing: "~₹1,84,000 – ₹1,91,000 per annum" },
        facilities: "Furnished rooms (bed, study table, chair, cupboard), Wi-Fi, 24/7 security, gymnasium, indoor/outdoor sports, vegetarian mess"
    },
    safety: {
        cctv: "Extensive CCTV surveillance across all blocks, classrooms, and hostels",
        wardens: "Residential wardens in all hostel blocks",
        healthCentre: "On-campus Health Centre with 24/7 medical support and ambulance facility. Partnered with Aster Hospital for specialist care.",
        healthDetails: {
            doctor: "Full-time resident medical officer available",
            services: ["Emergency Care", "Consultation", "24/7 Ambulance", "Medical Pharmacy"],
            hospital: "Tied up with Aster Hospital, RV Road for advanced treatments"
        },
        grievance: "Active Internal Complaints Committee (ICC) and Student Grievance Redressal Cell",
        antiRagging: "Strict Zero Tolerance policy; Anti-ragging squad ensures a safe environment for freshers"
    },
    campus: {
        fest: "8th Mile (Annual Technocultural Fest)",
        clubs: ["Alaap (Music)", "CSI", "TEDxRVCE", "CARV (Cultural)", "Entrepreneurship Cell (E-Cell)", "Raaga (Dance)", "Namma RVCE (Social)", "DebSoc", "QuizCorp"],
        teams: ["Team Ashwa (Formula Student)", "Project Antariksh (Space Tech)", "Team Vyoma (UAVs)", "Team Chimera (Hybrid Vehicles)", "Team Astra (Robotics)"],
        societies: ["IEEE RVCE", "SAE RVCE", "ACM Student Chapter", "CSI Student Chapter"],
        urls: {
            innovation: "https://rvce.edu.in/innovation-and-incubation-centre/",
            cultural: "https://rvce.edu.in/extra-curricular-activities/"
        }
    },
    events: [
        { name: "GenAI Workshop (B.E. 2nd Year)", date: "May 15-20, 2026", type: "Technical" },
        { name: "ICOECA 2026 Conference", date: "June 12-14, 2026", type: "Research" },
        { name: "RVCE Hackathon 5.0", date: "August 2026", type: "Technical" }
    ],
    attendance: {
        requirement: "Minimum 85% attendance mandatory",
        consequence: "Students below 85% may be detained from appearing in semester exams",
        tracking: "Attendance tracked through mandatory ID card system"
    },
    nearby: {
        areas: "Mysuru Road, Kengeri, Rajarajeshwari Nagar, Pattanagere",
        food: "Multiple eateries, cafes & restaurants near campus on Mysuru Road",
        shopping: "RR Nagar has malls (Gopalan Arcade), local markets, and retail stores",
        hospitals: "BGS Gleneagles Global Hospital, Rajarajeshwari Medical College Hospital nearby",
        connectivity: "NICE Road junction nearby, Kengeri Metro station, BMTC bus routes"
    }
};

/* =============== INPUT SANITIZATION =============== */
function sanitize(input) {
    // 1. Remove dots explicitly to handle c.s.e -> cse
    let cleaned = input.replace(/\./g, '');
    // 2. Remove other special chars
    cleaned = cleaned.replace(/[^a-zA-Z0-9\s]/g, ' ');
    // 3. Remove extra spaces
    return cleaned.replace(/\s+/g, ' ').trim();
}

/* =============== INTENT MATCHING (Priority-based) =============== */
// p: 0=greet/bye, 1=very specific, 2=medium, 3=generic fallback
const QA = [
    {k:['hi','hello','hey','hii','hola','good morning','good evening','good afternoon','Namaste','yo','sup','howdy','wassup','yoo','heyo','heyy','hellooo','helloo','namaskara'],id:'greet',p:0},
    {k:['bye','goodbye','thank you','thanks','thats all','see you','cya','take care','ok bye','okay bye','good night','tata','laterz','peace out','im out','gtg','gotta go','kbye'],id:'bye',p:0},
    // P1: Specific topics
    {k:['hostel','hostels','accommodation','dorm','dormitory','boys hostel','girls hostel','hostel fee','hostel room','single room','shared room','hostel mess','staying','where to stay','stay at rvce','pg','paying guest','hostel life','hstl','hostl'],id:'hostels',p:1},
    {k:['transport','how to reach','bmtc','bus route','kengeri metro','commute to rvce','distance from','reach rvce','reach the college','how to get there','travel to rvce','cab to rvce','auto to rvce','ola to rvce','uber to rvce','metro station','nearest metro'],id:'transport',p:1},
    {k:['wifi','internet','wi fi','connectivity','broadband','net access','wifi password','net speed','slow internet'],id:'wifi',p:1},
    {k:['canteen','food','mess food','eat','dining','cafeteria','food court','what to eat','lunch','breakfast','snacks','tiffin','grub','khana','mess menu','food quality','dabba','maggi point'],id:'food',p:1},
    {k:['exam','exams','examination','examinations','semester exam','end semester','internal','assessment','cie','end sem','mid sem','exam pattern','question paper','question papers','endsem','midsem','internals','ia marks','see exam','cie marks','qp','prev papers','previous papers'],id:'exam',p:1},
    {k:['lateral','lateral entry','diploma holder','dcet','lateral admission'],id:'lateral',p:1},
    {k:['nri','international student','foreign student','overseas','ciwg','pio','oci','foreign quota','nri quota','nri admission','abroad student'],id:'nri',p:1},
    {k:['scholarship','financial aid','stipend','merit scholarship','scholy','scholorship','fee waiver','free seat','freeship'],id:'scholarships',p:1},
    {k:['jee','jee mains','jee main','jee accepted','jee score','jee rank','jee valid','does jee work'],id:'jee',p:1},
    {k:['kcet','comedk','comed k','cet rank','kcet rank','comedk rank'],id:'examTypes',p:1},
    {k:['management quota','management seat','direct admission','donation seat','mgmt quota','mgmt seat','donation','capitation','mq seat'],id:'management_quota',p:1},
    {k:['cutoff','cut off','closing rank','kcet rank','comedk cutoff','last rank','expected cutoff','cutoffs','closing ranks'],id:'cutoffs',p:1},
    {k:['fee','fees','tuition','fee structure','semester fee','total cost','how much cost','how much does it cost','fee details','kitna paisa','kitna lagta','college fees','yearly fees','annual fees'],id:'fees',p:1},
    {k:['refund','fee refund','cancellation','cancel admission','get money back','refund policy','aicte refund','money back','paisa wapas'],id:'refund_policy',p:1},
    {k:['syllabus','1st semester syllabus','1st sem syllabus','first semester syllabus','scheme','first year subjects','1st year syllabus','what are we studying','sylly','syll','subjects list','what subjects'],id:'syllabus_1st_sem',p:0.8},
    {k:['innovation team','formula student','uav','ashwa','chimera','jatayu','astra robotics','antariksh','student projects','project teams','racing team','baja','sae','drone team'],id:'innovationTeams',p:1},
    {k:['cultural life','culture','cultural life','college culture','music club','dance club','theatre','drama','tedx','tedxrvce','rotaract','fest','8th mile','eighth mile','annual fest','college fest','events','college events','cultural events','cultural activities','annual day','culturals','fests','techfest','tech fest'],id:'culturalLife',p:1},
    {k:['vision','mission','motto','college vision','rvce vision'],id:'vision',p:1},
    {k:['principal','principal name','who is principal','head of institution','director of rvce','who is the principal','about principal','tell me about principal','princi','whos the princi'],id:'principal',p:1},
    {k:['hod','head of department','dean','deans','faculty','teachers','professors','who is the hod','list of hods','hods','who is hod','department head','heads','teaching staff'],id:'faculty',p:1.5},
    {k:['deans list','all deans','dean list','executive committee','key executives'],id:'deans_list',p:1},
    {k:['hods list','list of hods','all hods','hod list','head of departments','all heads'],id:'hods_list',p:1},
    {k:['coe','coes','centres of excellence','centers of excellence','coe list','research centres','research centers','innovation hubs'],id:'centres_of_excellence',p:1},
    {k:['health center','health centre','doctor','medical','ambulance','sick','hospital','first aid','emergency medical','clinic'],id:'health_centre',p:1},
    {k:['ieee','sae','acm','csi','societies','professional societies','student chapters','chapters'],id:'professional_societies',p:1},
    {k:['upcoming events','events','calendar','workshops','conferences','what is happening','happening soon','college events'],id:'upcoming_events',p:0.7},
    {k:['ranking','nirf','iirf','college ranking','where does rvce rank','ranked','best college','rvce rank','top college','rvce ranking'],id:'ranking',p:1},
    {k:['accreditation','naac','nba','naac grade','naac rating','accredited'],id:'accreditation',p:1},
    {k:['timing','timings','working hours','college hours','college time','what time','opening time','closing time','open close','class timings','college timing','kab khulta','when open'],id:'timings',p:1},
    {k:['trust','trust details'],id:'trust',p:1},
    {k:['research','patent','patents','innovation centre','centre of excellence','research centre','grants','funding','research at rvce','research lab','r and d','rnd'],id:'research',p:1},
    {k:['mca','master of computer application','mca dept','mca department','mca course','mca admission'],id:'mca',p:1},
    {k:['phd','doctoral','doctorate','research program','doctor degree','phd admission','phd at rvce'],id:'phd',p:1},
    {k:['vtu','visvesvaraya','affiliated university','university affiliation','vtu affiliation'],id:'vtu',p:1},
    {k:['seat','seats','total seats','intake','how many students','total students','student count','student strength','intake capacity','seat count','total intake'],id:'intake',p:0.5},
    {k:['library','central library','books','reading room','e library','digital library','lib','library timing','study room'],id:'library',p:0.3},
    {k:['sports','cricket','football','basketball','volleyball','athletics','gym','gymnatorium','sports complex','games','badminton','table tennis','tt','fitness','workout','sports ground','playground'],id:'sports',p:1},
    {k:['autonomous','autonomy','own syllabus','own exam','autonomous status','is rvce autonomous'],id:'autonomous',p:1},
    {k:['stat','stats','statistic','statistics','number','numbers','figure','figures','data','how many'],id:'stats_disambiguation',p:0.4},
    // Department-specific (with short codes + college slang)
    {k:['computer science','cse','cs','cs department','computer science engineering','cse department','comps','comp sci','cs branch','cs dept'],id:'dept_cs',p:1},
    {k:['artificial intelligence','aiml','ai ml','machine learning','ai department','ai branch','ml branch','ai and ml'],id:'dept_aiml',p:1},
    {k:['electronics and communication','ece','ec','ec department','ece department','entc','e and c','ec branch'],id:'dept_ec',p:1},
    {k:['mechanical engineering','me department','mech','mech department','mechanical','mech engg','mech branch','mechies'],id:'dept_me',p:1},
    {k:['civil engineering','cv department','cv','civil department','civil','civil branch','cv branch','civil engg'],id:'dept_cv',p:1},
    {k:['electrical','eee','ee','ee department','eee department','electrical engineering','elec','electrical branch','triple e'],id:'dept_ee',p:1},
    {k:['aerospace','ae department','ae','aero','aero department','aeronautical','aerospace engineering','aero branch','aero engg'],id:'dept_ae',p:1},
    {k:['biotech','bt','biotechnology','bio technology','bt department','bio tech','bio branch','biotech dept'],id:'dept_bt',p:1},
    {k:['chemical engineering','ch department','ch','chemical engg','che','chem engg','chem branch','chemical dept'],id:'dept_ch',p:1},
    {k:['information science','ise','is department','ise department','is branch','ise branch','info sci'],id:'dept_is',p:1},
    {k:['data science','csds','ds','cs data science','csds department','ds branch','data sci','csds branch'],id:'dept_csds',p:1},
    {k:['cyber security','cscy','cy','cs cyber security','cscy department','cyber','cyber branch','cscy branch','cybersec'],id:'dept_cscy',p:1},
    {k:['telecom','ete','tc','telecommunication','ete department','tc branch','ete branch','tele'],id:'dept_et',p:1},
    {k:['instrumentation','eie','ei','ei department','eie department','instr','instru','ei branch','eie branch'],id:'dept_ei',p:1},
    {k:['industrial engineering','iem','ie','iem department','industrial management','ie branch','iem branch','industrial'],id:'dept_im',p:1},
    // P2: Mid-level
    {k:['placement stats','placement statistics','placement year','year wise placement','2024 placement','placement 2024','2023 placement','placement 2023','2022 placement','placement 2022','2021 placement','placement 2021','2020 placement','placement 2020','past placements','previous year placements','2024','2023','2022','2021','2020'],id:'placements_yearly',p:0.1},
    {k:['2027 placement','2027 placements','placement 2027','placements 2027','placement stats 2027','2028 placement','2028 placements','2029 placement','2027 stats','2027'],id:'placements_future',p:0.1},
    {k:['placement','placements','placed','salary','package','lpa','ctc','highest package','average salary','recruit','hiring','companies visit','which companies','recruiters','job','jobs','placement details','plcmnt','plcmnts','campus drive','dream company','mass recruit','superdream','dream offer','placed kya','placement scene','on campus placement','off campus placement'],id:'placements',p:0.5},
    {k:['admission','admissions','how to apply','how to join','entrance','eligibility','enroll','apply to rvce','join rvce','get into rvce','admission process','how to get admission','ug adm','pg adm','ug b e','admission kaise','how to get in','want to join','joining process'],id:'admissions',p:1.5},
    {k:['department','departments','branch','branches','stream','streams','course','courses','program','programmes','what courses','all branches','view programs','depts','all depts'],id:'departments',p:2},
    {k:['ug','ug details'],id:'ug_disambiguation',p:2},
    {k:['ug programs','ug programmes','ug program','undergraduate','undergrad','b e','be','btech','b tech','ug courses','b e flavors','b e course','b e courses','be courses','bachelor','bachelors','ug branch'],id:'ugPrograms',p:1.5},
    {k:['pg program','pg programs','postgraduate','postgrad','m tech','mtech','masters','pg courses','pg branch','pg admission'],id:'pgPrograms',p:1.5},
    {k:['facility','facilities','infrastructure','what facilities','amenities','all facilities','infra','college infra','campus infra'],id:'facilities',p:2},
    {k:['website','site','official website','rvce website','visit website','rvce site','college website'],id:'website',p:2},
    // P3: Generic fallback
    {k:['tell me about','know about','information about','about'],id:'about_disambiguation',p:3.5},
    {k:['rvce','about rvce','college','history','founded','established','overview','abt rvce','whats rvce','what is rvce'],id:'about_rvce',p:3},
    {k:['rvei','about rvei','rsst','institutions','what is rvei','who is rvei','parent organization','who manages','who owns','ownership'],id:'about_rvei',p:3},
    {k:['campus life','student life','extracurricular','clubs','life at rvce','campus','student experience','college life','clg life','lyf at rvce','vibes','campus vibes','college scene'],id:'campusLife',p:1.5},
    {k:['dress code','uniform','what to wear','clothes allowed','is there a uniform','can i wear shorts','can i wear jeans','dress rules','formals','casuals allowed','shorts allowed'],id:'dress_code',p:0.8},
    {k:['anti ragging','ragging','helpline','report ragging','ragging completely banned','bullied','harassed','ragging helpline','rag','ragging scene','ragging hota hai','seniors bully'],id:'anti_ragging',p:0.8},
    {k:['contact','phone','email','address','location','where is rvce','map','direction','call','bengaluru','bangalore','phone number','contact number','college address','rvce address'],id:'contact',p:3},
    {k:['menu','main menu','options','help','start','what can you do','show menu','halp','commands'],id:'menu',p:3},
    // ===== PARENT-SPECIFIC INTENTS =====
    {k:['safe','safety','is it safe','is my child safe','is my daughter safe','security','cctv','campus security','safe for girls','is rvce safe','how safe','secure','campus safety','child safety','girl safety','daughter safety','women safety'],id:'safety',p:0.8},
    {k:['attendance','attendance rules','attendance requirement','minimum attendance','85 percent','attendance mandatory','bunking','bunk','proxy','absent','leave policy','attendance policy','how strict','strict attendance','will my child attend'],id:'attendance',p:1},
    {k:['roi','return on investment','worth the fees','worth the money','value for money','is it worth','paisa vasool','fee worth','investment','good investment','waste of money','expensive but good','justification of fees'],id:'roi',p:1},
    {k:['girls hostel','girls hostel rules','girls curfew','girls safety','female hostel','women hostel','hostel for girls','daughter hostel','curfew','curfew time','hostel timings','hostel curfew','in time','girls hostel fees','separate hostel','hostel rules for girls'],id:'girls_hostel',p:0.7},
    {k:['nearby','surroundings','area around','near rvce','around campus','neighbourhood','neighborhood','food outside','restaurants near','hospital near','hospitals near','shops near','market near','atm near','nearby places','what is around'],id:'nearby',p:1},
    {k:['internship','internships','intern','summer intern','company intern','internship opportunities','internship cell','internship support','do students get internships','intern kahan','intern milta hai'],id:'internship',p:1},
    {k:['startup','entrepreneurship','startup culture','e cell','ecell','incubation','startup support','business','own company','startup scene','entrepreneur','innovation hub'],id:'startup',p:1},
    {k:['peer','peers','peer quality','student quality','topper','toppers','smart students','competitive','peer group','classmates','caliber','students caliber','how are students','crowd','what type of students'],id:'peer_quality',p:1},
    {k:['worth','worth it','is rvce good','is rvce worth it','should i join','should my child join','rvce vs','rvce or','better college','how is rvce','rvce review','reviews','rvce worth joining','join karu','acha hai kya','kaisa hai','accha college hai'],id:'worth_it',p:1.5},
    {k:['best branch','which branch','branch to choose','best department','top branch','scope','which course','cse vs','ise vs','ece vs','branch selection','konsa branch','best course','trending branch','hot branch','most demand'],id:'best_branch',p:1},
    {k:['parking','vehicle','bike parking','car parking','two wheeler','scooty','bike allowed','vehicle allowed','parking space','parking facility'],id:'parking',p:1},
    {k:['part time','part time job','side hustle','earn while studying','freelance','freelancing','earn money','side income','working student','parttime'],id:'part_time',p:1},
    {k:['alumni','alumni network','famous alumni','notable alumni','alumni association','old students','passed out','alumni connect','alumni support'],id:'alumni',p:1},
    {k:['comparison','compare','rvce vs pes','rvce vs msrit','rvce vs bms','rvce vs sit','pes vs rvce','msrit vs rvce','bms vs rvce','which is better','better than rvce','rvce better','college comparison'],id:'college_compare',p:1},
];

// Dynamically inject specific HOD queries for ALL departments
const dynamicHodIntents = [];
QA.forEach(q => {
    if (q.id && q.id.startsWith('dept_')) {
        const c = q.id.replace('dept_', '');
        const hodKWs = [];
        q.k.forEach(kw => {
            hodKWs.push(`hod ${kw}`);
            hodKWs.push(`${kw} hod`);
            hodKWs.push(`head of ${kw}`);
        });
        // p=0.5 overrides normal department queries (p=1)
        dynamicHodIntents.push({ k: hodKWs, id: `hod_${c}`, p: 0.5 });
    }
});
QA.push(...dynamicHodIntents);

// Human-readable labels for suggestion buttons
const INTENT_LABELS = {
    greet:'Say Hi 👋', bye:'Bye!', about_disambiguation:'About 🤔', about_rvce:'About RVCE 🏫', about_rvei:'About RVEI (RSST) 🏛️', hostels:'Hostels 🏠',
    transport:'How to Reach 🚌', wifi:'WiFi 📶', food:'Food & Canteen 🍛',
    exam:'Exams 📝', lateral:'Lateral Entry', nri:'NRI / International',
    scholarships:'Scholarships 🎓', jee:'JEE Info', examTypes:'KCET / COMED-K',
    contact:'Contact 📞', menu:'Main Menu 📋',
    dept_cs:'Computer Science & Engineering (CSE)', dept_aiml:'AI & Machine Learning (AIML)', dept_ec:'Electronics & Communication (ECE)',
    dept_me:'Mechanical Engineering (ME)', dept_cv:'Civil Engineering (CV)', dept_ee:'Electrical & Electronics (EEE)',
    dept_ae:'Aerospace Engineering (AE)', dept_bt:'Biotechnology (BT)', dept_ch:'Chemical Engineering (CH)',
    dept_is:'Information Science (ISE)', dept_csds:'Data Science (CSDS)', dept_cscy:'Cyber Security (CSCY)',
    dept_et:'Telecommunication (ETE)', dept_ei:'Instrumentation (EIE)', dept_im:'Industrial Engineering (IEM)',
    syllabus_1st_sem: '1st Year Syllabus 📚', dress_code: 'Dress Code 👔', anti_ragging: 'Anti-Ragging 🛑', hod_cs: 'CSE HOD 👨‍🏫',
    safety: 'Campus Safety 🛡️', attendance: 'Attendance Rules 📋', roi: 'Value for Money 💎', girls_hostel: 'Girls Hostel 🏠',
    nearby: 'Nearby Areas 📍', internship: 'Internships 🧑‍💻', startup: 'Startups & E-Cell 🚀', peer_quality: 'Peer Quality 🎯',
    worth_it: 'Is RVCE Worth It? ⭐', best_branch: 'Best Branch 🔝', parking: 'Parking & Vehicles 🅿️', part_time: 'Part-time Work 💼',
    alumni: 'Alumni Network 🤝', college_compare: 'College Comparison 📊',
    centres_of_excellence:'Centres of Excellence 🔬', health_centre:'Health Facilities 🏥',
    professional_societies:'Student Societies 🤝', upcoming_events:'Upcoming Events 📅'
};

// Returns { type: 'exact'|'keyword'|'fuzzy'|null, id: string|null, suggestions: string[] }
function classifyIntent(input) {
    const cleanInput = sanitize(input).toLowerCase();
    
    // 1. Universal Button-to-Intent Bypass — these are BUTTONS the user clicked, always exact
    for (const [id, label] of Object.entries(INTENT_LABELS)) {
        if (sanitize(label).toLowerCase() === cleanInput) return { type: 'exact', id, suggestions: [] };
    }
    for (const d of KB.departments.ug) {
        if (sanitize(d.n).toLowerCase() === cleanInput) return { type: 'exact', id: 'dept_' + d.c, suggestions: [] };
    }
    for (const d of KB.departments.pg) {
        if (sanitize(d.n).toLowerCase() === cleanInput) return { type: 'exact', id: 'dept_' + d.c, suggestions: [] };
    }
    const BUTTON_MAP = {
        'ug be': 'ugAdm', 'pg mtech': 'pgAdm', 'mca': 'mca', 'phd': 'phd',
        'view programs': 'ugPrograms', 'pg programs': 'pgPrograms', 'all departments': 'departments',
        'admissions page': 'admissions', 'apply': 'admissions',
        'placement details': 'placements', 'more info': 'admissions',
        'facilities': 'facilities', 'all facilities': 'facilities',
        'innovation teams': 'innovationTeams', 'see teams': 'innovationTeams',
        'cultural clubs': 'culturalLife', 'cultural teams': 'culturalLife',
        'sports info': 'sports', 'rvei website': 'trust',
        'website': 'website', 'email': 'contact', 'rvce edu in': 'website'
    };
    if (BUTTON_MAP[cleanInput]) return { type: 'exact', id: BUTTON_MAP[cleanInput], suggestions: [] };

    // 2. Exact match: user typed EXACTLY a keyword from the QA bank
    for (const q of QA) {
        if (q.k.includes(cleanInput)) return { type: 'exact', id: q.id, suggestions: [] };
    }

    // 3. Keyword-in-sentence: a keyword appears as a whole word inside user's input
    let best = null, bestP = 99, bestL = 0;
    for (const q of QA) {
        for (const k of q.k) {
            const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');
            
            if (regex.test(cleanInput)) {
                if (q.p < bestP || (q.p === bestP && k.length > bestL)) {
                    best = q.id; bestP = q.p; bestL = k.length;
                }
            }
        }
    }
    if (best) return { type: 'keyword', id: best, suggestions: [] };

    // 4. Fuzzy match: no exact keyword found, try "Did you mean?" suggestions
    const suggestions = findSuggestions(input);
    if (suggestions.length > 0) return { type: 'fuzzy', id: null, suggestions };

    // 5. No match at all
    return { type: null, id: null, suggestions: [] };
}

// Legacy wrapper for tests and button clicks (returns just the ID)
function matchIntent(input) {
    const result = classifyIntent(input);
    return result.id || null;
}

/* =============== FUZZY "DID YOU MEAN?" =============== */
function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({length: m+1}, ()=> Array(n+1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+(a[i-1]!==b[j-1]?1:0));
    return dp[m][n];
}

function findSuggestions(input) {
    const words = sanitize(input).toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const scored = new Map();
    for (const q of QA) {
        if (q.id === 'greet' || q.id === 'bye' || q.id === 'menu') continue;
        let minDist = Infinity;
        for (const k of q.k) {
            for (const w of words) {
                // Check each keyword and each word from input
                const kWords = k.split(/\s+/);
                for (const kw of kWords) {
                    if (kw.length < 3) continue;
                    const d = levenshtein(w, kw);
                    const threshold = Math.max(1, Math.floor(kw.length * 0.35));
                    if (d <= threshold && d < minDist) minDist = d;
                }
            }
        }
        if (minDist < Infinity) scored.set(q.id, minDist);
    }
    // Sort by distance, return top 3 unique
    const sorted = [...scored.entries()].sort((a,b) => a[1]-b[1]);
    const results = [];
    const seen = new Set();
    for (const [id] of sorted) {
        if (!seen.has(id) && results.length < 3) { results.push(id); seen.add(id); }
    }
    return results;
}

function getFollowUps(id) {
    const map = {
        ugPrograms: [{l:'Admissions info',a:'ugAdm',i:'🎓'},{l:'Campus Life',a:'campusLife',i:'🏕️'}],
        placements: [{l:'Top Companies',a:'about',i:'🏢'},{l:'Admissions',a:'admissions',i:'🎓'}],
        hostels: [{l:'Facilities',a:'facilities',i:'🏢'},{l:'Sports',a:'sports',i:'🏅'}],
        admissions: [{l:'Fee Structure',a:'fees',i:'💰'},{l:'Placements',a:'placements',i:'💼'}]
    };
    return map[id] || [];
}

/* =============== TONE HELPER =============== */
function T(f, p) { return tone === 'funny' ? f : p; }

/* =============== RESPONSE GENERATOR =============== */
function getResponse(id) {
    const r = { text:'', buttons:[], noMenu:false };
    
    // Add conversational prefix for non-greeting/bye intents
    if (id !== 'greet' && id !== 'bye' && id !== 'menu') {
        r.text = getPrefix();
    }

    SESSION.lastIntent = id;

    switch(id) {
    case 'greet':
        r.text = T("Hey there! 👋 Welcome to RVCE — the place where engineers are crafted! 🔧 What would you like to know?","Hello! Welcome to RV College of Engineering. How can I assist you today?");
        r.noMenu = true; return r;
    case 'bye':
        r.text = T("See ya! 🙌 Hope I helped. Come back anytime!","Thank you for visiting. Feel free to return anytime. Have a good day!");
        r.buttons = [{l:'Visit Website',u:KB.contact.website,i:'🌐'}]; return r;
    case 'about_disambiguation':
        r.text = T(
            "Are you looking for information about Departments, the RV Educational Institutions (RVEI), or RV College of Engineering (RVCE)?",
            "Please clarify what you would like to know about:"
        );
        r.buttons = [
            {l:'Departments 📚', a:'departments', i:'📚'},
            {l:'About RVEI 🏛️', a:'about_rvei', i:'🏛️'},
            {l:'About RVCE 🏫', a:'about_rvce', i:'🏫'}
        ];
        r.noMenu = true;
        break;
    case 'about_rvei':
        r.text += T("Rashtreeya Vidyalaya Educational Institutions (RVEI) is managed by RSST! 🏛️","About RVEI (RSST):");
        r.text += "\n• "+KB.rvei.history+"\n• "+KB.rvei.institutions+"\n• Motto: "+KB.rvei.motto;
        r.buttons = [{l:'RVEI Website',u:'https://rvinstitutions.com/',i:'🌐'},{l:'About RVCE',a:'about_rvce',i:'🏫'}];
        break;
    case 'about_rvce':
        r.text += T("RVCE — engineering excellence since 1963! 🔧\n📍 16.85 acres on Mysuru Road, Bengaluru\n🏆 NAAC A+ | NIRF 101-150\n🎓 16 UG + 14 PG programs\n📄 100+ Patents | 20 Centres of Excellence",
            "RV College of Engineering, established in 1963, is situated on 16.85 acres on Mysuru Road, Bengaluru.\n\n• Accreditation: NAAC A+ Grade, NBA Accredited\n• Ranking: NIRF 101-150, #1 Private College (IIRF 2025)\n• Programs: 16 B.E., 14 M.Tech/MCA, PhD\n• Research: 100+ Patents, 20 Centres of Excellence");
        r.buttons = [{l:'Rankings',a:'ranking',i:'🏆'},{l:'Vision & Mission',a:'vision',i:'🎯'},{l:'Research',a:'research',i:'🔬'},{l:'Website',u:'https://rvce.edu.in/about_us/',i:'🌐'}]; break;
    case 'vision':
        r.text += T("RVCE's vision? Tech + Innovation + Sustainability = Future! 🚀","Vision: "+KB.general.vision); break;
    case 'principal':
        r.text += T("Dr. K.N. Subramanya is the Principal! With 34+ years experience, he leads the team! ⚓",
            "The Principal of RVCE is Dr. K.N. Subramanya.\n\nHe holds a B.E., M.Tech., MBA, and Ph.D., bringing over 34 years of experience in teaching, research, and administration.\n\nContact: principal@rvce.edu.in");
        r.buttons = [{l:'About Principal',u:'https://rvce.edu.in/about-k_n_subramanya/',i:'👨‍🏫'}]; break;
    case 'ranking':
        r.text += T("RVCE is killing it! 🏆","RVCE Rankings:");
        r.text += "\n• "+KB.general.ranking+"\n• "+KB.general.accreditation; break;
    case 'accreditation':
        r.text += T("RVCE scored the top marks! 💎","Accreditation Details:");
        r.text += "\n• "+KB.general.accreditation+"\n• "+KB.general.status; break;
    case 'timings':
        r.text += T("⏰ "+KB.general.timings,"College timings: "+KB.general.timings); break;
    case 'trust':
        r.text += T("RVCE is powered by RSST! 🏛️","RVCE is managed by "+KB.general.trust+".");
        r.buttons = [{l:'RVEI Website',u:'https://rvei.edu.in/',i:'🌐'}]; break;
    case 'research':
        r.text += T("Research at RVCE is 🔥!","Research Highlights:");
        r.text += "\n• "+KB.general.research+"\n• Domains: "+KB.general.researchDomains;
        r.buttons = [{l:'Centres of Excellence 🔬',a:'centres_of_excellence',i:'🧪'},{l:'Research Centres',u:'https://rvce.edu.in/research-centres',i:'🌐'}]; break;
    case 'centres_of_excellence':
        r.text += T("RVCE has 20 Centres of Excellence! 🔬 Here are the key ones:","Centres of Excellence (COEs):");
        r.text += "\n• " + KB.general.coes.join("\n• ");
        r.text += "\n\n**Industry Competence Centres:**\n• " + KB.general.cocs.join("\n• ");
        r.buttons = [{l:'Research Home',a:'research',i:'🔬'},{l:'Full List',u:'https://rvce.edu.in/research-centres',i:'🌐'}]; break;
    case 'admissions':
        r.text += T("Let's get you enrolled! 🎓","Admission Information:");
        r.buttons = [{l:'UG (B.E.)',a:'ugAdm',i:'🎓'},{l:'PG (M.Tech)',a:'pgAdm',i:'📘'},{l:'MCA',a:'mca',i:'💻'},{l:'PhD',a:'phd',i:'🧪'},{l:'Admissions Page',u:KB.admissions.url,i:'🌐'}]; break;
    case 'ugAdm':
        r.text += T("B.E. admission details 📋:","UG Admission:");
        r.text += "\n• Eligibility: "+KB.admissions.ug.eligibility+"\n• Exams: "+KB.admissions.ug.exams+"\n• "+KB.admissions.ug.quotas;
        r.buttons = [{l:'View Programs',a:'ugPrograms',i:'📋'},{l:'Apply',u:KB.admissions.url,i:'🌐'}]; break;
    case 'pgAdm':
        r.text += T("M.Tech time! 🚀","PG Admission:");
        r.text += "\n• Eligibility: "+KB.admissions.pg.eligibility+"\n• Exams: "+KB.admissions.pg.exams;
        r.buttons = [{l:'PG Programs',a:'pgPrograms',i:'📋'},{l:'Apply',u:KB.admissions.url,i:'🌐'}]; break;
    case 'jee':
        r.text += T("⚠️ JEE Mains is NOT accepted at RVCE! You need KCET, COMED-K, or Management Quota.","Important: JEE Mains scores are NOT considered for RVCE admission. Accepted exams: KCET (KEA), COMED-K, and Management Quota.");
        r.buttons = [{l:'Admission Info',a:'admissions',i:'🎓'}]; break;
    case 'examTypes':
        r.text += T("Ways to get in 🎯:","Admission Modes:");
        r.text += "\n• KCET (KEA) — Karnataka entrance\n• COMED-K — Private colleges\n• Management Quota\n• Special: CIWG/PIO/OCI/Nepal";
        r.buttons = [{l:'More Info',u:KB.admissions.url,i:'🌐'}]; break;
    case 'management_quota':
        r.text += T("Management Quota Seats 💰:","Management Quota Information:");
        r.text += "\n• Admission is based on academic performance and seat availability.\n• Fees: "+KB.admissions.fees;
        r.buttons = [{l:'Contact Admissions',a:'contact',i:'📞'},{l:'Admissions Page',u:KB.admissions.url,i:'🌐'}]; break;
    case 'cutoffs':
        r.text += T("Rankings & Cutoffs 📊:","KCET/COMEDK Cutoffs:");
        r.text += "\n• "+KB.admissions.cutoffs+"\n• Note: Cutoffs vary significantly by year and category.";
        r.buttons = [{l:'KEA Website',u:'https://cetonline.karnataka.gov.in/kea/',i:'🌐'},{l:'Admissions Info',a:'admissions',i:'🎓'}]; break;
    case 'scholarships':
        r.text += T("Scholarships & Aid 🎓:","Financial Support:");
        r.text += "\n• "+KB.placements.scholarships;
        r.buttons = [{l:'More Details',u:'https://rvce.edu.in/scholarships/',i:'🌐'}]; break;
    case 'lateral':
        r.text += T("Lateral Entry (Diploma) 🔄:","Admission for Diploma Holders:");
        r.text += "\n• Direct admission to 2nd year B.E.\n• Mandatory Requirement: DCET (Diploma CET) rank.";
        r.buttons = [{l:'Admissions Page',u:KB.admissions.url,i:'🌐'}]; break;
    case 'fees':
        r.text += T("Tuition fees depend on the admission quota:<br>• <strong>KCET:</strong> ~₹1,00,000 to ₹1,20,000 per year<br>• <strong>COMEDK:</strong> ~₹2,50,000 to ₹3,00,000 per year<br>• <strong>Management:</strong> Can exceed ₹10L depending on branch.<br><em>Note: Hostels cost an additional ₹1.1L - ₹1.3L per year.</em>",
            "Tuition fees depend on the admission quota:<br>• <strong>KCET:</strong> ~₹1,00,000 to ₹1,20,000 per year<br>• <strong>COMEDK:</strong> ~₹2,50,000 to ₹3,00,000 per year<br>• <strong>Management:</strong> ~₹16L to ₹70L total over 4 years.");
        r.buttons = [{l:'Admissions Info',a:'admissions',i:'🎓'}]; break;
    case 'placements_yearly':
        r.text += T("Here are the year-wise placement statistics for Computer Science & Engineering (2020-2025): 📊", "Year-wise Placement Statistics (CSE):");
        r.text += "\n\n**B.E. CSE (2024-25)**\n• Companies Visited: 91 | Offers Made: 190\n• Students Selected: 171\n• Avg Salary: 16.92 LPA | Max Salary: 67 LPA";
        r.text += "\n\n**B.E. CSE (2023-24)**\n• Companies Visited: 81 | Offers Made: 177\n• Students Selected: 166\n• Avg Salary: 15.81 LPA | Max Salary: 67 LPA";
        r.text += "\n\n**B.E. CSE (2022-23)**\n• Companies Visited: 103 | Offers Made: 225\n• Students Selected: 178\n• Avg Salary: 14.66 LPA | Max Salary: 48 LPA";
        r.text += "\n\n**B.E. CSE (2021-22)**\n• Companies Visited: 110 | Offers Made: 212\n• Students Selected: 179\n• Avg Salary: 14.12 LPA | Max Salary: 35.37 LPA";
        r.text += "\n\n**B.E. CSE (2020-21)**\n• Companies Visited: 95 | Offers Made: 202\n• Students Selected: 163\n• Avg Salary: 15.01 LPA | Max Salary: 32 LPA";
        r.text += "\n\n**M.Tech. CSE (2024-25*)**\n• Companies Visited: 16 | Offers Made: 14\n• Students Selected: 14\n• Avg Salary: 19.21 LPA | Max Salary: 24 LPA";
        r.text += "\n\n**M.Tech. CSE (2023-24)**\n• Companies Visited: 17 | Offers Made: 11\n• Students Selected: 11\n• Avg Salary: 15.13 LPA | Max Salary: 25 LPA";
        r.text += "\n\n**M.Tech. CSE (2022-23)**\n• Companies Visited: 14 | Offers Made: 15\n• Students Selected: 15\n• Avg Salary: 13.01 LPA | Max Salary: 26 LPA";
        r.text += "\n\n**M.Tech. CSE (2021-22)**\n• Companies Visited: 15 | Offers Made: 16\n• Students Selected: 16\n• Avg Salary: 11.05 LPA | Max Salary: 29.05 LPA";
        r.text += "\n\n**M.Tech. CSE (2020-21)**\n• Companies Visited: Data unavailable | Offers Made: Data unavailable\n• Students Selected: Data unavailable\n• Avg Salary: Data unavailable | Max Salary: Data unavailable";
        r.buttons = [{l:'Overall 2026 Placements',a:'placements',i:'💼'}]; break;
    case 'placements_future':
        r.text += T("Placement statistics for the 2027 batch (and beyond) are not yet available as the placement drives for these batches have not concluded. 📊", "Future Placement Statistics:");
        r.text += "\n• Currently, we have the ongoing 2026 placement data and the finalized 2025 data available.";
        r.buttons = [{l:'2026 Placements',a:'placements',i:'💼'}, {l:'Department-wise Stats',a:'dept_placements_list',i:'📊'}]; break;
    case 'dept_placements_list':
        r.text += T("Explore our department-wise placement statistics! 📊 Choose a category:", "Department-wise Placement Statistics - Select a category:");
        r.buttons = [
            {l:'Computing & IT 💻',a:'plcmt_group_comp',i:'💻'},
            {l:'Electrical & Comm 🔌',a:'plcmt_group_elec',i:'🔌'},
            {l:'Core Engineering ⚙️',a:'plcmt_group_core',i:'⚙️'},
            {l:'Back to Placements',a:'_back',i:'🔙'}
        ]; break;
    case 'plcmt_group_comp':
        r.text += T("Computing & IT Placement Stats:", "Computing & IT Placement Statistics:");
        r.buttons = [
            {l:'CSE 💻',a:'plcmt_cs',i:'💻'},
            {l:'ISE 💻',a:'plcmt_is',i:'💻'},
            {l:'AIML 🤖',a:'plcmt_aiml',i:'🤖'},
            {l:'All Departments',a:'dept_placements_list',i:'📊'}
        ];
        r.noMenu = true; break;
    case 'plcmt_group_elec':
        r.text += T("Electrical & Communication Placement Stats:", "Electrical & Communication Placement Statistics:");
        r.buttons = [
            {l:'ECE 📡',a:'plcmt_ec',i:'📡'},
            {l:'EEE 🔌',a:'plcmt_ee',i:'🔌'},
            {l:'Telecom 📶',a:'plcmt_et',i:'📶'},
            {l:'Instrumentation 🎛️',a:'plcmt_ei',i:'🎛️'},
            {l:'All Departments',a:'dept_placements_list',i:'📊'}
        ];
        r.noMenu = true; break;
    case 'plcmt_group_core':
        r.text += T("Core Engineering Placement Stats:", "Core Engineering Placement Statistics:");
        r.buttons = [
            {l:'Mechanical ⚙️',a:'plcmt_me',i:'⚙️'},
            {l:'Aerospace ✈️',a:'plcmt_ae',i:'✈️'},
            {l:'Civil 🏗️',a:'plcmt_cv',i:'🏗️'},
            {l:'Chemical 🧪',a:'plcmt_ch',i:'🧪'},
            {l:'BioTech 🧬',a:'plcmt_bt',i:'🧬'},
            {l:'Industrial (IEM) 🏭',a:'plcmt_im',i:'🏭'},
            {l:'All Departments',a:'dept_placements_list',i:'📊'}
        ];
        r.noMenu = true; break;
    case 'placements':
        r.text += T("Our record is legendary! 🚀","Placement Statistics:");
        r.text += "\n• Max: " + KB.placements.maxSalary + "\n• Avg: " + KB.placements.avgSalary + "\n• " + KB.placements.offers + "\n• " + KB.placements.companies;
        r.buttons = [{l:'Placement Training',u:KB.placements.url,i:'🌐'}]; break;
    case 'refund_policy':
        r.text += T("Refund policy follows AICTE rules! 💸<br><br>• Before start: Full refund (-₹1k)<br>• After start: Only if seat filled<br>• Document retention is BANNED.",
            "The Fee Refund Policy strictly follows <strong>AICTE Regulations</strong>.<br><br>• <strong>Before Course Start:</strong> Full refund minus a processing fee (max ₹1,00,0).<br>• <strong>After Course Start:</strong> Refundable only if the vacated seat is filled.<br>• <strong>Original Docs:</strong> By AICTE mandate, colleges cannot retain original certificates.");
        break;
    case 'syllabus_1st_sem':
        r.text += T("1st Year Syllabus (VTU 2022 Scheme) 📚<br><br>Physics & Chemistry cycles apply! Key subjects include Math, Electronics, C-Programming.",
            "The <strong>1st Year B.E. Syllabus</strong> follows the VTU 2022 Scheme.<br><br>Students are divided into Physics and Chemistry Cycles. Key subjects include:<br>• Engineering Mathematics<br>• Basic Electronics/Electrical<br>• Programming in C");
        r.buttons = [{l:'Download Syllabus PDF',u:'https://rvce.edu.in/sites/default/files/FIRST-YEAR-SYLLABUS-BOOK-2022-SCHEMEFORPRINT.pdf',i:'📑'}]; break;
    case 'faculty':
        r.text += T("Are you looking for the Deans or Head of Departments (HODs)? 🧑‍🏫", "Please specify what you are looking for:");
        r.buttons = [{l:'Deans List 🎓',a:'deans_list',i:'👨‍🏫'},{l:'HODs List 📚',a:'hods_list',i:'👩‍🏫'}]; 
        r.noMenu = true; break;
    case 'deans_list':
        r.text += T("Here are the top commanders at RVCE! ⚓\n\n","RVCE Deans & Key Executives:\n\n");
        r.text += "• **Dean Academics:** Dr. Shanmukha Nagaraj\n• **Dean Student Affairs:** Dr. B.M. Sagar\n• **Dean R&D:** Dr. M Uttara Kumari\n• **Dean Placement & Training:** Dr. D. Ranganath\n• **Dean Skill Dev:** Dr. M Krishna";
        r.buttons = [{l:'HODs List 📚',a:'hods_list',i:'👩‍🏫'}, {l:'Key Executives Page',u:'https://rvce.edu.in/about_us/key-executives/',i:'🌐'}]; break;
    case 'hods_list':
        r.text += T("Here are the Heads of Departments (HODs): 📚\n\n","RVCE Head of Departments:\n\n");
        r.text += "• **CSE:** Dr. Shanta Rangaswamy\n• **AIML:** Dr. Sathish Babu B\n• **ISE:** Dr. Mamatha G S\n• **ECE:** Dr. Ravish Aradhya H V\n• **Mechanical:** Dr. Shanmukha N\n• **Civil:** Dr. Anjaneyappa\n• **EEE:** Dr. J N Hemalatha\n• **Aerospace:** Dr. Supreeth R\n• **Biotech:** Dr. Nagashree N Rao\n• **Chemical:** Dr. Jagadish H Patil\n• **MCA:** Dr. Jasmine K S\n• **Physics:** Dr. Shireesha Golla\n• **Maths:** Dr. Jayalatha G\n• **Chemistry:** Dr. Mahesh R";
        r.buttons = [{l:'Deans List 🎓',a:'deans_list',i:'👨‍🏫'}, {l:'Key Executives Page',u:'https://rvce.edu.in/about_us/key-executives/',i:'🌐'}]; break;
    case 'dress_code':
        r.text += T("Dress sharp! 👔 No shorts or ripped jeans. Casuals are okay, but labs require safety gear (Khakis/Aprons)!",
            "As an institution affiliated with <strong>VTU</strong>, RVCE enforces a dress code that aligns with professional and academic decorum.<br><br>• <strong>General Wear:</strong> Clean, neat, and non-revealing casual wear is permitted.<br>• <strong>Prohibited:</strong> Shorts, ripped jeans, revealing tops.<br>• <strong>Labs/Workshops:</strong> Closed-toe shoes and safety uniforms mandatory.");
        break;
    case 'anti_ragging':
        r.text += T("Ragging is a crime! 🛑 Total ban at RVCE.<br><br>🚨 National Helpline: 1800-180-5522",
            "RVCE strictly adheres to the <strong>UGC Regulations on Curbing the Menace of Ragging (2009)</strong>. Ragging is a criminal offense.<br><br>🚨 <strong>National 24x7 Anti-Ragging Helpline:</strong> 1800-180-5522<br>Email: helpline@antiragging.in");
        r.buttons = [{l:'Anti-Ragging Portal',u:'https://www.antiragging.in/',i:'🛑'}]; break;
    case 'innovationTeams':
        r.text += T("RVCE = Innovation! 💡 Join a team:","Innovative Student Teams:");
        r.text += "\n• " + KB.campus.teams.join("\n• ");
        r.buttons = [{l:'See Innovation',u:KB.campus.urls.innovation,i:'🌐'}]; break;
    case 'culturalLife':
        r.text += T("Student life is more than classes! 🎭","Cultural Activities & Clubs:");
        r.text += "\n• Clubs: " + KB.campus.clubs.join(", ") + "\n• Fest: " + KB.campus.fest;
        r.buttons = [{l:'Cultural Teams',u:KB.campus.urls.cultural,i:'🌐'}]; break;
    case 'contact':
        r.text += T("Here's how to reach RVCE! 📞","Contact Information:");
        r.text += "\n📍 "+KB.contact.address+"\n📱 "+KB.contact.phone+"\n📧 "+KB.contact.email+"\n🎓 Admissions: "+KB.contact.admissionPhone;
        r.buttons = [{l:'Website',u:KB.contact.website,i:'🌐'},{l:'Email',u:'mailto:'+KB.contact.email,i:'📧'}]; break;
    case 'website':
        r.text += T("Here you go! 🌐","Official Website:");
        r.buttons = [{l:'rvce.edu.in',u:KB.contact.website,i:'🌐'}]; break;
    case 'intake':
        r.text += T("RVCE admits 2000+ students every year! 🎓","Annual intake: "+KB.general.intake+"."); break;
    case 'ug_disambiguation':
        r.text += T("Academic explorer! 🗺️ Are you looking to see the **Programmes List** or do you need **Admission Details** for UG?","Would you like to explore Undergraduate (B.E.) Programmes or check Admission Details?");
        r.buttons = [
            {l:'Programmes List 📜',a:'ugPrograms',i:'📋'},
            {l:'Admission Process 🎓',a:'ugAdm',i:'🎫'}
        ]; 
        return r;
    case 'ugPrograms':
        r.text += T("RVCE offers 16 Undergraduate (B.E.) programs including:\n• Computer Science & Engg (CSE)\n• Electronics & Communication (ECE)\n• Information Science & Engg (ISE)\n• Mechanical Engineering (ME)\n• Civil Engineering (CV)\n• Biotechnology (BT)\n• AI & Machine Learning (AIML)","RVCE offers 16 B.E. programs including CSE, ECE, ISE, ME, CV, BT, and AIML. See the full list below:");
        r.buttons = [
            {l:'View All on Website',u:'https://rvce.edu.in/programmes/',i:'🌐'},
            {l:'Admission Info',a:'ugAdm',i:'🎓'}
        ]; break;
    case 'pgPrograms':
        r.text += T("RVCE offers 14 Postgraduate programs:\n• M.Tech (CSE, VLSI, Power Electronics, etc.)\n• Master of Computer Applications (MCA)\n• Ph.D. Research Programs","RVCE offers 14 PG programs including M.Tech in various specializations, MCA, and Ph.D. research options.");
        r.buttons = [{l:'PG Programs Page',u:'https://rvce.edu.in/programmes/',i:'🌐'},{l:'MCA Details',a:'mca',i:'💻'}]; break;
    case 'mca':
        r.text += T("Master of Computer Applications (MCA) 💻:","MCA Details:");
        r.text += "\n• Duration: 2 Years\n• " + KB.admissions.mca.eligibility;
        r.buttons = [{l:'MCA Dept Page',u:'https://rvce.edu.in/department/mca/main-department/',i:'🌐'}]; break;
    case 'phd':
        r.text += T("Doctoral Programs (Ph.D.) 🧪:","Research Programs:");
        r.text += "\n• " + KB.admissions.phd.info;
        r.buttons = [{l:'Research Centres',a:'research',i:'🔬'}]; break;
    case 'departments':
        r.text += T("Explore our departments! 📚 Choose a cycle to see details or visit the main catalog:","Academic Departments:");
        r.buttons = [{l:'UG (B.E.) List',a:'ugPrograms',i:'📋'},{l:'PG Programs List',a:'pgPrograms',i:'📘'},{l:'Official Website',u:'https://rvce.edu.in/programmes/',i:'🌐'}]; break;
    case 'campusLife':
        r.text += T("Life at RVCE is vibrant! 🏕️","Student Experience & Campus Life:");
        r.text += "\n• Cultural Clubs\n• Technical Innovation Teams\n• Annual Fest: " + KB.campus.fest;
        r.buttons = [{l:'Cultural Clubs',a:'culturalLife',i:'🎭'},{l:'Innovation Teams',a:'innovationTeams',i:'💡'},{l:'Student Societies',a:'professional_societies',i:'🤝'}]; break;
    case 'professional_societies':
        r.text += T("Get professional! 🤝 Join a chapter:","Professional Student Societies:");
        r.text += "\n• " + KB.campus.societies.join("\n• ") + "\n\nThese chapters host international conferences, workshops, and networking events regularly.";
        r.buttons = [{l:'Innovation Teams',a:'innovationTeams',i:'💡'},{l:'Cultural Clubs',a:'culturalLife',i:'🎭'}]; break;
    case 'hostels':
        r.text += T("Home away from home 🏠:","Hostel Facilities:");
        r.text += "\n• Boys: " + KB.hostels.boys + "\n• Girls: " + KB.hostels.girls + "\n• Amenities: " + KB.hostels.amenities;
        r.buttons = [{l:'See Facilities',u:KB.hostels.url,i:'🌐'}]; break;
    case 'stats_disambiguation':
        r.text += T("Check out the numbers! 📊","RVCE Statistics:");
        r.buttons = [{l:'Placement Stats',a:'placements',i:'💼'},{l:'NIRF & Rankings',a:'ranking',i:'🏆'},{l:'Upcoming Events 📅',a:'upcoming_events',i:'🔥'}]; break;
    case 'upcoming_events':
        r.text += T("What's brewing at RVCE? 📅","Upcoming Events Calendar 2026:");
        KB.events.forEach(e => {
            r.text += `\n• **${e.name}** — ${e.date} (${e.type})`;
        });
        r.buttons = [{l:'Placement Scene',a:'placements',i:'💼'},{l:'Main Menu',a:'menu',i:'📋'}]; break;
    case 'facilities':
        r.text += T("Top-notch facilities 🏢:","Campus Infrastructure:");
        r.text += "\n• " + KB.facilities.list.join("\n• ");
        r.buttons = [{l:'Full Details',u:KB.facilities.url,i:'🌐'}]; break;
    case 'vtu':
        r.text += T("VTU affiliated but autonomous for UG! 🏛️","RVCE is affiliated to VTU (Visvesvaraya Technological University) and has Autonomous status for UG programs."); break;
    case 'transport':
        r.text += T("Getting to RVCE 🚌:\n• Located on Mysuru Road, ~13 km from city center\n• BMTC buses: Multiple routes to RVCE stop\n• Nearest Metro: Kengeri station\n• Autos & cabs: Easily available\n• Near NICE Road junction",
            "How to Reach RVCE:\n• Location: Mysuru Road, ~13 km from Bengaluru city center\n• Bus: BMTC bus routes serve the RVCE stop directly\n• Metro: Kengeri Metro station is the nearest\n• Auto/Cab: Easily accessible via Mysuru Road\n• Near NICE Road junction"); break;
    case 'wifi':
        r.text += T("Yes! Wi-Fi everywhere! 📶 Campus + Hostels!","Wi-Fi is available across the campus and in hostel blocks."); break;
    case 'food':
        r.text += T("Hungry? 🍛 RVCE has a food court + veg mess in hostels. Plenty of options around too!","RVCE has a food court on campus and vegetarian mess in hostels. Multiple eateries are also available nearby."); break;
    case 'exam':
        r.text += T("Exams? 📝 Semester system with CIE + SEE. Being autonomous, RVCE sets its own papers!","RVCE follows a semester system with Continuous Internal Evaluation (CIE) and Semester End Examination (SEE). As an autonomous institution, it designs its own syllabus and sets examination papers."); break;
    case 'lateral':
        r.text += T("Diploma holders can join 2nd year via DCET! 🔄","Lateral entry to 2nd year B.E. is available for diploma holders through DCET (Diploma CET).");
        r.buttons = [{l:'Admissions',u:KB.admissions.url,i:'🌐'}]; break;
    case 'nri':
        r.text += T("International students welcome! 🌍 CIWG/PIO/OCI/Nepal quotas available!","International admissions: Quotas available for CIWG, PIO, OCI, and Nepal Citizens.");
        r.buttons = [{l:'Admissions',u:KB.admissions.url,i:'🌐'}]; break;
    case 'library':
        r.text += T("The Central Library is a knowledge fortress! 📚","Central Library:");
        r.text += "\n• 100,000+ books, journals, and e-resources\n• Digital library with IEEE, Springer, Elsevier access\n• Reading rooms and group study areas\n• Open during college hours";
        r.buttons = [{l:'Facilities',u:KB.facilities.url,i:'🌐'}]; break;
    case 'sports':
        r.text += T("Sporty campus! 🏅","Sports Facilities:");
        r.text += "\n• 400m athletic track\n• Cricket & Football grounds\n• Basketball, Volleyball, Badminton courts\n• Gymnatorium with modern equipment\n• Table Tennis, Chess";
        r.buttons = [{l:'Sports Info',u:'https://rvce.edu.in/facilities/sports_and_gymnatorium/',i:'🌐'}]; break;
    case 'autonomous':
        r.text += T("RVCE is autonomous for UG — they design their own syllabus and exams! 📋 For PG, it's affiliated to VTU.","RVCE has Autonomous status for UG programs, meaning it designs its own curriculum and conducts its own examinations. PG programs are affiliated to VTU."); break;
    // ===== PARENT & GEN-Z SPECIFIC RESPONSES =====
    case 'safety':
        r.text += T("Your safety is top priority at RVCE! 🛡️","Campus Safety at RVCE:");
        r.text += "\n• " + KB.safety.cctv + "\n• " + KB.safety.wardens + "\n• " + KB.safety.healthCentre + "\n• " + KB.safety.grievance + "\n• " + KB.safety.antiRagging;
        r.buttons = [{l:'Health Centre Details 🏥',a:'health_centre',i:'🩺'},{l:'Anti-Ragging',a:'anti_ragging',i:'🛑'}]; break;
    case 'health_centre':
        r.text += T("Health is wealth! 🏥 The on-campus centre is solid:","Health Centre Facilities:");
        r.text += "\n• " + KB.safety.healthDetails.doctor + "\n• Services: " + KB.safety.healthDetails.services.join(", ") + "\n• Partnership: " + KB.safety.healthDetails.hospital + "\n• 24/7 Ambulance available for emergencies.";
        r.buttons = [{l:'Safety Info',a:'safety',i:'🛡️'}]; break;
    case 'attendance':
        r.text += T("Attendance matters at RVCE! 📋 It's strict but keeps you on track!","Attendance Policy:");
        r.text += "\n• " + KB.attendance.requirement + "\n• " + KB.attendance.consequence + "\n• " + KB.attendance.tracking;
        break;
    case 'roi':
        r.text += T("Is RVCE paisa vasool? ABSOLUTELY! 💎\n\n","Return on Investment:\n\n");
        r.text += "• 2025 Highest Package: " + KB.placements2025.maxSalary + "\n• Avg Package: " + KB.placements2025.avgSalary + "\n• " + KB.placements2025.companies + "\n• Top recruiters: Google, Microsoft, Amazon, Goldman Sachs\n• 100+ Patents, 20 Centres of Excellence\n• NAAC A+ accreditation";
        r.buttons = [{l:'Placements',a:'placements',i:'💼'},{l:'Fee Structure',a:'fees',i:'💰'}]; break;
    case 'girls_hostel':
        r.text += T("Girls hostel deets! 🏠 Safe & well-managed!","Girls Hostel Information:");
        r.text += "\n• DJ Block (On-campus): " + KB.hostelDetails.girlsBlocks.djBlock + "\n• Krishna Garden (Off-campus, Pattanagere): " + KB.hostelDetails.girlsBlocks.krishnaGarden + "\n• Fees (Triple): " + KB.hostelDetails.fees.tripleSharing + "\n• Fees (Double): " + KB.hostelDetails.fees.doubleSharing + "\n• Facilities: " + KB.hostelDetails.facilities + "\n• Residential wardens & CCTV in all blocks\n• Strict curfew timings enforced for safety";
        r.buttons = [{l:'Safety Info',a:'safety',i:'🛡️'},{l:'All Hostels',a:'hostels',i:'🏠'}]; break;
    case 'nearby':
        r.text += T("What's around RVCE? Plenty! 📍","Nearby Areas & Amenities:");
        r.text += "\n• Areas: " + KB.nearby.areas + "\n• Food: " + KB.nearby.food + "\n• Shopping: " + KB.nearby.shopping + "\n• Hospitals: " + KB.nearby.hospitals + "\n• Connectivity: " + KB.nearby.connectivity;
        r.buttons = [{l:'Transport',a:'transport',i:'🚌'},{l:'Food Court',a:'food',i:'🍛'}]; break;
    case 'internship':
        r.text += T("Internships? RVCE students are everywhere! 🧑‍💻","Internship Opportunities:");
        r.text += "\n• Mandatory 6-8 week industry internship in curriculum\n• Placement & Training cell assists with internship placements\n• Top companies like Google, Microsoft, Amazon, Bosch offer internships\n• Being in Bangalore (India's tech capital) = tons of opportunities\n• Many students do internships at IITs, IISc, DRDO, ISRO";
        r.buttons = [{l:'Placements',a:'placements',i:'💼'},{l:'Innovation Teams',a:'innovationTeams',i:'💡'}]; break;
    case 'startup':
        r.text += T("Startup vibes are real at RVCE! 🚀","Entrepreneurship & Startup Ecosystem:");
        r.text += "\n• Active E-Cell (Entrepreneurship Cell) organizes events & workshops\n• Innovation & Incubation Centre for student startups\n• Annual hackathons and startup pitch competitions\n• Bangalore = India's startup capital — perfect ecosystem\n• Many RVCE alumni have founded successful startups";
        r.buttons = [{l:'Innovation Teams',a:'innovationTeams',i:'💡'},{l:'Campus Life',a:'campusLife',i:'🏕️'}]; break;
    case 'peer_quality':
        r.text += T("The crowd at RVCE is top-tier! 🎯 Competitive AF but also super helpful!","Peer Quality at RVCE:");
        r.text += "\n• Highly competitive admission (KCET/COMEDK) ensures quality intake\n• 2000+ students admitted annually from top rank holders\n• Strong coding culture — students participate in ICPC, GSoC, hackathons\n• Active on competitive platforms (Codeforces, LeetCode, CodeChef)\n• Collaborative environment with study groups and project teams";
        r.buttons = [{l:'Placements',a:'placements',i:'💼'},{l:'Rankings',a:'ranking',i:'🏆'}]; break;
    case 'worth_it':
        r.text += T("Is RVCE worth it? Let me put it this way — it SLAPS! 🔥\n\n","Is RVCE Worth Joining?\n\n");
        r.text += "✅ NAAC A+ | NIRF 101-150 | #1 Private (IIRF)\n✅ 2025: ₹67 LPA highest, 260+ companies\n✅ 2024: ₹92 LPA highest, 75% placement rate\n✅ Autonomous (own syllabus, industry-relevant)\n✅ Bangalore location = internship & job hub\n✅ 100+ patents, 20 Centres of Excellence\n✅ Strong alumni network in top MNCs";
        r.buttons = [{l:'Placements',a:'placements',i:'💼'},{l:'Rankings',a:'ranking',i:'🏆'},{l:'ROI',a:'roi',i:'💎'}]; break;
    case 'best_branch':
        r.text += T("Which branch is the GOAT? 🔝 Here's the lowdown:","Branch Selection Guide:");
        r.text += "\n\n🔥 **Highest Demand (Top Packages):** CSE, ISE, AIML, CSDS, CSCY\n💻 **Strong Tech:** ECE, ETE (with good coding skills)\n⚙️ **Core Engineering:** Mech, Civil, EEE, Chemical, Aero (strong in core companies like Bosch, ABB, Boeing)\n🧬 **Niche:** Biotech, IEM\n\n💡 Tip: Branch matters less than what YOU do — coding skills, projects, and internships make the real difference!";
        r.buttons = [{l:'All Departments',a:'departments',i:'📚'},{l:'Placements',a:'placements',i:'💼'}]; break;
    case 'parking':
        r.text += T("Got a ride? 🅿️ RVCE has parking!","Vehicle & Parking Info:");
        r.text += "\n• Dedicated two-wheeler and four-wheeler parking areas\n• Bikes and scooties are commonly used by students\n• Parking is free for students with valid college ID\n• Helmets mandatory as per campus rules";
        break;
    case 'part_time':
        r.text += T("Side hustle while studying? Smart move! 💼","Part-Time Work Opportunities:");
        r.text += "\n• Bangalore has tons of freelancing and part-time opportunities\n• Many students freelance in web dev, graphic design, tutoring\n• Coding contests and hackathons often have cash prizes\n• Some students do remote internships alongside studies\n• Note: Academic workload at RVCE is heavy — balance wisely!";
        r.buttons = [{l:'Internships',a:'internship',i:'🧑‍💻'},{l:'Startup Culture',a:'startup',i:'🚀'}]; break;
    case 'alumni':
        r.text += T("RVCE alumni are EVERYWHERE — from Google to ISRO! 🤝","Alumni Network:");
        r.text += "\n• 60+ years of alumni across the globe (Est. 1963)\n• Strong presence in top tech companies (Google, Microsoft, Amazon, Flipkart)\n• Active alumni chapters in Bangalore, Mumbai, USA, Europe\n• Alumni mentorship programs for current students\n• Regular alumni meets and networking events\n• Many alumni are founders of successful startups";
        r.buttons = [{l:'Placements',a:'placements',i:'💼'},{l:'About RVCE',a:'about',i:'🏫'}]; break;
    case 'college_compare':
        r.text += T("RVCE vs others? Here's the tea ☕:","RVCE in Comparison:");
        r.text += "\n\n📊 **RVCE Strengths:**\n• #1 Private Engg College (IIRF 2025)\n• NAAC A+ (higher than most private colleges)\n• Autonomous status — industry-relevant curriculum\n• ₹67 LPA highest (2025), ₹92 LPA (2024)\n• 260+ companies visit campus\n\n🏛️ RVCE is consistently ranked alongside PES, MSRIT, and BMS as Bangalore's top private engineering colleges. It edges ahead in autonomy, research output, and industry connections.";
        r.buttons = [{l:'Rankings',a:'ranking',i:'🏆'},{l:'Placements',a:'placements',i:'💼'},{l:'Is It Worth It?',a:'worth_it',i:'⭐'}]; break;
    case 'menu':
        r.text = T("How can I help? Choose a topic:","Main Menu — Choose a topic:");
        r.noMenu = true; return r;
    default:
        // Handle department-specific HOD requests
        if (id && id.startsWith('hod_')) {
            const c = id.replace('hod_','');
            const d = KB.departments.ug.find(x=>x.c===c);
            if (d && d.hod) {
                r.text += T(`The Head of Department for ${d.n} is **${d.hod}**! 👨‍🏫`, `The HOD for **${d.n}** is **${d.hod}**.`);
                r.buttons = [{l:'Department Page',u:d.u,i:'🌐'}, {l:'All HODs',a:'hods_list',i:'👩‍🏫'}];
                return r;
            } else {
                r.text += T(`I don't have the specific HOD name for ${d?d.n:c} saved. Let me show you the full list! 📚`, "Please check the full HODs list for that information.");
                r.buttons = [{l:'HODs List',a:'hods_list',i:'👩‍🏫'}, {l:'Key Executives',u:'https://rvce.edu.in/about_us/key-executives/',i:'🌐'}];
                return r;
            }
        }
        // Handle department links
        if (id && id.startsWith('dept_')) {
            const c = id.replace('dept_','');
            const d = KB.departments.ug.find(x=>x.c===c);
            if (d) { 
                r.text += T(d.n+" — great choice! 🎯","Department: "+d.n);
                r.buttons = [{l:'Department Page',u:d.u,i:'🌐'},{l:'All Departments',a:'departments',i:'📚'}];
                return r; 
            }
        }
        r.text = T("Hmm 🤔 I didn't get that. Try one of these:","I didn't understand that query. Here are some options:");
        r.noMenu = true; return r;
    }

    // Append dynamic follow-up suggestions
    const followUps = getFollowUps(id);
    if (!r.noMenu) {
        r.buttons = [...(r.buttons || []), ...followUps];
    }

    return r;
}

/* =============== DOM =============== */
const $=s=>document.getElementById(s);
const chatW=$('chatWindow'),fab=$('chatFab'),badge=$('fabBadge'),msgs=$('chatMessages');
const typing=$('typingIndicator'),inp=$('userInput'),sendB=$('sendBtn');
const toneS=$('toneSwitch'),toneL=$('toneLabel'),emojiB=$('emojiBtn'),micB=$('micBtn'),sugs=$('quickSuggestions');

fab.addEventListener('click',()=>{chatOpen=!chatOpen;chatW.classList.toggle('open',chatOpen);fab.classList.toggle('active',chatOpen);if(chatOpen){badge.classList.add('hidden');inp.focus();}});
toneS.addEventListener('click',()=>{tone=tone==='funny'?'pro':'funny';toneS.classList.toggle('pro',tone==='pro');toneL.textContent=tone==='funny'?'Funny':'Pro';});
emojiB.addEventListener('click',()=>{disOld();showMenu();});
sugs.querySelectorAll('.suggestion-chip').forEach(c=>c.addEventListener('click',()=>process(c.dataset.query)));
sendB.addEventListener('click',()=>{const t=inp.value.trim();if(t)process(t);});
inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();const t=inp.value.trim();if(t)process(t);}});

/* =============== VOICE RECOGNITION =============== */
let recognition;
let isRecording = false;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isRecording = true;
        micB.classList.add('recording');
        inp.placeholder = "Listening... 🎤";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        inp.value = transcript;
        setTimeout(() => process(transcript), 500);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        stopRecording();
    };

    recognition.onend = () => {
        stopRecording();
    };
}

function stopRecording() {
    isRecording = false;
    if(recognition) recognition.stop();
    micB.classList.remove('recording');
    inp.placeholder = "Ask me anything about RVCE...";
}

micB.addEventListener('click', () => {
    if (!recognition) {
        alert("Speech Recognition not supported in this browser. Try Chrome!");
        return;
    }
    if (isRecording) {
        stopRecording();
    } else {
        recognition.start();
    }
});

function process(text) {
    // MODERATION CHECK — runs BEFORE intent matching (use original text)
    const mod = checkModeration(text);
    if (mod.blocked) {
        addUser(text);
        inp.value = '';
        disOld();
        showTyp();
        setTimeout(()=>{hideTyp();addBotWarn(getModerationResponse(mod.type));},600);
        return;
    }

    // Always show the user's actual input text (no auto-replacement)
    addUser(text);
    inp.value = '';
    disOld();

    // Classify the intent with confidence detection
    const result = classifyIntent(text);

    if (result.type === 'exact') {
        // High confidence — exact keyword or button click, respond directly
        const id = result.id;
        if (id === 'greet') { botReply(getResponse('greet')); setTimeout(showMenu,1200); }
        else if (id === 'menu') { setTimeout(showMenu,300); }
        else { botReply(getResponse(id)); }
    } else if (result.type === 'keyword') {
        // Medium confidence — keyword found in sentence
        // Show "Did you mean?" header + actual content below
        const primaryId = result.id;
        const primaryLabel = INTENT_LABELS[primaryId] || primaryId;
        const actualResponse = getResponse(primaryId);
        
        // Build combined response: "Did you mean?" + actual content
        const r = { text: '', buttons: [], noMenu: false };
        r.text = T(
            "I think you meant **" + primaryLabel + "**! 🤔\n\n" + (actualResponse.text || ''),
            "Did you mean **" + primaryLabel + "**?\n\n" + (actualResponse.text || '')
        );
        // Use the actual response buttons + add alternatives
        const otherSuggestions = findSuggestions(text).filter(s => s !== primaryId).slice(0, 2);
        r.buttons = [...(actualResponse.buttons || [])];
        if (otherSuggestions.length > 0) {
            otherSuggestions.forEach(sid => {
                r.buttons.push({ l: INTENT_LABELS[sid] || sid, a: sid, i: '🔍' });
            });
        }
        r.noMenu = actualResponse.noMenu || false;
        botReply(r);
    } else if (result.type === 'fuzzy') {
        // Low confidence — no exact keyword, fuzzy match found
        const r = { text: '', buttons: [], noMenu: false };
        r.text = T(
            "Hmm 🤔 I didn't quite get that! Did you mean:",
            "I couldn't find an exact match. Did you mean:"
        );
        r.buttons = result.suggestions.map(sid => ({
            l: INTENT_LABELS[sid] || sid,
            a: sid,
            i: '🔍'
        }));
        botReply(r);
    } else {
        // No match at all
        const r = { text: '', buttons: [], noMenu: false };
        r.text = T(
            "Sorry, I couldn't find anything for that! 😅 Try something from the menu:",
            "I'm sorry, I don't have information on that topic. Please choose from the menu below:"
        );
        r.noMenu = true;
        botReply(r);
        setTimeout(showMenu, 600);
    }
}

/* =============== MESSAGE RENDERING =============== */
function addUser(text) {
    const m=document.createElement('div'); m.className='message user';
    m.innerHTML=`<div class="msg-av"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="msg-body"><div class="msg-bubble">${esc(text)}</div></div>`;
    msgs.appendChild(m); scr();
}

function addBot(text, buttons, noMenu) {
    const m=document.createElement('div'); m.className='message bot';
    let bh='';
    if(buttons && buttons.length){
        bh='<div class="msg-btns">';
        buttons.forEach(b=>{
            if(b.u) bh+=`<button class="act-btn lk" onclick="window.open('${b.u}','_blank')">${b.i||'🔗'} ${b.l}</button>`;
            else bh+=`<button class="act-btn" data-action="${b.a}">${b.i||''} ${b.l}</button>`;
        });
        // Only add universal menu if not explicitly suppressed AND not already in button list
        const hasMenu = buttons.some(b => b.a === 'menu');
        if(!noMenu && !hasMenu) {
            bh+=`<button class="act-btn mn" data-action="menu">📋 Main Menu</button>`;
        }
        bh+='</div>';
    } else if(!noMenu) {
        bh='<div class="msg-btns"><button class="act-btn mn" data-action="menu">📋 Main Menu</button></div>';
    }
    
    // Simple markdown: **bold** and \n to <br>
    let fmt = (text||'').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    fmt = fmt.replace(/\n/g,'<br>');
    
    m.innerHTML=`<div class="msg-av"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div class="msg-body"><div class="msg-bubble">${fmt}</div>${bh}</div>`;
    msgs.appendChild(m);
    m.querySelectorAll('.act-btn[data-action]').forEach(b=>b.addEventListener('click',()=>{disOld();handleAction(b.dataset.action);}));
    scr();
}

function addBotWarn(text) {
    const m=document.createElement('div'); m.className='message bot';
    m.innerHTML=`<div class="msg-av"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div class="msg-body"><div class="msg-bubble warn">${text.replace(/\n/g,'<br>')}</div><div class="msg-btns"><button class="act-btn mn" data-action="menu">📋 Main Menu</button></div></div>`;
    msgs.appendChild(m);
    m.querySelectorAll('.act-btn[data-action]').forEach(b=>b.addEventListener('click',()=>{disOld();handleAction(b.dataset.action);}));
    scr();
}

function botReply(r) {
    if(!r)return;showTyp();
    const d=400+Math.min((r.text||'').length*4,700);
    setTimeout(()=>{hideTyp();addBot(r.text,r.buttons,r.noMenu);},d);
}

function showMenu() {
    const btns=[
        {l:'About RVCE',a:'about',i:'🏫'},{l:'Admissions',a:'admissions',i:'🎓'},
        {l:'Departments',a:'departments',i:'📚'},{l:'Placements',a:'placements',i:'💼'},
        {l:'Campus Life',a:'campusLife',i:'🏕️'},{l:'Hostels',a:'hostels',i:'🏠'},
        {l:'Contact',a:'contact',i:'📞'},{l:'Website',u:KB.contact.website,i:'🌐'}
    ];
    showTyp();
    setTimeout(()=>{hideTyp();addBot(T("Pick your adventure! 🗺️","How can I help? Choose a topic:"),btns,true);},400);
}

function handleAction(a) { if(a==='menu'){showMenu();return;} const r=getResponse(a); if(!r){showMenu();return;} botReply(r); }
function disOld() { msgs.querySelectorAll('.act-btn:not([disabled])').forEach(b=>b.disabled=true); }
function showTyp() { typing.classList.add('show'); scr(); }
function hideTyp() { typing.classList.remove('show'); }
function scr() { requestAnimationFrame(()=>{msgs.scrollTop=msgs.scrollHeight;}); }
function esc(t) { const d=document.createElement('div');d.textContent=t;return d.innerHTML; }

/* =============== PARTICLES =============== */
const cvs=$('particles'),ctx=cvs.getContext('2d');let pts=[];
function rz(){cvs.width=innerWidth;cvs.height=innerHeight;}
addEventListener('resize',rz);rz();
for(let i=0;i<50;i++)pts.push({x:Math.random()*cvs.width,y:Math.random()*cvs.height,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,r:Math.random()*2+0.5,a:Math.random()*0.3+0.1});
function draw(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=cvs.width;if(p.x>cvs.width)p.x=0;if(p.y<0)p.y=cvs.height;if(p.y>cvs.height)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(124,58,237,${p.a})`;ctx.fill();});
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(124,58,237,${0.06*(1-d/120)})`;ctx.lineWidth=0.5;ctx.stroke();}}
    requestAnimationFrame(draw);
}
draw();

/* =============== INIT =============== */
setTimeout(()=>{
    chatOpen=true;chatW.classList.add('open');fab.classList.add('active');badge.classList.add('hidden');
    setTimeout(()=>{addBot(T("Hey there! 👋 Welcome to RVCE — the place where engineers are crafted! Ask me anything about admissions, placements, campus, and more!","Hello! Welcome to RV College of Engineering. I'm here to help you with information about admissions, placements, campus facilities, and more."),[],true);setTimeout(showMenu,900);},350);
},600);

})();
