const fs = require('fs');
const bot = require('d:/hemanth bv/New folder/chatbot-ai-main/scratch/script_module.js');

const longQuery = `Hello, I am a parent looking for detailed information about your college before I consider admission for my son/daughter. I would like to know about the courses offered in engineering, management, computer applications, commerce, and science streams. Please explain the eligibility criteria for each course, entrance exams accepted, admission process, important dates, fee structure, scholarship availability, hostel facilities, transportation, and placement opportunities. I also want to know whether the college provides internship support, industry collaborations, international programs, and campus training for students.

Can you tell me about the faculty qualifications and teaching methodology used in the college? I would also like to know whether classes are conducted using practical learning, laboratories, projects, workshops, and industrial visits. Please provide information about the infrastructure including classrooms, libraries, computer labs, Wi-Fi facilities, sports facilities, auditorium, cafeteria, medical support, and safety measures on campus.

I would also like to understand the placement statistics for the last few years. Which companies visit the campus for recruitment? What is the highest package, average package, and placement percentage? Are there any special training programs for aptitude, coding, communication skills, and interview preparation? Does the college support entrepreneurship and startup incubation?

Please explain the hostel facilities separately for boys and girls. What are the hostel fees, room types, food arrangements, security measures, and curfew timings? Is there a warden available full-time? Are parents informed regularly about student performance and attendance?

I would also like information regarding transportation facilities. Which areas are covered by college buses? What are the transportation charges? Is GPS tracking available in buses for safety purposes?

Can you provide details about extracurricular activities such as sports, cultural events, clubs, technical fests, hackathons, NSS, NCC, and student organizations? Does the college encourage students to participate in inter-college competitions and national-level events?

Please tell me about the examination system and academic support provided for weak students. Are there mentoring systems, remedial classes, counseling support, and career guidance available? How does the college help students prepare for higher studies such as GATE, CAT, GRE, IELTS, or government exams?

I would also like to know the attendance requirements, anti-ragging policies, disciplinary rules, and grievance support system available for students and parents. Does the college provide online portals or mobile apps where parents can track attendance, marks, assignments, and fee payments?

Can you also explain the admission procedure for management quota and whether education loans are supported through partnered banks? What documents are required during admission? Is there an option for online admission and fee payment?

Finally, please share details about the college’s achievements, rankings, accreditations, university affiliation, NAAC/NBA status, and alumni success stories. I would also like to know whether campus visits can be arranged for parents and students before admission.`;

// We will inject a hook to see matchedIntents
const cleanInput = longQuery.toLowerCase().trim().replace(/[?!.,;()'"]/g, '').replace(/\s+/g, ' ');
const stopWords = ['the', 'is', 'for', 'a', 'an', 'of', 'in', 'to', 'and', 'with', 'about', 'on', 'at', 'please', 'can', 'you', 'tell', 'me', 'know'];
const strippedInput = cleanInput.split(' ').filter(w => !stopWords.includes(w)).join(' ');

let matchedIntents = [];

for (const q of bot.QA) {
    if (!q || !q.k) continue;
    for (const k of q.k) {
        const escapedK = k.replace(/[.*+?^${}()|[\]\\\\]/g, '\\\\$&');
        const regex = new RegExp('(?:^|\\\\s)' + escapedK + '(?=\\\\s|$)', 'i');
        
        let isMatch = regex.test(cleanInput) || regex.test(strippedInput);
        
        if (!isMatch && k.length > 4 && !k.includes(' ')) {
            const words = strippedInput.split(' ');
            for (const w of words) {
                if (w.length > 4) {
                    // simple dummy levenshtein just for test
                    // we'll assume exact match here since we just want to see raw matches without fuzzy
                }
            }
        }
        if (isMatch) {
            matchedIntents.push(q);
        }
    }
}

const uniqueIds = Array.from(new Set(matchedIntents.map(q => q.id)));
console.log("Unique Matched Intents: ", uniqueIds.length);
uniqueIds.forEach(id => {
    const q = bot.QA.find(x => x.id === id);
    console.log("- " + id + " (Priority: " + (q ? q.p : 'N/A') + ")");
});
