const puppeteer = require('puppeteer');
const fs = require('fs');

async function test() {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://rvce.edu.in/department/civil_engineering/b-e-civil/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    const html = await page.content();
    fs.writeFileSync('civil_puppeteer.html', html);
    console.log('Saved civil_puppeteer.html, size: ' + html.length);
    await browser.close();
}
test().catch(console.error);
