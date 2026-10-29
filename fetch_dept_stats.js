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

async function fetchStats() {
    let output = '';
    for (const url of urls) {
        output += `\n--- ${url} ---\n`;
        try {
            const res = await axios.get(url, {
                httpsAgent: agent,
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' }
            });
            const $ = cheerio.load(res.data);
            
            // Extract text from tables to find the 2025-26 stats
            let tableText = '';
            $('table').each((i, tbl) => {
                const text = $(tbl).text().replace(/\s+/g, ' ').trim();
                tableText += `Table ${i + 1}: ${text.substring(0, 500)}...\n`;
            });
            
            // Or look for 'Highest' and 'Average'
            let highlights = '';
            $('*').each((i, el) => {
                const txt = $(el).text();
                if (txt.toLowerCase().includes('highest') || txt.toLowerCase().includes('average') || txt.toLowerCase().includes('lpa')) {
                    if (txt.length < 200 && txt.length > 5) {
                        highlights += txt.replace(/\s+/g, ' ').trim() + '\n';
                    }
                }
            });
            
            output += `Highlights:\n${highlights}\nTables:\n${tableText}`;
        } catch (e) {
            output += `Error: ${e.message}\n`;
        }
    }
    fs.writeFileSync('all_dept_stats.txt', output);
    console.log('Done writing to all_dept_stats.txt');
}

fetchStats();
