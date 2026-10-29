const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');

// The KB object starts with `const KB = {` and ends before `/* =============== CONTENT MODERATION =============== */`
// Actually, it ends before the first function `function checkModeration` or similar.
const kbStart = scriptContent.indexOf('const KB = {');
let kbEnd = scriptContent.indexOf('/* =============== CONTENT MODERATION =============== */');

if (kbEnd === -1) {
  kbEnd = scriptContent.indexOf('const BLOCKED');
}

if (kbEnd === -1) {
  kbEnd = scriptContent.indexOf('function ');
}

// Just slice it, evaluate it in an isolated scope
const kbString = scriptContent.slice(kbStart, kbEnd).trim();

// To properly evaluate, we just wrap it in a function that returns KB
try {
  const getKB = new Function(`
    ${kbString}
    return KB;
  `);
  
  const kb = getKB();
  const extracted = {};
  for (const key in kb) {
    if (key !== 'departments') {
      extracted[key] = kb[key];
    }
  }
  
  fs.writeFileSync('kb_existing_non_dept.json', JSON.stringify(extracted, null, 2));
  console.log('Successfully extracted non-department KB data');
} catch (e) {
  console.error('Error evaluating script string:', e);
}
