const fs = require('fs');
global.document = { readyState: 'complete' };
global.window = {};
eval(fs.readFileSync('script.js', 'utf8'));

KB.departments.ug.forEach(d => {
    if (d.c === 'aiml' || d.c === 'csaiml') {
        console.log(d.c, d.n);
    }
});
