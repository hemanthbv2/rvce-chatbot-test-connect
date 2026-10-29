const fs = require('fs');
const html = fs.readFileSync('ae_faculty.html', 'utf8');
// Find all faculty headings and their following links
const regex = /<h2 class="elementor-heading-title elementor-size-default">([^<]+)<\/h2>[\s\S]*?<a[^>]*href="([^"]+)"/ig;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(`${match[1].trim()} -> ${match[2]}`);
}
