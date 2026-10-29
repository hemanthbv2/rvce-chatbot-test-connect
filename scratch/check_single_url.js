const https = require('https');

function check(url) {
    return new Promise((resolve) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            },
            method: 'GET',
            rejectUnauthorized: false
        };

        const req = https.request(url, options, (res) => {
            console.log(`URL: ${url}`);
            console.log(`Status: ${res.statusCode}`);
            console.log(`Headers:`, JSON.stringify(res.headers, null, 2));
            
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`Data length: ${data.length}`);
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    console.log(`Following redirect to: ${res.headers.location}`);
                    resolve(check(res.headers.location));
                } else {
                    resolve({ status: res.statusCode, length: data.length });
                }
            });
        });

        req.on('error', e => resolve({ status: 'ERROR: ' + e.message }));
        req.end();
    });
}

check('https://rvce.edu.in/department/wp-content/uploads/2025/10/Sonika.pdf');
