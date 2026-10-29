process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const fs = require('fs');

const options = { 
    headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    } 
};
https.get('https://rvce.edu.in/department/civil_engineering/b-e-civil/', options, (res) => {
    let data = ''; res.on('data', c => data+=c); res.on('end', () => {
        fs.writeFileSync('civil_success.html', data);
        console.log('Saved civil_success.html, length: ' + data.length);
    });
});
