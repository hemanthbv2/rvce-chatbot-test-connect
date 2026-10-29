const axios = require('axios');
const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const agent = new https.Agent({ rejectUnauthorized: false });

const urls = [
    'https://rvce.edu.in/department/cse/placement/',
    'https://rvce.edu.in/department/ae/placement/',
    'https://rvce.edu.in/department/ai_ml/placement/',
    'https://rvce.edu.in/department/biotechnology/placement/',
    'https://rvce.edu.in/department/chemical_engineering/placement/',
    'https://rvce.edu.in/department/civil_engineering/placement/',
    'https://rvce.edu.in/department/eee/placement/',
    'https://rvce.edu.in/department/ece/placement/',
    'https://rvce.edu.in/department/eim/placement/',
    'https://rvce.edu.in/department/iem/placement/',
    'https://rvce.edu.in/department/ise/placement/',
    'https://rvce.edu.in/department/mca/placement/',
    'https://rvce.edu.in/department/me/placement/',
    'https://rvce.edu.in/department/etc/placement/'
];

function cleanText(txt) {
    return txt.replace(/\s+/g, ' ').trim();
}

async function fetchStats() {
    let finalData = {};
    for (const url of urls) {
        try {
            const res = await axios.get(url, {
                httpsAgent: agent,
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            const $ = cheerio.load(res.data);
            
            let data = {
                companies: 'N/A',
                offers: 'N/A',
                students: 'N/A',
                avg: 'N/A',
                max: 'N/A'
            };

            // Find all tables and their rows
            $('tr').each((i, row) => {
                const cells = $(row).find('td, th');
                if (cells.length >= 2) {
                    const key = cleanText($(cells[0]).text()).toLowerCase();
                    const value = cleanText($(cells[1]).text());
                    // Or it might be in different columns if year is in columns.
                    // Usually 2025-26 is in column 1 or column 2. Let's look at all columns for a non-zero number.
                    let val = '';
                    for (let c = 1; c < cells.length; c++) {
                        const cellTxt = cleanText($(cells[c]).text());
                        if (cellTxt && cellTxt !== '0' && cellTxt !== '0 LPA' && cellTxt !== 'XX' && cellTxt !== 'TBD Later') {
                            val = cellTxt;
                            break;
                        }
                    }
                    if (!val) val = cleanText($(cells[1]).text()); // Fallback

                    if (key.includes('companies visited') || key.includes('companies')) {
                        if (data.companies === 'N/A' || data.companies === '0') data.companies = val;
                    } else if (key.includes('offers made') || key.includes('offers')) {
                        if (data.offers === 'N/A' || data.offers === '0') data.offers = val;
                    } else if (key.includes('students selected') || key.includes('students placed')) {
                        if (data.students === 'N/A' || data.students === '0') data.students = val;
                    } else if (key.includes('average salary') || key.includes('average')) {
                        if (data.avg === 'N/A' || data.avg === '0' || data.avg.includes('0 LPA')) data.avg = val;
                    } else if (key.includes('maximum salary') || key.includes('highest salary')) {
                        if (data.max === 'N/A' || data.max === '0' || data.max.includes('0 LPA')) data.max = val;
                    }
                }
            });

            const deptCode = url.split('/department/')[1].split('/')[0];
            finalData[deptCode] = data;
        } catch (e) {
            console.log(`Error on ${url}: ${e.message}`);
        }
    }
    fs.writeFileSync('parsed_stats.json', JSON.stringify(finalData, null, 2));
    console.log('Done writing to parsed_stats.json');
}

fetchStats();
