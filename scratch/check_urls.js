const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const scriptPath = path.join(__dirname, '../rvce-chatbot/assets/script.js');
const content = fs.readFileSync(scriptPath, 'utf8');

const urlRegex = /(https?:\/\/[^\s"',\]]+)/g;
const urls = [...new Set(content.match(urlRegex) || [])];

console.log(`Found ${urls.length} unique URLs.`);

function checkUrl(url) {
    return new Promise((resolve) => {
        const client = url.startsWith('https') ? https : http;
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            },
            method: 'GET',
            rejectUnauthorized: false,
            family: 4
        };

        const req = client.request(url, options, (res) => {
            // Check for redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // If it redirects, we can consider it "working" for now, or we could follow it.
                // Let's just consider redirects as OK if they go somewhere, to avoid false positives.
                resolve({ url, status: res.statusCode + ' (Redirect)', ok: true });
            } else if (res.statusCode >= 200 && res.statusCode < 400) {
                resolve({ url, status: res.statusCode, ok: true });
            } else {
                resolve({ url, status: res.statusCode, ok: false });
            }
            res.resume();
        });

        req.on('error', (e) => {
            resolve({ url, status: e.message, ok: false });
        });
        
        req.setTimeout(15000, () => {
            req.destroy();
            resolve({ url, status: 'TIMEOUT', ok: false });
        });

        req.end();
    });
}

async function main() {
    const failedUrls = [];
    console.log("Checking URLs...");
    
    const batchSize = 10;
    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        const results = await Promise.all(batch.map(checkUrl));
        for (const res of results) {
            if (!res.ok) {
                console.log(`FAILED: ${res.url} (Status: ${res.status})`);
                failedUrls.push(res);
            }
        }
        process.stdout.write(`Checked ${Math.min(i + batchSize, urls.length)} / ${urls.length}...\r`);
    }
    
    console.log("\n--- REPORT ---");
    console.log(`Total URLs checked: ${urls.length}`);
    console.log(`Total failed URLs: ${failedUrls.length}`);
    fs.writeFileSync(path.join(__dirname, 'failed_urls.json'), JSON.stringify(failedUrls, null, 2));
    
    let markdownReport = `# Broken Links Report\n\nTotal URLs checked: ${urls.length}\nTotal failed URLs: ${failedUrls.length}\n\n| Status | URL |\n| --- | --- |\n`;
    failedUrls.forEach(f => {
        markdownReport += `| ${f.status} | ${f.url} |\n`;
    });
    fs.writeFileSync(path.join(__dirname, '../BROKEN_LINKS_REPORT.md'), markdownReport);
    console.log("Failed URLs saved to BROKEN_LINKS_REPORT.md");
}

main();
