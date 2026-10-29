process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const options = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } };
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let data = ''; res.on('data', c => data+=c); res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}
async function scrape() {
    const html = await fetchUrl('https://rvce.edu.in/programmes/');
    const $ = cheerio.load(html);
    const links = [];
    $('a').each((i, el) => {
        const href = $(el).attr('href');
        if (href && href.includes('department/') && !links.includes(href)) links.push(href);
    });
    const results = [];
    for (let i = 0; i < links.length; i++) {
        let url = links[i];
        if(!url.startsWith('http')) url = 'https://rvce.edu.in' + url;
        const dHtml = await fetchUrl(url);
        const $d = cheerio.load(dHtml);
        const title = $d('h1.title').text().trim() || $d('title').text().trim();
        let txt = $d('body').text().replace(/\s+/g, ' ');
        let intake = "Not found"; let acc = "Not found";
        
        let m = txt.match(/Intake[\s:-]*([0-9]+)/i);
        if (m) {
            intake = m[1];
        } else {
            // Check for specific sub-links if intake not found
            let beLink = null;
            $d('a').each((i, el) => {
                const linkTxt = $d(el).text().toLowerCase();
                if (linkTxt.includes('b.e') || linkTxt.includes('bachelor') || linkTxt.includes('programmes offered')) {
                    beLink = $d(el).attr('href');
                }
            });
            if (beLink) {
                if(!beLink.startsWith('http')) beLink = 'https://rvce.edu.in' + beLink;
                const beHtml = await fetchUrl(beLink);
                const $be = cheerio.load(beHtml);
                const beTxt = $be('body').text().replace(/\s+/g, ' ');
                let m2 = beTxt.match(/Intake[\s:-]*([0-9]+)/i);
                if (m2) intake = m2[1];
                if (beTxt.toLowerCase().includes('nba accredited')) acc = 'NBA Accredited';
            }
        }
        if (txt.toLowerCase().includes('nba accredited')) acc = 'NBA Accredited';
        results.push({url, title, intake, acc});
    }
    fs.writeFileSync('dept_intake_results.json', JSON.stringify(results, null, 2));
    console.log('done');
}
scrape();
