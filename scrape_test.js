const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');

const agent = new https.Agent({ rejectUnauthorized: false });

axios.get('https://rvce.edu.in/department/physics/about_the_department/', {
    httpsAgent: agent,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
    }
}).then(res => {
    const $ = cheerio.load(res.data);
    const paras = [];
    $('p').each((i, el) => {
        const text = $(el).text().trim();
        if(text.length > 50) paras.push(text);
    });
    console.log("TEXT FOUND:", paras[0]);
    console.log("TEXT FOUND 2:", paras[1]);
}).catch(err => {
    if(err.response) {
        console.error("STATUS:", err.response.status);
    } else {
        console.error(err.message);
    }
});
