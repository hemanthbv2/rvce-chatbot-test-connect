const fs = require('fs');
const pdf = require('pdf-parse');

async function downloadAndParse() {
    console.log("Downloading RVCE First Year Syllabus PDF...");
    const url = 'https://rvce.edu.in/sites/default/files/FIRST-YEAR-SYLLABUS-BOOK-2022-SCHEMEFORPRINT.pdf';
    
    // Ignore TLS due to RVCE cert issues
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        console.log("Parsing PDF...");
        const data = await pdf(buffer);
        
        fs.writeFileSync('rvce_syllabus.txt', data.text);
        
        const text = data.text.toLowerCase();
        const kws = ['dress code', 'uniform', 'ragging', 'refund', 'cancellation', 'code of conduct'];
        
        console.log("--- RESULTS ---");
        kws.forEach(kw => {
            if(text.includes(kw)) {
                let idx = text.indexOf(kw);
                console.log(`FOUND '${kw}': ...${text.substring(Math.max(0, idx-100), Math.min(text.length, idx+100)).replace(/\s+/g,' ')}...`);
            }
        });
    } catch (e) {
        console.error("Error:", e);
    }
}

downloadAndParse();
