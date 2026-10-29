// scrape_depts_full_puppeteer.js
// Uses Puppeteer to render RVCE department pages (bypassing 403 restrictions)
// Extracts comprehensive data similar to scrape_depts_full.js

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const linksPath = path.join(__dirname, 'links.json');
const allLinks = JSON.parse(fs.readFileSync(linksPath, 'utf8'));

function isDeptUrl(url) { return /\/department\//.test(url); }

function inferDeptName(url) {
  const parts = url.split('/');
  const namePart = parts.find(p => p && p !== 'department' && !p.includes('rvce.edu.in'));
  return namePart ? namePart.replace(/[-_]/g, ' ').toUpperCase() : null;
}

async function extractFromPage(page) {
  // Evaluate in page context
  const result = await page.evaluate(() => {
    const getText = sel => {
      const el = document.querySelector(sel);
      return el ? el.innerText.trim() : null;
    };
    const result = {
      department: null,
      url: location.href,
      hod: null,
      intake: { ug: null, pg: null },
      contact: {},
      fees: null,
      cutoff: null,
      syllabus: null,
      placements: null,
      research: [],
      events: []
    };
    // HOD detection
    const hodEl = Array.from(document.querySelectorAll('body *')).find(el => /Head of Department|HOD/i.test(el.innerText));
    if (hodEl) {
      const match = hodEl.innerText.match(/(?:Head of Department|HOD)[:\s]*([A-Za-z\.\s]+)/i);
      if (match) result.hod = match[1].trim();
    }
    // Intake detection
    const intakeEl = Array.from(document.querySelectorAll('body *')).find(el => /Intake/i.test(el.innerText));
    if (intakeEl) {
      const txt = intakeEl.innerText;
      const ug = txt.match(/UG(?:\s*Intake)?:?\s*(\d+)/i);
      const pg = txt.match(/PG(?:\s*Intake)?:?\s*(\d+)/i);
      if (ug) result.intake.ug = parseInt(ug[1]);
      if (pg) result.intake.pg = parseInt(pg[1]);
    }
    // Contact info
    const emailEl = document.querySelector('a[href^="mailto:"]');
    if (emailEl) result.contact.email = emailEl.getAttribute('href').replace('mailto:', '').trim();
    const phoneMatch = document.body.innerHTML.match(/\+?\d{2,4}[\s-]?\d{6,10}/g);
    if (phoneMatch && phoneMatch.length) result.contact.phone = phoneMatch[0];
    // PDF links for fees, cutoff, syllabus, placements
    const anchors = Array.from(document.querySelectorAll('a')).map(a => a.href);
    anchors.forEach(href => {
      const low = href.toLowerCase();
      if (low.includes('fee') && low.endsWith('.pdf')) result.fees = href;
      else if (low.includes('cutoff') && low.endsWith('.pdf')) result.cutoff = href;
      else if (low.includes('syllabus') && low.endsWith('.pdf')) result.syllabus = href;
      else if (low.includes('placement') && low.endsWith('.pdf')) result.placements = href;
    });
    // Research centers / labs
    const liTexts = Array.from(document.querySelectorAll('li')).map(li => li.innerText);
    liTexts.forEach(t => { if (/center|lab|research/i.test(t)) result.research.push(t.trim()); });
    // Events (short sections containing keywords)
    const sections = Array.from(document.querySelectorAll('section, div'));
    sections.forEach(sec => {
      const txt = sec.innerText;
      if (/event|workshop|seminar|conference/i.test(txt) && txt.length < 200) {
        result.events.push(txt.trim().split('\n')[0]);
      }
    });
    // Deduplicate arrays
    result.research = [...new Set(result.research)];
    result.events = [...new Set(result.events)];
    return result;
  });
  return result;
}

(async () => {
  const deptUrls = allLinks.filter(isDeptUrl);
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const results = [];
  for (const url of deptUrls) {
    try {
      console.log('Navigating', url);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const data = await extractFromPage(page);
      data.department = inferDeptName(url) || data.department;
      results.push(data);
    } catch (e) {
      console.error('Failed for', url, e.message);
    }
  }
  await browser.close();
  const outPath = path.join(__dirname, 'full_scraped_data_puppeteer.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log('Scraping complete. Saved to', outPath);
})();
