const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  
  const urls = [
    { name: 'Admissions', url: 'https://rvce.edu.in/admissions/' },
    { name: 'Placements', url: 'https://rvce.edu.in/placement_and_training/' },
    { name: 'Research', url: 'https://rvce.edu.in/research_consulting/' }
  ];
  
  const results = {};
  
  for (const item of urls) {
    try {
      const page = await browser.newPage();
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      const data = await page.evaluate(() => {
        return document.body.innerText.substring(0, 2000);
      });
      
      results[item.name] = data.replace(/\n\s*\n/g, '\n');
      await page.close();
    } catch (e) {
      results[item.name] = "Error: " + e.message;
    }
  }
  
  await browser.close();
  fs.writeFileSync('other_scraped_data.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log('Extraction of other pages completed.');
})();
