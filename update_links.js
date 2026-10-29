const fs = require('fs');

const path = 'd:\\hemanth bv\\New folder\\chatbot-ai-main\\rvce-chatbot\\assets\\script.js';
let data = fs.readFileSync(path, 'utf8');

// Replacements
data = data.replace('website: "https://rvce.edu.in/"', 'website: "https://rvce.rveducationalinstitutions.com/"');
data = data.replace(/https:\/\/rvce\.edu\.in\/placement_and_training\//g, 'https://rvce.rveducationalinstitutions.com/placement_and_training/');
data = data.replace(/https:\/\/rvce\.edu\.in\/admissions\//g, 'https://rvce.rveducationalinstitutions.com/admissions/');
data = data.replace(/https:\/\/rvce\.edu\.in\/facilities\//g, 'https://rvce.rveducationalinstitutions.com/facilities/');
data = data.replace(/https:\/\/rvce\.edu\.in\/innovation-and-incubation-centre\//g, 'https://rvce.rveducationalinstitutions.com/innovative_teams/');
data = data.replace(/https:\/\/rvce\.edu\.in\/extra-curricular-activities\//g, 'https://rvce.rveducationalinstitutions.com/cultural_teams/');
data = data.replace(/https:\/\/rvce\.edu\.in\/department-of-physical-education-sports\//g, 'https://rvce.rveducationalinstitutions.com/department-of-physical-education-sports/');
data = data.replace(/{l:'Research Centres',u:'https:\/\/rvce\.edu\.in\/research',i:'🌐'}/g, "{l:'Research Centres',u:'https://rvce.rveducationalinstitutions.com/research_consulting/',i:'🌐'}");
data = data.replace(/{l:'Full List',u:'https:\/\/rvce\.edu\.in\/research',i:'🌐'}/g, "{l:'Full List',u:'https://rvce.rveducationalinstitutions.com/research_consulting/',i:'🌐'}");
data = data.replace(/https:\/\/rvce\.edu\.in\/about_us\/key-executives\//g, 'https://rvce.rveducationalinstitutions.com/about_us/key-executives/');
data = data.replace(/https:\/\/rvce\.edu\.in\/about_us\//g, 'https://rvce.rveducationalinstitutions.com/about_us/');

// Add Alumni Link to case 'alumni':
const alumniRegex = /(case 'alumni':[\s\S]*?r\.buttons = \[)(.*?)(\]; break;)/;
data = data.replace(alumniRegex, "$1{l:'Alumni Portal',u:'https://rvce.rveducationalinstitutions.com/alumni-2/',i:'🎓'}, $2$3");

fs.writeFileSync(path, data);
console.log('Links updated successfully in script.js');
