const fs = require('fs');

let scriptContent = fs.readFileSync('script.js', 'utf8');

const newPlacements = `    placements: {
        companies: "262 companies participated (2026 Drive - Ongoing)",
        avgSalary: "₹16.86 LPA (B.E.), ₹12.73 LPA (M.Tech), ₹8.79 LPA (MCA) [2026 Avg]",
        maxSalary: "₹67.00 LPA (B.E.), ₹39.00 LPA (M.Tech), ₹25.00 LPA (MCA) [2026 Highest]",
        recruiters: "HPE, JP Morgan Chase & Co., Qualcomm, Reliance Industries, ABB, Cognizant, FFE, Devon, Boeing, Microsoft, Google, Amazon, Cisco, Intel",
        scholarships: "₹72+ Lakhs awarded annually from ABB, Boeing, CTS",
        infra: "800+ systems, seminar halls, 6 interview rooms, 2 GD rooms",
        offers: "898 B.E. offers, 113 M.Tech offers, 71 MCA offers (2026 Ongoing)",
        url: "https://rvce.edu.in/placement_and_training/",
        prev2025: { maxSalary: "₹67.00 LPA", companies: "262", offers: "922 offers" }
    },`;

const newAdmissions = `    admissions: {
        ug: { 
            eligibility: "General Merit: 12th/2nd PUC with English, min 45% aggregate in Physics & Math (compulsory) + one optional (Chem/BT/Bio/CS/Electronics). SC/ST/OBC Karnataka min 40%. Lateral entry: Diploma min 45% (40% for SC/ST/BC).", 
            exams: "KCET (KEA), COMED-K, JEE-Mains, Management Quota", 
            quotas: "KEA Quota, COMED-K Quota, Management Quota, CIWG/PIO/OCI/Nepal Citizens quota" 
        },
        pg: { 
            eligibility: "M.Tech: Qualifying degree with min 50% (45% for SC/ST/Cat-1 Karnataka). Exams: PGCET or GATE. MCA: BCA/B.E./B.Sc/B.Com/B.A. with Math, min 50% (45% for SC/ST/Cat-1 Karnataka). Exams: PGCET or KMAT.", 
            exams: "PGCET, GATE, KMAT" 
        },
        phd: { 
            info: "Master's degree in relevant discipline. Selection: VTU Entrance Test (UET/RAT) + Interview at RVCE + VTU registration." 
        },
        fees: "KEA Quota B.E.: ₹1.2L Tuition + ₹20k Skill Lab. COMED-K B.E.: ₹3.2L Tuition + ₹20k Skill Lab. Management Quota B.E.: Tuition ranges from ₹4.5L/yr (Chem) to ₹36L (1st yr CSE, total ₹75L). MCA Mgmt: ₹5L/yr. M.Tech Mgmt: ₹1L-9L/yr.",
        cutoffs: "Official cutoffs are referred to KEA (for KCET) and COMED-K websites.",
        url: "https://rvce.edu.in/admissions/"
    },`;

// Replace placements
const placementsRegex = /placements:\s*\{[\s\S]*?prev2025:[\s\S]*?\},/;
scriptContent = scriptContent.replace(placementsRegex, newPlacements);

// Replace admissions
const admissionsRegex = /admissions:\s*\{[\s\S]*?url:\s*"https:\/\/rvce.edu.in\/admissions\/"[\s\S]*?\},/;
scriptContent = scriptContent.replace(admissionsRegex, newAdmissions);

fs.writeFileSync('script.js', scriptContent, 'utf8');
console.log("script.js updated successfully.");
