const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log("Crawling IEM faculty page (https://rvce.edu.in/department/iem/faculty/)...");
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    await page.goto('https://rvce.edu.in/department/iem/faculty/', { waitUntil: 'networkidle2', timeout: 60000 });

    const facultyMembers = await page.evaluate(() => {
        const results = [];
        const links = document.querySelectorAll('a[href*="/department/"]');
        links.forEach(a => {
            const href = a.href;
            const text = a.innerText.trim();
            if (href.includes('/department/iem/') || href.includes('/department/im/')) {
                if (text && !text.includes('Department') && !text.includes('Faculty') && !text.includes('Read More') && text.length < 50) {
                    if (!results.some(r => r.url === href)) {
                        let parent = a.closest('.elementor-widget-image-box, .elementor-box, td, div');
                        let parentText = parent ? parent.innerText : '';
                        
                        let designation = 'Assistant Professor';
                        if (/Head|HoD|HOD/i.test(parentText)) designation = 'Professor & Head';
                        else if (/Associate Professor/i.test(parentText)) designation = 'Associate Professor';
                        else if (/Professor/i.test(parentText)) designation = 'Professor';

                        results.push({
                            name: text,
                            url: href,
                            designation: designation,
                            fullContext: parentText
                        });
                    }
                }
            }
        });
        return results;
    });

    console.log(`Extracted ${facultyMembers.length} IEM faculty members with direct profile URLs.`);
    console.log(JSON.stringify(facultyMembers, null, 2));

    await browser.close();

    fs.writeFileSync('iem_scraped.json', JSON.stringify(facultyMembers, null, 2));
})();
