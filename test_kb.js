const fs = require('fs');
let text = fs.readFileSync('script.js', 'utf8');

let kbStart = text.indexOf('const KB = {');
if (kbStart === -1) kbStart = text.indexOf('let KB = {');

let kbEnd = text.indexOf('const QA =', kbStart);
if (kbEnd === -1) kbEnd = text.indexOf('let QA =', kbStart);

let kbText = text.substring(kbStart, kbEnd).trim();
if (kbText.endsWith(';')) kbText = kbText.slice(0, -1);

let KBEval;
eval('KBEval = ' + kbText.replace(/const KB = |let KB = /, ''));

console.log(Object.keys(KBEval.placement_stats));
