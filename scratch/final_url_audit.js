
const fs = require('fs');

async function checkUrls() {
    const urls = fs.readFileSync('scratch/final_audit_urls.txt', 'utf8').split('\n').filter(Boolean);
    const results = [];
    const batchSize = 25;

    console.log(`Auditing ${urls.length} URLs in batches of ${batchSize}...`);

    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(async (url) => {
            try {
                // Remove trailing fragments/hashes for clean checking
                const cleanUrl = url.split('#')[0];
                const response = await fetch(cleanUrl, { 
                    method: 'HEAD',
                    redirect: 'follow',
                    headers: { 'User-Agent': 'Mozilla/5.0' }
                });
                
                if (response.status === 404) {
                    return { url, status: 404 };
                }
                return null;
            } catch (error) {
                // If HEAD fails, try GET (some servers block HEAD)
                try {
                    const cleanUrl = url.split('#')[0];
                    const response = await fetch(cleanUrl, { method: 'GET' });
                    if (response.status === 404) return { url, status: 404 };
                } catch (e) {
                    return { url, status: 'Error', message: e.message };
                }
                return null;
            }
        }));
        
        const failures = batchResults.filter(Boolean);
        results.push(...failures);
        console.log(`Processed ${Math.min(i + batchSize, urls.length)}/${urls.length}... Found ${results.length} failures so far.`);
    }

    fs.writeFileSync('scratch/final_audit_failures.json', JSON.stringify(results, null, 2));
    console.log(`\nAudit Complete. Total failures found: ${results.length}`);
}

checkUrls();
