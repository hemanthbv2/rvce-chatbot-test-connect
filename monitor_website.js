const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const SNAPSHOT_FILE = 'website_snapshot.json';

const urlsToMonitor = [
    { name: 'Placements', url: 'https://rvce.edu.in/placement_and_training/' }
];

const https = require('https');

async function fetchAndExtractText(url) {
    try {
        const agent = new https.Agent({
            rejectUnauthorized: false
        });
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            },
            httpsAgent: agent
        });
        const $ = cheerio.load(response.data);
        
        // Remove scripts, styles, and empty elements
        $('script, style, noscript').remove();
        
        // Focus on the main content area to avoid navbar/footer noise
        // RVCE uses elementor or general main blocks. Let's just grab the body text
        const bodyText = $('body').text();
        
        // Clean up whitespace
        const cleanText = bodyText.replace(/\s+/g, ' ').trim();
        return cleanText;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        return null;
    }
}

async function runMonitor() {
    console.log("Starting RVCE Website Monitor...");
    let currentSnapshot = {};
    
    for (const page of urlsToMonitor) {
        console.log(`Fetching ${page.name}...`);
        const text = await fetchAndExtractText(page.url);
        if (text) {
            currentSnapshot[page.name] = text;
        }
    }

    let previousSnapshot = {};
    if (fs.existsSync(SNAPSHOT_FILE)) {
        try {
            previousSnapshot = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8'));
        } catch (e) {
            console.error("Could not parse previous snapshot.", e);
        }
    } else {
        console.log("No previous snapshot found. Creating baseline...");
    }

    let changesDetected = [];
    
    for (const page of urlsToMonitor) {
        if (!currentSnapshot[page.name]) continue;
        
        const currentText = currentSnapshot[page.name];
        const previousText = previousSnapshot[page.name];
        
        if (!previousText) {
            changesDetected.push(`- Baseline created for **${page.name}**.`);
        } else if (currentText !== previousText) {
            // Very rudimentary change detection (just flag it changed)
            // A more complex system would do string diffing.
            const lengthDiff = currentText.length - previousText.length;
            changesDetected.push(`- Content changed on **${page.name}**. Length difference: ${lengthDiff > 0 ? '+' : ''}${lengthDiff} characters.`);
        }
    }

    // Save new snapshot
    fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(currentSnapshot, null, 2));

    if (changesDetected.length > 0) {
        console.log("Changes Detected:");
        changesDetected.forEach(c => console.log(c));
    } else {
        console.log("No changes detected since last scan.");
    }
}

runMonitor();
