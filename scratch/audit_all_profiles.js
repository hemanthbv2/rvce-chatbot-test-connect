const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function getKB(filePath) {
    const fullPath = path.join(__dirname, '..', filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    const startIndex = content.indexOf('const KB = {');
    if (startIndex === -1) {
        throw new Error(`Could not find 'const KB = {' in ${filePath}`);
    }
    const delimiter = '/* =============== INPUT SANITIZATION =============== */';
    const delimiterIndex = content.indexOf(delimiter);
    if (delimiterIndex === -1) {
        throw new Error(`Could not find delimiter in ${filePath}`);
    }
    const kbCode = content.substring(startIndex, delimiterIndex).trim();
    const fnCode = `return (function() { ${kbCode}; return KB; })()`;
    try {
        return new Function(fnCode)();
    } catch (e) {
        console.error(`Failed to parse KB from ${filePath}:`, e.message);
        throw e;
    }
}

async function checkUrl(url) {
    if (!url || url === '...' || url === '#') {
        return { url, status: 'INVALID', ok: false };
    }
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
            if (res.statusCode >= 200 && res.statusCode < 400) {
                resolve({ url, status: res.statusCode, ok: true });
            } else {
                resolve({ url, status: res.statusCode, ok: false });
            }
            res.resume();
        });

        req.on('error', (e) => {
            resolve({ url, status: e.message, ok: false });
        });
        
        req.setTimeout(8000, () => {
            req.destroy();
            resolve({ url, status: 'TIMEOUT', ok: false });
        });

        req.end();
    });
}

async function main() {
    console.log("Loading KB objects...");
    const kbMain = getKB('script.js');
    const kbPlugin = getKB('rvce-chatbot/assets/script.js');

    const fMain = kbMain.faculty;
    const fPlugin = kbPlugin.faculty;

    const mainDepts = Object.keys(fMain);
    const pluginDepts = Object.keys(fPlugin);

    console.log(`Main departments: ${mainDepts.join(', ')}`);
    console.log(`Plugin departments: ${pluginDepts.join(', ')}`);

    // We want to check consistency:
    // 1. Same departments?
    // 2. For each department, verify if members match
    const discrepancies = [];
    const allUrls = new Set();

    const deptsToCheck = new Set([...mainDepts, ...pluginDepts]);

    for (const dept of deptsToCheck) {
        const mainList = fMain[dept] || [];
        const pluginList = fPlugin[dept] || [];

        // Check if department is missing in one of them
        if (!fMain[dept]) {
            discrepancies.push({
                dept,
                type: 'MISSING_DEPT_IN_MAIN',
                message: `Department '${dept}' exists in Plugin but not in Main.`
            });
            pluginList.forEach(p => allUrls.add(p.u));
            continue;
        }
        if (!fPlugin[dept]) {
            discrepancies.push({
                dept,
                type: 'MISSING_DEPT_IN_PLUGIN',
                message: `Department '${dept}' exists in Main but not in Plugin.`
            });
            mainList.forEach(m => allUrls.add(m.u));
            continue;
        }

        // Map by name (normalized lowercase, without prefixes like Dr., Prof., Mr., Ms., etc.)
        const normalizeName = (name) => {
            return name
                .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/i, '')
                .replace(/\s+/g, ' ')
                .trim()
                .toLowerCase();
        };

        const mainMap = new Map();
        mainList.forEach(m => {
            mainMap.set(normalizeName(m.n), m);
            allUrls.add(m.u);
        });

        const pluginMap = new Map();
        pluginList.forEach(p => {
            pluginMap.set(normalizeName(p.n), p);
            allUrls.add(p.u);
        });

        // Find missing/mismatched in main list
        mainList.forEach(m => {
            const norm = normalizeName(m.n);
            const p = pluginMap.get(norm);
            if (!p) {
                discrepancies.push({
                    dept,
                    type: 'MISSING_IN_PLUGIN',
                    name: m.n,
                    message: `Faculty '${m.n}' in department '${dept}' exists in Main but not in Plugin.`
                });
            } else {
                if (m.u !== p.u) {
                    discrepancies.push({
                        dept,
                        type: 'URL_MISMATCH',
                        name: m.n,
                        message: `Faculty '${m.n}' in department '${dept}' has different URLs: Main='${m.u}' vs Plugin='${p.u}'`
                    });
                }
            }
        });

        // Find missing in plugin list
        pluginList.forEach(p => {
            const norm = normalizeName(p.n);
            const m = mainMap.get(norm);
            if (!m) {
                discrepancies.push({
                    dept,
                    type: 'MISSING_IN_MAIN',
                    name: p.n,
                    message: `Faculty '${p.n}' in department '${dept}' exists in Plugin but not in Main.`
                });
            }
        });
    }

    console.log(`\nFound ${discrepancies.length} metadata discrepancies.`);
    discrepancies.forEach(d => console.log(`- [${d.dept}][${d.type}] ${d.message}`));

    console.log(`\nAuditing ${allUrls.size} unique URLs...`);
    const urlsArray = Array.from(allUrls);
    const failedUrls = [];
    const workingUrls = [];
    const batchSize = 15;

    for (let i = 0; i < urlsArray.length; i += batchSize) {
        const batch = urlsArray.slice(i, i + batchSize);
        const results = await Promise.all(batch.map(checkUrl));
        for (const res of results) {
            if (res.ok) {
                workingUrls.push(res);
            } else {
                console.log(`Broken/Invalid: ${res.url} (Status: ${res.status})`);
                failedUrls.push(res);
            }
        }
        process.stdout.write(`Checked ${Math.min(i + batchSize, urlsArray.length)} / ${urlsArray.length}...\r`);
    }

    console.log(`\n\n--- AUDIT SUMMARY ---`);
    console.log(`Total URLs Checked: ${urlsArray.length}`);
    console.log(`Working: ${workingUrls.length}`);
    console.log(`Failed/Broken: ${failedUrls.length}`);

    // Let's generate a markdown report file
    let report = `# Faculty Profile Audit Report\n\n`;
    report += `Generated on: ${new Date().toISOString()}\n\n`;
    
    report += `## Summary\n`;
    report += `- Total unique URLs checked: **${urlsArray.length}**\n`;
    report += `- Working URLs: **${workingUrls.length}**\n`;
    report += `- Broken/Failed URLs: **${failedUrls.length}**\n`;
    report += `- Database discrepancies: **${discrepancies.length}**\n\n`;

    report += `## Database Discrepancies\n`;
    if (discrepancies.length === 0) {
        report += `No discrepancies found between Main and Plugin databases. They are synchronized!\n`;
    } else {
        report += `| Dept | Discrepancy Type | Description |\n`;
        report += `| --- | --- | --- |\n`;
        discrepancies.forEach(d => {
            report += `| ${d.dept} | ${d.type} | ${d.message} |\n`;
        });
    }
    report += `\n`;

    report += `## Broken/Failed Faculty Profile URLs\n`;
    if (failedUrls.length === 0) {
        report += `All URLs are working correctly!\n`;
    } else {
        report += `| Status/Error | URL |\n`;
        report += `| --- | --- |\n`;
        failedUrls.forEach(f => {
            report += `| ${f.status} | ${f.url} |\n`;
        });
    }

    const reportPath = path.join(__dirname, '..', 'FACULTY_AUDIT_REPORT.md');
    fs.writeFileSync(reportPath, report, 'utf8');
    console.log(`Detailed audit report written to ${reportPath}`);
}

main().catch(console.error);
