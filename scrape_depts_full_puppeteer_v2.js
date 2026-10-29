const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const linksPath = path.join(__dirname, 'links.json');
const outputPath = path.join(__dirname, 'full_scraped_data_puppeteer_v2.json');

(async () => {
  const links = JSON.parse(fs.readFileSync(linksPath, 'utf-8'));
  const browser = await puppeteer.launch({ headless: true });
  const results = [];

  for (const url of links) {
    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      const html = await page.content();

      // Helper regex extraction
      const extract = (regex) => {
        const match = regex.exec(html);
        return match ? match[1].trim() : null;
      };

      const hod = extract(/Head of Department\s*[:\-]?\s*<[^>]*>([^<]+)<\/[^>]+/i) ||
        extract(/HOD\s*[:\-]?\s*<[^>]*>([^<]+)<\/[^>]+/i) ||
        extract(/Head of the Department\s*[:\-]?\s*<[^>]*>([^<]+)<\/[^>]+/i);

      const intakeUG = extract(/Intake\s*\(UG\)\s*[:\-]?\s*<[^>]*>(\d+)\s*<\/[^>]+/i) ||
        extract(/UG Intake\s*[:\-]?\s*<[^>]*>(\d+)\s*<\/[^>]+/i);

      const email = extract(/mailto:([^"'>\s]+)/i);
      const phone = extract(/(\+?\d{2,3}[\-\s]?\d{10}|\d{10})/);

      results.push({
        department: url,
        url,
        hod,
        intake: { ug: intakeUG ? parseInt(intakeUG, 10) : null, pg: null },
        contact: { email, phone },
        fees: null,
        cutoff: null,
        syllabus: null,
        placements: null,
        research: [],
        events: []
      });

      await page.close();
    } catch (err) {
      console.error('Error processing', url, err);
      results.push({ department: url, url, error: err.message });
    }
  }

  await browser.close();
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log('Scraping completed. Output written to', outputPath);
})();
