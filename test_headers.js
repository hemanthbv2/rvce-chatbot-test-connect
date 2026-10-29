const https = require('https');
const options = { 
    headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Referer': 'https://rvce.edu.in/programmes/'
    } 
};
https.get('https://rvce.edu.in/department/civil_engineering/b-e-civil/', options, (res) => {
    console.log(res.statusCode);
});
