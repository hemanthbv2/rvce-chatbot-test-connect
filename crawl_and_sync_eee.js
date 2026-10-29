const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log("Navigating to RVCE EEE Faculty Page (https://rvce.edu.in/department/eee/faculty/)...");
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    await page.goto('https://rvce.edu.in/department/eee/faculty/', { waitUntil: 'networkidle2', timeout: 60000 });

    const facultyList = await page.evaluate(() => {
        const items = [];
        // Query image boxes or faculty profile elements
        const elements = document.querySelectorAll('.elementor-widget-image-box, .elementor-image-box-wrapper, .elementor-box');
        
        elements.forEach(el => {
            const nameEl = el.querySelector('.elementor-image-box-title, h3, h4');
            const linkEl = el.querySelector('a');
            const descEl = el.querySelector('.elementor-image-box-description, p');

            if (nameEl) {
                const name = nameEl.innerText.trim();
                const url = linkEl ? linkEl.href : '';
                const desc = descEl ? descEl.innerText.trim() : '';

                if (name && !name.includes('Department') && !name.includes('Faculty') && !name.includes('RVCE') && name.length < 50) {
                    // Extract designation from description
                    let designation = 'Assistant Professor';
                    if (/Professor and Head|Head of Department|HoD/i.test(desc)) designation = 'Professor & Head';
                    else if (/Associate Professor/i.test(desc)) designation = 'Associate Professor';
                    else if (/Professor/i.test(desc)) designation = 'Professor';

                    items.push({ name, url, designation, desc });
                }
            }
        });
        return items;
    });

    console.log(`Found ${facultyList.length} faculty cards on EEE page.`);
    console.log(JSON.stringify(facultyList, null, 2));

    await browser.close();

    fs.writeFileSync('eee_scraped_live.json', JSON.stringify(facultyList, null, 2));
})();
