const axios = require('axios');
const https = require('https');
const cheerio = require('cheerio');
const agent = new https.Agent({ rejectUnauthorized: false });

axios.get('https://rvce.edu.in/placement-statistics', {
    httpsAgent: agent,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
    }
}).then(r => {
    const $ = cheerio.load(r.data);
    let tables = [];
    $('table').each((i, tbl) => {
        tables.push($(tbl).text().replace(/\s+/g, ' '));
    });
    console.log(JSON.stringify(tables, null, 2));
}).catch(e => console.log('Error: ' + e.message));
