const puppeteer = require('puppeteer');
const fs = require('fs');

const deptUrls = {
    ae: "https://rvce.edu.in/department/ae/faculty/",
    aiml: "https://rvce.edu.in/department/ai_ml/faculty/",
    bt: "https://rvce.edu.in/department/biotechnology/faculty/",
    ch: "https://rvce.edu.in/department/chemical_engineering/faculty/",
    chy: "https://rvce.edu.in/department/chemistry/faculty/",
    cv: "https://rvce.edu.in/department/civil_engineering/faculty/",
    cs: "https://rvce.edu.in/department/cse/faculty/",
    ee: "https://rvce.edu.in/department/eee/faculty/",
    ec: "https://rvce.edu.in/department/ece/faculty/",
    ei: "https://rvce.edu.in/department/eim/faculty/",
    et: "https://rvce.edu.in/department/etc/faculty/",
    im: "https://rvce.edu.in/department/iem/faculty/",
    is: "https://rvce.edu.in/department/ise/faculty/",
    mat: "https://rvce.edu.in/department/maths/faculty/",
    mca: "https://rvce.edu.in/department/mca/faculty/",
    me: "https://rvce.edu.in/department/me/faculty/",
    phy: "https://rvce.edu.in/department/physics/faculty/"
};

const chatbotFaculty = JSON.parse(fs.readFileSync('chatbot_faculty_summary.json', 'utf8'));

(async () => {
    console.log("Starting full department faculty audit via Puppeteer...\n");
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const auditResults = {};

    for (const [dept, url] of Object.entries(deptUrls)) {
        console.log(`Auditing ${dept.toUpperCase()} (${url})...`);
        try {
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
            await page.setViewport({ width: 1366, height: 768 });
            
            let response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 40000 });
            if (!response || response.status() >= 400) {
                console.log(`  -> Bad status ${response ? response.status() : 'null'}, retrying after 2s...`);
                await new Promise(r => setTimeout(r, 2000));
                await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
            }

            // Extract faculty names & designations from cards
            const liveFaculty = await page.evaluate(() => {
                const results = [];
                // Look for elementor image boxes, heading elements, or profile links
                const cards = document.querySelectorAll('.elementor-widget-image-box, .elementor-widget-heading, .elementor-image-box-wrapper, .elementor-box');
                
                // General text parsing across faculty containers
                const facultyElements = document.querySelectorAll('h3, h4, h5, .elementor-image-box-title, .elementor-heading-title');
                facultyElements.forEach(el => {
                    const txt = el.innerText.trim();
                    if (/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.|[A-Z][a-z]+ [A-Z])/i.test(txt) && txt.length < 50 && !txt.includes('Department') && !txt.includes('Faculty') && !txt.includes('RVCE')) {
                        if (!results.includes(txt)) {
                            results.push(txt);
                        }
                    }
                });
                return results;
            });

            const currentBotList = chatbotFaculty[dept] || [];
            auditResults[dept] = {
                url,
                liveCount: liveFaculty.length,
                botCount: currentBotList.length,
                liveFaculty,
                botFaculty: currentBotList
            };

            console.log(`  -> Found ${liveFaculty.length} faculty on live site (Chatbot has ${currentBotList.length}).`);
            await page.close();
        } catch (err) {
            console.error(`  -> Error auditing ${dept}:`, err.message);
            auditResults[dept] = { url, error: err.message, botFaculty: chatbotFaculty[dept] || [] };
        }
    }

    await browser.close();
    fs.writeFileSync('full_faculty_audit_raw.json', JSON.stringify(auditResults, null, 2));
    console.log("\nFull faculty audit saved to full_faculty_audit_raw.json");
})();
