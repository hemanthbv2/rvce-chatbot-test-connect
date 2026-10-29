const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const linksPath = path.join(__dirname, 'links.json');
const outputPath = path.join(__dirname, 'full_scraped_data_proper.json');

(async () => {
  const allLinks = JSON.parse(fs.readFileSync(linksPath, 'utf-8'));
  const deptLinks = allLinks.filter(u => u.includes('/department/'));
  
  const browser = await puppeteer.launch({ headless: true });
  const results = [];
  
  for (const url of deptLinks) {
    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      const data = await page.evaluate(() => {
        // Helper to get meta content
        const getMeta = (property) => {
          const el = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
          return el ? el.content : '';
        };
        
        const description = getMeta('og:description');
        
        // Extract intake from description or body text
        let intakeUG = null;
        const intakeMatch = description.match(/intake\s*(\d+)/i) || document.body.innerText.match(/intake[^\d]*(\d+)/i);
        if (intakeMatch) {
          intakeUG = parseInt(intakeMatch[1], 10);
        }
        
        // Find HOD
        let hod = null;
        const bodyText = document.body.innerText;
        // Search for "HOD" or "Head of Department" and get the surrounding line
        const lines = bodyText.split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (/HOD|Head of Department/i.test(line) && line.length < 150) {
            // Often the name is on the same line or the previous/next line
            if (line.split(/\s+/).length > 2) {
               hod = line.trim();
               break;
            } else if (i > 0 && lines[i-1].length < 100 && lines[i-1].trim().length > 0) {
               hod = lines[i-1].trim() + " - " + line.trim();
               break;
            }
          }
        }
        
        // Find Emails
        const emails = [];
        const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g;
        const bodyEmails = bodyText.match(emailRegex) || [];
        bodyEmails.forEach(e => {
            if (!emails.includes(e) && !e.includes('sentry') && !e.includes('example')) {
                emails.push(e);
            }
        });
        
        // Get links to Syllabus/Cutoff etc.
        const pdfLinks = Array.from(document.querySelectorAll('a'))
            .filter(a => a.href.endsWith('.pdf'))
            .map(a => ({ text: a.innerText.trim(), href: a.href }));
            
        return {
           description,
           intakeUG,
           hod,
           emails,
           pdfLinks
        };
      });
      
      results.push({
        url,
        hod: data.hod,
        intake: { ug: data.intakeUG, pg: null },
        contact: { email: data.emails.length > 0 ? data.emails[0] : null, phone: null },
        pdfs: data.pdfLinks
      });
      console.log(`Processed ${url} | HOD: ${data.hod} | Intake: ${data.intakeUG}`);
      
      await page.close();
    } catch (e) {
      console.error(`Failed ${url}: ${e.message}`);
      results.push({ url, error: e.message });
    }
  }
  
  await browser.close();
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log('Extraction completed, output written to', outputPath);
})();
