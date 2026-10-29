process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const fs = require('fs');

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
};

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

async function scrapeDept() {
    try {
        console.log('Fetching CSE Dept...');
        const html = await fetchUrl('https://rvce.edu.in/department/cse/cse-main/');
        fs.writeFileSync('cse_dept.html', html);
        console.log('Saved to cse_dept.html. Size: ' + html.length);
        
    } catch (e) {
        console.error(e);
    }
}

scrapeDept();
