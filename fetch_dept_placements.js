const https = require('https');
const http = require('http');

const depts = [
    { c: 'ae',    url: 'https://rvce.edu.in/department/ae/placement/' },
    { c: 'aiml',  url: 'https://rvce.edu.in/department/ai-ml/placement/' },
    { c: 'bt',    url: 'https://rvce.edu.in/department/biotechnology/placement/' },
    { c: 'ch',    url: 'https://rvce.edu.in/department/chemical_engineering/placement/' },
    { c: 'cv',    url: 'https://rvce.edu.in/department/cv/placement/' },
    { c: 'cs',    url: 'https://rvce.edu.in/department/cse/placement/' },
    { c: 'ee',    url: 'https://rvce.edu.in/department/eee/placement/' },
    { c: 'ec',    url: 'https://rvce.edu.in/department/ece/placement/' },
    { c: 'ei',    url: 'https://rvce.edu.in/department/ei/placement/' },
    { c: 'im',    url: 'https://rvce.edu.in/department/iem/placement/' },
    { c: 'is',    url: 'https://rvce.edu.in/department/ise/placement/' },
    { c: 'me',    url: 'https://rvce.edu.in/department/me/placement/' },
    { c: 'mca',   url: 'https://rvce.edu.in/department/mca/placement/' },
];

function fetchPage(url) {
    return new Promise((resolve) => {
        const mod = url.startsWith('https') ? https : http;
        const req = mod.get(url, { 
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
            timeout: 10000
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ url, status: res.statusCode, data }));
        });
        req.on('error', () => resolve({ url, status: 'ERROR', data: '' }));
        req.on('timeout', () => { req.destroy(); resolve({ url, status: 'TIMEOUT', data: '' }); });
    });
}

function extractNumbers(html, dept) {
    // Extract LPA numbers
    const lpaMatches = html.match(/(\d+(?:\.\d+)?)\s*(?:LPA|lpa|Lakhs?|lakhs?)/g) || [];
    // Extract package patterns
    const packages = html.match(/(?:highest|maximum|avg|average|package)[^0-9]*(\d+(?:\.\d+)?)/gi) || [];
    // Extract offer counts
    const offers = html.match(/(\d+\+?)\s*(?:offer|placed|student)/gi) || [];
    
    console.log(`\n[${dept.toUpperCase()}] ${dept} - Status: ...`);
    if (lpaMatches.length) console.log('  LPA mentions:', lpaMatches.slice(0,10).join(', '));
    if (packages.length) console.log('  Package mentions:', packages.slice(0,5).join(', '));
    if (offers.length) console.log('  Offer mentions:', offers.slice(0,5).join(', '));
    if (!lpaMatches.length && !packages.length) console.log('  [No numerical data found - page may need browser]');
}

async function main() {
    console.log('Fetching department placement pages...\n');
    for (const dept of depts) {
        const result = await fetchPage(dept.url);
        console.log(`[${dept.c.toUpperCase()}] Status: ${result.status}`);
        if (result.status === 200) {
            extractNumbers(result.data, dept.c);
        } else {
            console.log(`  -> Blocked (${result.status})`);
        }
        await new Promise(r => setTimeout(r, 500)); // small delay between requests
    }
}

main();
