const fs = require('fs');

async function downloadPDF() {
    console.log("Downloading RVCE First Year Syllabus PDF...");
    const url = 'https://rvce.edu.in/sites/default/files/FIRST-YEAR-SYLLABUS-BOOK-2022-SCHEMEFORPRINT.pdf';
    
    // Ignore TLS due to RVCE cert issues
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        
        fs.writeFileSync('./RVCE_Syllabus.pdf', buffer);
        console.log("Successfully downloaded RVCE_Syllabus.pdf");
    } catch (e) {
        console.error("Error downloading:", e);
    }
}

downloadPDF();
