process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');

const urls = [
    { code: 'ME', url: 'https://rvce.edu.in/department/me/department_of_mechanical_engineering/' },
    { code: 'ME_HOD', url: 'https://rvce.edu.in/department/me/dr_shanmukha_nagaraj/' },
    { code: 'EI', url: 'https://rvce.edu.in/department/eim/eie_main_dept/' },
    { code: 'AIML', url: 'https://rvce.edu.in/department/ai-ml/department-of-artificial-intelligence-and-machine-learning/' },
    { code: 'MCA', url: 'https://rvce.edu.in/department/mca/mca-main-department/' },
    { code: 'EEE', url: 'https://rvce.edu.in/department/eee/department-of-electrical-and-electronics-engineering/' }
];

urls.forEach(item => {
    https.get(item.url, { 
        headers: { 
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' 
        } 
    }, (res) => {
        let html = '';
        res.on('data', chunk => html += chunk);
        res.on('end', () => {
            console.log(`\n=================== ${item.code} (${res.statusCode}) ===================`);
            // Extract title and HOD / Head mentions
            const titleMatch = html.match(/<title>(.*?)<\/title>/i);
            console.log("Title:", titleMatch ? titleMatch[1] : "N/A");
            
            const matches = [...html.matchAll(/(?:Head|HOD|Professor\s*&\s*Head)[^<]{0,100}/gi)];
            if (matches.length) {
                console.log("Found matches:");
                matches.slice(0, 5).forEach(m => console.log(" - " + m[0].replace(/\s+/g, ' ').trim()));
            } else {
                console.log("No explicit HOD regex matches in HTML source.");
            }
        });
    }).on('error', (err) => {
        console.log(`${item.code} Error: ${err.message}`);
    });
});
