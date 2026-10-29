const fs = require('fs');
const PDFParser = require("pdf2json");

let pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    const text = pdfParser.getRawTextContent();
    fs.writeFileSync('./rvce_syllabus_raw.txt', text);
    console.log("PDF parsed successfully into rvce_syllabus_raw.txt");
});

pdfParser.loadPDF("./RVCE_Syllabus.pdf");
