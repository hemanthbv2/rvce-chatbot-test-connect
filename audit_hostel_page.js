process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');

const url = 'https://rvce.edu.in/facilities/hostel/';

console.log("=== AUDITING HOSTEL PAGE FROM RVCE WEBSITE ===\n");

https.get(url, { 
    headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' 
    } 
}, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        console.log(`Hostel Page Status: ${res.statusCode}`);
        const titles = [...body.matchAll(/<h[1234][^>]*>(.*?)<\/h[1234]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
        console.log(`Headings found (${titles.length}):`, titles);
        
        // Extract paragraphs or list items
        const paragraphs = [...body.matchAll(/<p[^>]*>(.*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(p => p.length > 20);
        console.log(`Paragraphs found (${paragraphs.length}):`, paragraphs.slice(0, 10));
    });
}).on('error', (err) => {
    console.log(`Hostel Page Error: ${err.message}`);
});
