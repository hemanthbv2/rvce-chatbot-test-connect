// scrape_depts_full_regex.js
// Improved scraper using regex over raw HTML to capture HOD and intake data.

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const https = require('https');

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const linksPath = path.join(__dirname, 'links.json');
const allLinks = JSON.parse(fs.readFileSync(linksPath, 'utf8'));

function isDeptUrl(url) { return /\/department\//.test(url); }

async function fetchPage(url) {
  const resp = await axios.get(url, { httpsAgent, timeout: 30000 });
  return resp.data;
}

function extractWithRegex(html, regex, groupIdx = 1) {
  const match = regex.exec(html);
  return match ? match[groupIdx].trim() : null;
}

async function extractDeptData(url) {
  const html = await fetchPage(url);
  const result = { department: null, url, hod: null, intake: { ug: null, pg: null }, contact: {} };

  // Infer department name from URL
  const parts = url.split('/');
  const namePart = parts.find(p => p && p !== 'department' && !p.includes('rvce.edu.in'));
  if (namePart) result.department = namePart.replace(/[-_]/g, ' ').toUpperCase();

  // Regex patterns (case‑insensitive, DOTALL)
  const hodRegex = /(?:Head of Department|HOD)[:\-\s]*([A-Za-z\.\s]+)/i;
  const ugRegex = /UG(?:\s*Intake)?[:\-\s]*?(\d+)/i;
  const pgRegex = /PG(?:\s*Intake)?[:\-\s]*?(\d+)/i;
  const emailRegex = /mailto:([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/i;
  const phoneRegex = /\+?\d{2,4}[\s-]?\d{6,10}/;

  result.hod = extractWithRegex(html, hodRegex);
  const ug = extractWithRegex(html, ugRegex);
  const pg = extractWithRegex(html, pgRegex);
  if (ug) result.intake.ug = parseInt(ug);
  if (pg) result.intake.pg = parseInt(pg);

  const email = extractWithRegex(html, emailRegex);
  if (email) result.contact.email = email;
  const phoneMatch = phoneRegex.exec(html);
  if (phoneMatch) result.contact.phone = phoneMatch[0];

  return result;
}

(async () => {
  const deptUrls = allLinks.filter(isDeptUrl);
  const results = [];
  for (const url of deptUrls) {
    try {
      console.log('Fetching', url);
      const data = await extractDeptData(url);
      results.push(data);
    } catch (e) {
      console.error('Failed for', url, e.message);
    }
  }
  const outPath = path.join(__dirname, 'full_scraped_data_regex.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log('Done. Saved to', outPath);
})();
