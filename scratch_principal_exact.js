const fs = require('fs');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
fetch('https://rvce.edu.in/')
.then(r=>r.text())
.then(t=>{
    const matches = Array.from(t.matchAll(/<a[^>]+href=\"([^\"]+)\"[^>]*>/gi));
    matches.forEach(m => {
        const link = m[1];
        if(link.toLowerCase().includes('principal') || link.toLowerCase().includes('exec') || link.toLowerCase().includes('about')) {
            console.log(link);
        }
    });
});
