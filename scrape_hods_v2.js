const puppeteer = require('puppeteer');

const targets = [
    { code: 'me', name: 'Mechanical Engineering', url: 'https://rvce.edu.in/department/me/faculty/' },
    { code: 'ei', name: 'Electronics & Instrumentation', url: 'https://rvce.edu.in/department/ei/faculty/' },
    { code: 'aiml', name: 'AI & Machine Learning', url: 'https://rvce.edu.in/department/ai-ml/faculty/' },
    { code: 'ee', name: 'Electrical & Electronics', url: 'https://rvce.edu.in/department/eee/faculty/' }
];

(async () => {
    console.log("Launching headless browser v2 to inspect faculty cards...\n");
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const t of targets) {
        try {
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
            console.log(`[${t.code.toUpperCase()}] Opening ${t.url}...`);
            await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 35000 });

            const result = await page.evaluate(() => {
                const text = document.body.innerText;
                const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
                
                // Find lines with Head or HOD or Professor
                const hodLines = [];
                for (let i = 0; i < lines.length; i++) {
                    if (/Head|HOD|Professor\s*&\s*Head/i.test(lines[i])) {
                        const context = lines.slice(Math.max(0, i-2), Math.min(lines.length, i+3)).join(' | ');
                        hodLines.push(context);
                    }
                }
                return { title: document.title, hodLines: hodLines.slice(0, 5) };
            });

            console.log(`[${t.code.toUpperCase()}] Title:`, result.title);
            console.log(`[${t.code.toUpperCase()}] HoD Contexts:`, result.hodLines);
            console.log('--------------------------------------------------');

            await page.close();
        } catch (e) {
            console.error(`[${t.code.toUpperCase()}] Error:`, e.message);
        }
    }

    await browser.close();
})();
