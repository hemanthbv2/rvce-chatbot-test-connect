const puppeteer = require('puppeteer');

const targets = [
    { code: 'me', name: 'Mechanical Engineering', url: 'https://rvce.edu.in/department/me/faculty/' },
    { code: 'ei', name: 'Electronics & Instrumentation', url: 'https://rvce.edu.in/department/ei/faculty/' },
    { code: 'aiml', name: 'AI & Machine Learning', url: 'https://rvce.edu.in/department/ai-ml/faculty/' },
    { code: 'ee', name: 'Electrical & Electronics', url: 'https://rvce.edu.in/department/eee/faculty/' }
];

(async () => {
    console.log("Launching headless browser to check HoD names...\n");
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const t of targets) {
        try {
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
            console.log(`Navigating to ${t.name} (${t.url})...`);
            await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: 30000 });

            const content = await page.content();
            
            // Extract text from headers or paragraphs that mention Head of Department or HOD or Professor & Head
            const hodMatches = [...content.matchAll(/(?:Head of Department|HOD|Head of the Department|Professor\s*&\s*Head)[^<]*<[^>]*>([^<]+)/gi)];
            console.log(`[${t.code.toUpperCase()}] Text matches found:`, hodMatches.map(m => m[1].trim()).filter(Boolean));

            await page.close();
        } catch (e) {
            console.error(`Error fetching ${t.code}:`, e.message);
        }
    }

    await browser.close();
})();
