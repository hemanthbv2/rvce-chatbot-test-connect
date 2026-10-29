const fs = require('fs');
const content = fs.readFileSync('d:/hemanth bv/New folder/chatbot-ai-main/script.js', 'utf8');

const match = content.indexOf('const QA =');
if (match !== -1) {
    console.log("Found QA at index", match);
    const lines = content.substring(0, match).split('\n');
    console.log("Line number is", lines.length);
} else {
    console.log("QA NOT FOUND!");
}
