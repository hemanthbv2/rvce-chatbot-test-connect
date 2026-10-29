const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');
const https = require('https');

const links = JSON.parse(fs.readFileSync('links.json', 'utf8'));
const deptLinks = links.filter(l => l.includes('/department/') && !l.includes('/m_tech') && !l.includes('-mtech-') && !l.includes('/m-tech') && !l.includes('/master-of-technology'));

let results = {};

const agent = new https.Agent({ rejectUnauthorized: false });

async function run() {
    for (let link of deptLinks) {
        console.log('Fetching', link);
        try {
            const res = await axios.get(link, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                },
                httpsAgent: agent,
                timeout: 10000
            });
            const $ = cheerio.load(res.data);
            
            let hodName = null;
            let intake = null;

            $('*').each((i, el) => {
                const text = $(el).text().trim();
                if ((text.toLowerCase().includes('head of department') || text.toLowerCase().includes('hod')) && $(el).is('h1, h2, h3, h4, h5, p, strong, td, th, span')) {
                    const context = $(el).parent().text() + ' ' + $(el).text() + ' ' + $(el).next().text();
                    const drMatch = context.match(/(?:Dr\.|Prof\.)\s+[A-Za-z\s\.]+/i);
                    if (drMatch && !hodName) {
                        hodName = drMatch[0].trim().replace(/\s+/g, ' ');
                    }
                }
            });

            // Look for intake
            $('table tr').each((i, el) => {
                const rowText = $(el).text().toLowerCase();
                if (rowText.includes('intake') && !rowText.includes('pg') && !rowText.includes('m.tech')) {
                    const match = rowText.match(/(\d+)/);
                    if (match && parseInt(match[1]) > 20 && parseInt(match[1]) < 300) {
                        intake = parseInt(match[1]);
                    }
                }
            });

            if (!intake) {
                const fullText = $('body').text().toLowerCase();
                const intakeMatch = fullText.match(/intake\s*(?:is|:|-)?\s*(\d{2,3})/);
                if (intakeMatch) intake = parseInt(intakeMatch[1]);
            }
            
            let deptCode = link.split('/department/')[1].split('/')[0].toLowerCase();
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
            
            // Map b_e_ase to ae, etc.
            if (deptCode === 'b_e_ase') deptCode = 'ae';
            if (deptCode === 'b-e-in-biotechnology') deptCode = 'bt';

            results[deptCode] = { hod: hodName, intake: intake };
            console.log(` -> Code: ${deptCode} | HOD: ${hodName} | Intake: ${intake}`);

        } catch (e) {
            console.error(`Error fetching ${link}:`, e.message);
        }
    }

    fs.writeFileSync('scraped_data.json', JSON.stringify(results, null, 2));
    console.log('Done scraping.');
}

run();
