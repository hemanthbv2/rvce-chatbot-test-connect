const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');

const links = JSON.parse(fs.readFileSync('links.json', 'utf8'));
const deptLinks = links.filter(l => l.includes('/department/') && !l.includes('/m_tech') && !l.includes('-mtech-') && !l.includes('/m-tech') && !l.includes('/master-of-technology'));

let results = {};

async function run() {
    for (let link of deptLinks) {
        console.log('Fetching', link);
        try {
            const res = await axios.get(link, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                }
            });
            const $ = cheerio.load(res.data);
            
            let hodName = null;
            let intake = null;

            // Common pattern 1: Look for "Head of Department" or "HoD" text in strong tags or headings
            $('*').each((i, el) => {
                const text = $(el).text().trim();
                if ((text.toLowerCase().includes('head of department') || text.toLowerCase().includes('hod')) && $(el).is('h1, h2, h3, h4, h5, p, strong')) {
                    // Search near this element for "Dr. " or "Prof. "
                    const context = $(el).parent().text() + ' ' + $(el).next().text();
                    const drMatch = context.match(/(?:Dr\.|Prof\.)\s+[A-Za-z\s\.]+/i);
                    if (drMatch && !hodName) {
                        hodName = drMatch[0].trim();
                    }
                }
            });

            // Look for intake in tables or specific paragraphs
            $('table tr').each((i, el) => {
                const rowText = $(el).text().toLowerCase();
                if (rowText.includes('intake') && !rowText.includes('pg') && !rowText.includes('m.tech')) {
                    const match = rowText.match(/(\d+)/);
                    if (match && parseInt(match[1]) > 20 && parseInt(match[1]) < 300) {
                        intake = parseInt(match[1]);
                    }
                }
            });

            // Alternative intake search
            if (!intake) {
                const fullText = $('body').text().toLowerCase();
                const intakeMatch = fullText.match(/intake\s*(?:is|:|-)?\s*(\d{2,3})/);
                if (intakeMatch) intake = parseInt(intakeMatch[1]);
            }
            
            let deptCode = link.split('/department/')[1].split('/')[0].toLowerCase();
            // normalize common codes
            if (deptCode === 'cse') deptCode = 'cs';
            if (deptCode === 'ece') deptCode = 'ec';
            if (deptCode === 'eee') deptCode = 'ee';
            if (deptCode === 'ise') deptCode = 'is';
            if (deptCode === 'me') deptCode = 'me';
            if (deptCode === 'civil_engineering') deptCode = 'cv';
            if (deptCode === 'chemical_engineering') deptCode = 'ch';
            if (deptCode === 'biotechnology') deptCode = 'bt';
            if (deptCode === 'ae') deptCode = 'ae';
            if (deptCode === 'eim') deptCode = 'ei';
            if (deptCode === 'iem') deptCode = 'im';
            if (deptCode === 'etc') deptCode = 'et';
            if (deptCode === 'ai_ml') deptCode = 'aiml';

            results[deptCode] = { hod: hodName, intake: intake };
            console.log(` -> Code: ${deptCode} | HOD: ${hodName} | Intake: ${intake}`);

        } catch (e) {
            console.error(`Error fetching ${link}:`, e.message);
        }
        
        // Politeness delay
        await new Promise(r => setTimeout(r, 500));
    }

    fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/9c145923-b128-46eb-954f-65de4d06453c/scratch/scraped_data.json', JSON.stringify(results, null, 2));
    console.log('Done scraping.');
}

run();
