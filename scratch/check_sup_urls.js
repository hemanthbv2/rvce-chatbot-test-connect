const fs = require('fs');
const html = fs.readFileSync('ae_faculty.html', 'utf8');
const regex = /href="([^"]*supreeth[^"]*)"/ig;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log("FOUND URL:", match[1]);
}
