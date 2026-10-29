process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const cheerio = require('cheerio');

https.get('https://rvce.edu.in/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const $ = cheerio.load(data);
        const text = $('body').text().replace(/\s+/g, ' ');
        
        console.log('--- Checking for cutoff info on main page ---');
        ['cutoff', 'cut-off', 'rank', 'KEA', 'COMEDK', 'closing'].forEach(term => {
            const index = text.toLowerCase().indexOf(term.toLowerCase());
            if (index !== -1) {
                console.log(`Found "${term}": ` + text.substring(Math.max(0, index - 50), index + 100));
            } else {
                console.log(`Did not find "${term}"`);
            }
        });
    });
});
