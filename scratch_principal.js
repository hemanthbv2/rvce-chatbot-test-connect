const fs = require('fs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
fetch('https://rvce.edu.in/about_us/key-executives/')
.then(r=>r.text())
.then(t=>{
    const matches = Array.from(t.matchAll(/<a[^>]+href=\"([^\"]+)\"[^>]*>(.*?)<\/a>/gi));
    matches.forEach(m => {
        const text = m[2].replace(/&amp;/g, '&').trim();
        const link = m[1];
        if(text.toLowerCase().includes('principal') || link.toLowerCase().includes('principal')) {
            console.log(text + ' -> ' + link);
        }
    });
});
