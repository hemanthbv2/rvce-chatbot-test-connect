const https = require('https');

const urls = [
    { label: 'ME HoD Bio', url: 'https://rvce.edu.in/department/me/dr_shanmukha_nagaraj/' },
    { label: 'MCA HoD Bio', url: 'https://rvce.edu.in/department/mca/dr_jasmine_k_s/' },
    { label: 'EIE Main', url: 'https://rvce.edu.in/department/eim/eie_main_dept/' },
    { label: 'AIML Main', url: 'https://rvce.edu.in/department/ai-ml/ai-ml-main/' }
];

urls.forEach(item => {
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        console.log(`${item.label} (${item.url}) => Status: ${res.statusCode}`);
    }).on('error', (err) => {
        console.log(`${item.label} Error: ${err.message}`);
    });
});
