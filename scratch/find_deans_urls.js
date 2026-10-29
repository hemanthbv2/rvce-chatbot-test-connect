const https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const urls = [
    'https://rvce.edu.in/department/me/faculty/',
    'https://rvce.edu.in/department/cse/faculty/',
    'https://rvce.edu.in/department/ise/faculty/',
    'https://rvce.edu.in/department/ece/faculty/'
];

urls.forEach(url => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        let data = '';
        res.on('data', d => data += d);
        res.on('end', () => {
            console.log(`Fetched ${url}, status: ${res.statusCode}, size: ${data.length}`);
            const regex = /href=['"]([^'"]+)['"]/g;
            let matches;
            const matchesFound = [];
            while ((matches = regex.exec(data)) !== null) {
                const link = matches[1];
                if (link.includes('shanmukha') || link.includes('sagar') || link.includes('uttara') || link.includes('krishna') || link.includes('ranganath')) {
                    matchesFound.push(link);
                }
            }
            if (matchesFound.length > 0) {
                console.log(`Found matches in ${url}:`, matchesFound);
            } else {
                // Log a snippet of the page or list of links to see what is going on
                const sampleLinks = [];
                const regexSample = /href=['"]([^'"]+)['"]/g;
                let count = 0;
                while ((matches = regexSample.exec(data)) !== null && count < 10) {
                    if (matches[1].includes('department')) {
                        sampleLinks.push(matches[1]);
                        count++;
                    }
                }
                console.log(`Sample links from ${url}:`, sampleLinks);
            }
        });
    });
});
