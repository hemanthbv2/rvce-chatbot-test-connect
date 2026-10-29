
const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');

// Simple regex to find URLs in the script
const urlRegex = /https?:\/\/rvce\.edu\.in\/[^\s'"]+/g;
const matches = content.match(urlRegex);

if (matches) {
    const uniqueUrls = Array.from(new Set(matches));
    fs.writeFileSync('scratch/final_audit_urls.txt', uniqueUrls.join('\n'));
    console.log(`Found ${uniqueUrls.length} unique URLs for final testing.`);
} else {
    console.log("No URLs found.");
}
