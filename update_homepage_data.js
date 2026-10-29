const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// 1. Inject KB.latest_news
const newsData = `
    latest_news: [
        { t: "BE - Management Quota Fees Details & Procedure for the year 2026 - 27", l: "https://rvce.edu.in/wp-content/uploads/2026/03/1ST-YEAR-BE-PROGRAM-MANAGEMENT-QUOTA-ADMISSION-2026-27.pdf" },
        { t: "BE - CIWG / OCI / PIO / Nepal Citizen Quota Fees Details & Procedure for the AY 2026 - 27", l: "https://rvce.edu.in/wp-content/uploads/2025/11/1_NRI-Quota-for-BE-Program-Admission-2026-27.pdf" },
        { t: "MCA - Management Quota Fees Details & Procedure for the Year 2026 - 27", l: "https://rvce.edu.in/wp-content/uploads/2026/04/MCA-Management-Quota-Fees-Details-Procedure-for-the-Year-2026-27.pdf" },
        { t: "M.Tech - Management Quota Fees Details & Procedure for the Year 2026 - 27", l: "https://rvce.edu.in/wp-content/uploads/2026/04/M.Tech-PROGRAM-MANAGEMENT-QUOTA-ADMISSION-2026-2027.pdf" },
        { t: "Registration for 16th Graduation Day Ceremony-2026", l: "https://rvce.edu.in/examination-circulars/" },
        { t: "Inaugural Ceremony of the Boeing–RVCE–AICTE IDEA Lab", l: "https://rvce.edu.in/wp-content/uploads/2026/07/Inaugural-Ceremony-AICTE-Boing-Lab.pdf" },
        { t: "10th International Conference on Computational Systems (CSITSS 2026)", l: "https://csitss.ieee-rvce.org/" }
    ],`;

// Add it right after `const KB = {`
content = content.replace('const KB = {', 'const KB = {\n' + newsData);

// 2. Add intent matching in `matchIntent` or `classifyIntent`
// Let's add a quick regex check at the start of classifyIntent
const classifyCode = `function classifyIntent(input) {
    let cleanInput = sanitize(input).toLowerCase();
    
    if (/news|circular|announcement|update|latest/i.test(cleanInput)) return { type: 'exact', id: 'latest_news' };
`;
content = content.replace('function classifyIntent(input) {\n    let cleanInput = sanitize(input).toLowerCase();', classifyCode);

// 3. Add to switch in getResponse
const switchCaseCode = `case 'latest_news':
        r.text = T("Here are the latest announcements and circulars straight from the RVCE homepage! dY~", "Here are the most recent announcements and circulars from RVCE:");
        r.text += "<ul class='latest-news-list' style='margin-top:10px; padding-left:20px;'>";
        KB.latest_news.forEach(news => {
            r.text += \`<li style="margin-bottom:8px;"><a href="\${news.l}" target="_blank">\${news.t}</a></li>\`;
        });
        r.text += "</ul>";
        return r;
    case 'bye':`;
    
content = content.replace("case 'bye':", switchCaseCode);

fs.writeFileSync('script.js', content, 'utf8');
console.log("Updated script.js with latest news!");
