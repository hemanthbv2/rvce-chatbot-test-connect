const fs = require('fs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
fetch('https://rvce.edu.in/programmes/')
.then(r=>r.text())
.then(t=>{
    const matches = Array.from(t.matchAll(/<a[^>]+href=\"([^\"]+)\"[^>]*>(.*?)<\/a>/gi));
    matches.forEach(m => {
        const text = m[2].replace(/&amp;/g, '&').trim();
        if(text.includes('B.E.')) {
            console.log(text + ' -> ' + m[1]);
        }
    });
});
