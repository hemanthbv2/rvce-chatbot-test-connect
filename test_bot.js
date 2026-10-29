const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        
        const path = require('path');
        const url = 'file://' + path.resolve('index.html');
        console.log("Navigating to:", url);
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Open chat if not open
        await page.click('#chatFab');
        await new Promise(r => setTimeout(r, 1000));
        
        // Type query
        await page.type('#userInput', 'ECE PLACEMENT STATS 2025');
        await page.click('#sendBtn');
        
        // Wait for bot reply
        await new Promise(r => setTimeout(r, 2000));
        
        // Get all messages
        const msgs = await page.$$eval('.chat-messages .message-content p, .chat-messages .message-content span, .chat-messages .message-content div, .chat-messages .message-content strong', elements => elements.map(el => el.innerText));
        
        console.log("--- CHAT MESSAGES ---");
        console.log(msgs.join('\n'));
        console.log("---------------------");

        await browser.close();
    } catch (e) {
        console.error(e);
    }
})();
