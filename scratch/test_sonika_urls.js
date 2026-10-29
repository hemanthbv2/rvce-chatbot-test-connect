const https = require('https');

const urls = [
    'https://rvce.edu.in/department/ai_ml/prof-sonika-ct/',
    'https://rvce.edu.in/department/ai_ml/prof_sonika_c_t/',
    'https://rvce.edu.in/department/ai_ml/prof-sonika-c-t/',
    'https://rvce.edu.in/department/ai_ml/sonika-c-t/',
    'https://rvce.edu.in/department/ai_ml/sonikact/',
    'https://rvce.edu.in/department/ai_ml/prof_sonika/',
    'https://rvce.edu.in/department/ai-ml/prof-sonika-ct/',
    'https://rvce.edu.in/department/ai-ml/prof_sonika_ct/',
    'https://rvce.edu.in/department/ai-ml/sonikact/',
    'https://rvce.edu.in/department/ai_ml/prof_sonika_ct/',
    'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE-lCaD6EJ4F1nwEYqMors68l9GX6kqEfYDntn8JyXRkppujbUoU8xc1tXx2VvCHHHlP3Oec2j7SvdhwRgEd9t-ISkq74b_0Q2hO-0dyfQ_aGtTe-ZErm3_UyvfSoS5Fmq46dGogVyDNDYBWkrJl8OuEixSasarJO5fx-71drTR'
];

function checkUrl(url) {
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
            if (res.headers.location) {
                resolve({ url, status: res.statusCode, redirect: res.headers.location });
            } else {
                resolve({ url, status: res.statusCode });
            }
            res.resume();
        });

        req.on('error', (e) => {
            resolve({ url, status: 'ERROR: ' + e.message });
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            resolve({ url, status: 'TIMEOUT' });
        });

        req.end();
    });
}

async function main() {
    for (const url of urls) {
        const res = await checkUrl(url);
        if (res.redirect) {
            console.log(`${url} -> ${res.status} (Redirects to: ${res.redirect})`);
        } else {
            console.log(`${url} -> ${res.status}`);
        }
    }
}

main().catch(console.error);
