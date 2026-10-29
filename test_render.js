const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const urls = [
    'https://rvce.edu.in/department/cse/b-e-cse/',
    'https://rvce.edu.in/department/civil_engineering/b-e-civil/'
  ];
  
  for (const url of urls) {
    console.log(`\n--- Fetching ${url} ---`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    const text = await page.evaluate(() => document.body.innerText);
    
    // Look for HOD
    const hodMatch = text.match(/Head of Department[\s\S]{0,100}/i) || text.match(/HOD[\s\S]{0,100}/i) || text.match(/Head of the Department[\s\S]{0,100}/i);
    console.log("HOD Match:", hodMatch ? hodMatch[0].replace(/\n/g, ' ').substring(0, 100) : "Not found");
    
    // Look for Intake
    const intakeMatch = text.match(/Intake[\s\S]{0,100}/i);
    console.log("Intake Match:", intakeMatch ? intakeMatch[0].replace(/\n/g, ' ').substring(0, 100) : "Not found");
    
    // Look for Email
    const emailMatch = text.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/i);
    console.log("Email Match:", emailMatch ? emailMatch[0] : "Not found");
  }
  
  await browser.close();
})();
