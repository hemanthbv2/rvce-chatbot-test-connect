process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const cheerio = require('cheerio');

const options = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } };
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let data = ''; res.on('data', c => data+=c); res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function test() {
    const html = await fetchUrl('https://rvce.edu.in/department/civil_engineering/b-e-civil/');
    const $ = cheerio.load(html);
    console.log($('body').text().replace(/\s+/g, ' ').substring(0, 3000));
}
test();
