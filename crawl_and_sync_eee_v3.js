const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log("Deep auditing EEE faculty page...");
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    await page.goto('https://rvce.edu.in/department/eee/faculty/', { waitUntil: 'networkidle2', timeout: 60000 });

    const allLinks = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('a'));
        return anchors
            .map(a => ({ text: a.innerText.trim(), href: a.href }))
            .filter(item => item.href.includes('/eee/') || item.href.includes('/electrical/'));
    });

    console.log("All EEE links on page:");
    console.log(JSON.stringify(allLinks, null, 2));

    await browser.close();

    fs.writeFileSync('eee_all_links.json', JSON.stringify(allLinks, null, 2));
})();
