const puppeteer = require('puppeteer');
const fs = require('fs');
const marked = require('marked');

(async () => {
    try {
        const md = fs.readFileSync('RVCE_Chatbot_Documentation.md', 'utf8');
        const html = `
        <html>
        <head>
            <style>
                body { font-family: 'Arial', sans-serif; padding: 40px; color: #333; line-height: 1.6; }
                h1, h2, h3 { color: #1a365d; }
                code { background: #f4f4f4; padding: 2px 5px; border-radius: 4px; }
                pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
            </style>
        </head>
        <body>
            ${marked.parse(md)}
        </body>
        </html>`;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html);
        await page.pdf({ path: 'RVCE_Chatbot_Documentation.pdf', format: 'A4' });
        await browser.close();
        console.log('PDF created successfully!');
    } catch (err) {
        console.error(err);
    }
})();
