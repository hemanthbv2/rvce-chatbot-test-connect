const https = require('https');

https.get('https://rvce.edu.in/about_us/key-executives/', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
}, (res) => {
    let data = '';
    
    if (res.statusCode !== 200) {
        console.error('Failed, status code:', res.statusCode);
        return;
    }

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        // Find links
        const regex = /href=['"](https:\/\/rvce\.edu\.in\/department\/[^'"]+)['"]/g;
        let matches;
        const links = new Set();
        
        while ((matches = regex.exec(data)) !== null) {
            links.add(matches[1]);
        }
        
        if (links.size > 0) {
            console.log(Array.from(links).join('\n'));
        } else {
            console.log('No department links found on the key executives page.');
            // Let's print out all hrefs just to see
            const allRegex = /href=['"]([^'"]+)['"]/g;
            const allLinks = new Set();
            while ((matches = allRegex.exec(data)) !== null) {
                if (matches[1].includes('dr')) {
                    allLinks.add(matches[1]);
                }
            }
            console.log('\nOther links with "dr":');
            console.log(Array.from(allLinks).join('\n'));
        }
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
