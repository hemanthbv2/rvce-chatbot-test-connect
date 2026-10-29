const fs = require('fs');

let code = fs.readFileSync('../script.js', 'utf8');

const prefix = `
const document = { getElementById: () => ({ addEventListener: () => {}, classList: { add: () => {}, remove: () => {} } }), querySelectorAll: () => [], addEventListener: () => {} };
const window = { addEventListener: () => {}, location: { search: '' } };
const localStorage = { getItem: () => null, setItem: () => {} };
const navigator = { onLine: true };
const rvceChatbotAjax = {};
const $ = () => ({ addEventListener: () => {}, classList: { add: () => {}, remove: () => {} }, style: {} });
`;

// Remove the conflicting declarations from script.js to avoid "already declared" errors
code = code.replace(/const document /g, '//');
code = code.replace(/const window /g, '//');
code = code.replace(/const localStorage /g, '//');

code = code.replace(
    "return { type: 'keyword', id: best, suggestions: [] };",
    "console.log('BEST:', best, 'MATCHED:', matchedIntents.map(q=>q.id)); return { type: 'keyword', id: best, suggestions: [] };"
);

const suffix = `
try {
    SESSION.lastIntent = 'dept_cs';
    console.log('RESULT:', classifyIntent('who is the hod?'));
} catch(e) { console.error(e); }
`;

fs.writeFileSync('injected_script.js', prefix + code + suffix);
