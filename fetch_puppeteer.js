const puppeteer = require('puppeteer');
const fs = require('fs');

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

async function run() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    let results = {};

    for (const url of urls) {
        try {
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
            
            const deptCode = url.split('/department/')[1].split('/')[0];
            
            const stats = await page.evaluate(() => {
                let data = { companies: 'N/A', offers: 'N/A', students: 'N/A', avg: 'N/A', max: 'N/A' };
                const rows = Array.from(document.querySelectorAll('tr'));
                
                rows.forEach(row => {
                    const cells = Array.from(row.querySelectorAll('th, td')).map(td => td.innerText.replace(/\\n/g, ' ').replace(/\\s+/g, ' ').trim());
                    if (cells.length >= 2) {
                        const key = cells[0].toLowerCase();
                        let val = '';
                        // Usually 2025-26 or latest is in the second column (cells[1])
                        for (let i = 1; i < cells.length; i++) {
                            if (cells[i] && cells[i] !== '0' && cells[i] !== '0 LPA' && cells[i] !== '-' && cells[i].toLowerCase() !== 'tbd later') {
                                val = cells[i];
                                break;
                            }
                        }
                        if (!val && cells.length > 1) val = cells[1]; // fallback
                        
                        if (key.includes('companies visited')) data.companies = val;
                        if (key.includes('offers made')) data.offers = val;
                        if (key.includes('students selected') || key.includes('students placed')) data.students = val;
                        if (key.includes('average salary')) data.avg = val;
                        if (key.includes('maximum salary') || key.includes('highest salary')) data.max = val;
                    }
                });
                return data;
            });
            results[deptCode] = stats;
            console.log(`Fetched ${deptCode}: ${JSON.stringify(stats)}`);
        } catch (e) {
            console.log(`Failed ${url}: ${e.message}`);
        }
    }
    
    fs.writeFileSync('exact_stats.json', JSON.stringify(results, null, 2));
    await browser.close();
}

run();
