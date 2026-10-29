const puppeteer = require('puppeteer');
const fs = require('fs');

const depts = [
    { code: 'ae', url: 'https://rvce.edu.in/department/ae/faculty/' },
    { code: 'aiml', url: 'https://rvce.edu.in/department/aiml/faculty/' },
    { code: 'bt', url: 'https://rvce.edu.in/department/bt/faculty/' },
    { code: 'ch', url: 'https://rvce.edu.in/department/ch/faculty/' },
    { code: 'chy', url: 'https://rvce.edu.in/department/chy/faculty/' },
    { code: 'cv', url: 'https://rvce.edu.in/department/cv/faculty/' },
    { code: 'cs', url: 'https://rvce.edu.in/department/cse/faculty/' },
    { code: 'ee', url: 'https://rvce.edu.in/department/eee/faculty/' },
    { code: 'ec', url: 'https://rvce.edu.in/department/ece/faculty/' },
    { code: 'ei', url: 'https://rvce.edu.in/department/eim/faculty/' },
    { code: 'et', url: 'https://rvce.edu.in/department/etc/faculty/' },
    { code: 'im', url: 'https://rvce.edu.in/department/iem/faculty/' },
    { code: 'is', url: 'https://rvce.edu.in/department/ise/faculty/' },
    { code: 'mat', url: 'https://rvce.edu.in/department/maths/faculty/' },
    { code: 'mca', url: 'https://rvce.edu.in/department/mca/faculty/' },
    { code: 'me', url: 'https://rvce.edu.in/department/me/faculty/' },
    { code: 'phy', url: 'https://rvce.edu.in/department/physics/faculty/' }
];

(async () => {
    console.log("Starting deep verification of all 17 departments...");
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    const liveData = {};

    for (const d of depts) {
        console.log(`Checking ${d.code.toUpperCase()} at ${d.url}...`);
        try {
            await page.goto(d.url, { waitUntil: 'networkidle2', timeout: 30000 });
            const list = await page.evaluate(() => {
                const results = [];
                // Look for elementor image box headings or links to department faculty profiles
                const links = Array.from(document.querySelectorAll('a[href*="/department/"]'));
                links.forEach(a => {
                    const href = a.href;
                    const text = a.innerText.trim();
                    if (href && !href.endsWith('/faculty/') && !href.endsWith('/faculty') && !href.includes('#')) {
                        if (!results.some(r => r.url === href)) {
                            results.push({ text: text || href.split('/').filter(Boolean).pop(), url: href });
                        }
                    }
                });
                return results;
            });
            liveData[d.code] = list;
            console.log(`  -> ${d.code.toUpperCase()}: ${list.length} faculty profile links found.`);
        } catch (e) {
            console.error(`  -> Failed to check ${d.code}: ${e.message}`);
        }
    }

    await browser.close();

    fs.writeFileSync('deep_verification_live.json', JSON.stringify(liveData, null, 2));
    console.log("Deep verification crawl saved to deep_verification_live.json!");
})();
