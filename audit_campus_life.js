process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');

const pages = [
    { name: 'Innovative Teams', url: 'https://rvce.edu.in/innovative_teams/' },
    { name: 'Cultural Teams', url: 'https://rvce.edu.in/cultural_teams/' },
    { name: 'Sports & Games', url: 'https://rvce.edu.in/department-of-physical-education-sports/' },
    { name: 'NCC', url: 'https://rvce.edu.in/ncc/' },
    { name: 'NSS', url: 'https://rvce.edu.in/national_service_scheme_nss/' }
];

console.log("=== AUDITING CAMPUS LIFE PAGES FROM RVCE WEBSITE ===\n");

pages.forEach(p => {
    https.get(p.url, { 
        headers: { 
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' 
        } 
    }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
            console.log(`[${p.name}] Status: ${res.statusCode}`);
            // Extract h1, h2, h3, or anchor titles
            const titles = [...body.matchAll(/<h[234][^>]*>(.*?)<\/h[234]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
            console.log(`  Headings found (${titles.length}):`, titles.slice(0, 10));
            console.log('--------------------------------------------------');
        });
    }).on('error', (err) => {
        console.log(`[${p.name}] Error: ${err.message}`);
    });
});
