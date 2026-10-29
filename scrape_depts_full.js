// scrape_depts_full.js
// Node.js script to scrape comprehensive department data from RVCE website
// Uses axios, cheerio, pdf-parse for PDF extraction (if needed)

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const https = require('https');
const cheerio = require('cheerio');
const pdfParse = require('pdf-parse');

// Custom HTTPS agent to ignore self‑signed certificates
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

// Load links.json
const linksPath = path.join(__dirname, 'links.json');
const allLinks = JSON.parse(fs.readFileSync(linksPath, 'utf8'));

// Helper to determine if a URL is a department page
function isDeptUrl(url) {
  return /\/department\//.test(url);
}

// Helper to fetch HTML page
async function fetchPage(url) {
  const resp = await axios.get(url, { httpsAgent, timeout: 15000 });
  return resp.data;
}

// Helper to download PDF and extract text (returns empty string on failure)
async function fetchPdfText(url) {
  try {
    const resp = await axios.get(url, { responseType: 'arraybuffer', httpsAgent, timeout: 15000 });
    const data = await pdfParse(resp.data);
    return data.text || '';
  } catch (e) {
    console.warn('PDF fetch failed for', url, e.message);
    return '';
  }
}

// Main extraction logic for a department page
async function extractDeptData(url) {
  const html = await fetchPage(url);
  const $ = cheerio.load(html);

  // Initial empty result
  const result = { department: null, url, hod: null, intake: { ug: null, pg: null }, contact: {}, fees: null, cutoff: null, syllabus: null, placements: null, research: [], events: [] };

  // Try to infer department name from URL
  const parts = url.split('/');
  const namePart = parts.find(p => p && p !== 'department' && !p.includes('rvce.edu.in'));
  if (namePart) result.department = namePart.replace(/[-_]/g, ' ').toUpperCase();

  // HOD – look for headings containing "Head of Department" or "HOD"
  const hodText = $('*')
    .filter((i, el) => $(el).text().match(/Head of Department|HOD/i))
    .first()
    .text();
  if (hodText) {
    const match = hodText.match(/(?:Head of Department|HOD)[:\s]*([A-Za-z\.\s]+)/i);
    if (match) result.hod = match[1].trim();
  }

  // Intake – try to find numbers like "Intake: 120" or "UG Intake" etc.
  const intakeText = $('*')
    .filter((i, el) => $(el).text().match(/Intake/i))
    .first()
    .text();
  if (intakeText) {
    const ugMatch = intakeText.match(/UG(?:\s*Intake)?:?\s*(\d+)/i);
    const pgMatch = intakeText.match(/PG(?:\s*Intake)?:?\s*(\d+)/i);
    if (ugMatch) result.intake.ug = parseInt(ugMatch[1]);
    if (pgMatch) result.intake.pg = parseInt(pgMatch[1]);
  }

  // Contact – email and phone patterns
  const email = $('a[href^="mailto:"]')
    .first()
    .attr('href');
  if (email) result.contact.email = email.replace('mailto:', '').trim();
  const phoneMatch = html.match(/\+?\d{2,4}[\s-]?\d{6,10}/g);
  if (phoneMatch && phoneMatch.length) result.contact.phone = phoneMatch[0];

  // Look for PDF links for fees, cutoff, syllabus, placements
  $('a').each((i, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const lower = href.toLowerCase();
    if (lower.includes('fee') && lower.endsWith('.pdf')) result.fees = href;
    else if (lower.includes('cutoff') && lower.endsWith('.pdf')) result.cutoff = href;
    else if (lower.includes('syllabus') && lower.endsWith('.pdf')) result.syllabus = href;
    else if (lower.includes('placement') && lower.endsWith('.pdf')) result.placements = href;
  });

  // Research centers – look for list items containing "Center" or "Lab"
  $('li').each((i, el) => {
    const txt = $(el).text();
    if (/center|lab|research/i.test(txt)) result.research.push(txt.trim());
  });

  // Events – look for recent news or event sections
  $('section, div').each((i, el) => {
    const txt = $(el).text();
    if (/event|workshop|seminar|conference/i.test(txt) && txt.length < 200) {
      result.events.push(txt.trim().split('\n')[0]);
    }
  });

  // Trim arrays (unique)
  result.research = [...new Set(result.research)];
  result.events = [...new Set(result.events)];

  return result;
}

(async () => {
  const deptUrls = allLinks.filter(isDeptUrl);
  const results = [];
  for (const url of deptUrls) {
    try {
      console.log('Scraping', url);
      const data = await extractDeptData(url);
      results.push(data);
    } catch (e) {
      console.error('Failed for', url, e.message);
    }
  }
  const outPath = path.join(__dirname, 'full_scraped_data.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log('Scraping complete. Saved to', outPath);
})();
