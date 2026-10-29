const fs = require('fs');

const scraped = JSON.parse(fs.readFileSync('ece_scraped.json', 'utf8'));
const scriptCode = fs.readFileSync('script.js', 'utf8');

const botEcMatch = scriptCode.match(/ec:\s*\[([\s\S]*?)\]\s*,\s*ei:/i);
let botList = [];
if (botEcMatch) {
    botList = [...botEcMatch[1].matchAll(/n:\s*"([^"]+)"/g)].map(x => x[1]);
}

console.log("Current Chatbot ECE Faculty Count:", botList.length);
console.log("Scraped ECE Faculty Count:", scraped.length);

function slugToName(url) {
    let slug = url.replace(/\/$/, '').split('/').pop();
    let parts = slug.split('-').map(p => {
        if (p === 'dr') return 'Dr.';
        if (p === 'prof') return 'Prof.';
        if (p.length === 1) return p.toUpperCase() + '.';
        return p.charAt(0).toUpperCase() + p.slice(1);
    });
    return parts.join(' ');
}

const liveList = scraped.map(s => slugToName(s.url));

fs.writeFileSync('ece_live_names.json', JSON.stringify(liveList, null, 2));

console.log("\nLive ECE Faculty Names Extracted:");
liveList.forEach((n, i) => console.log(`${i+1}. ${n}`));
