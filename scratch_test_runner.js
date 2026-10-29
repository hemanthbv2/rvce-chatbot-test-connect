const fs = require('fs');
let scriptStr = fs.readFileSync('script.js', 'utf8');

let appendStr = `
global.test_KB = KB;
global.test_classifyIntent = classifyIntent;
global.test_getResponse = getResponse;
`;

let idx = scriptStr.indexOf('/* =============== KNOWLEDGE BASE =============== */');
if (idx !== -1) {
    // Insert after KB definition instead of at the end of the file
    let idx2 = scriptStr.indexOf('/* =============== INTENT GRAPH (STATE MACHINE) =============== */');
    let idx3 = scriptStr.indexOf('/* =============== DOM MANIPULATION =============== */');
    
    // We can just extract everything between start and DOM MANIPULATION, but remove the wrapper
    // The wrapper is function startRVCEChatbot() {
    scriptStr = scriptStr.substring(0, idx3);
    scriptStr = scriptStr.replace('function startRVCEChatbot() {', '');
    scriptStr += appendStr;
}

let fullScript = `
function createStub() {
    return {
        addEventListener: () => {},
        classList: {add:()=>{}, remove:()=>{}, toggle:()=>{}, contains:()=>false},
        setAttribute:()=>{},
        focus:()=>{},
        querySelectorAll: () => [],
        querySelector: () => ({}),
        appendChild: () => {}
    };
}
const document = { 
    readyState: 'complete', 
    addEventListener: () => {},
    getElementById: createStub,
    createElement: createStub,
    body: createStub(),
    querySelector: createStub
};
const window = { addEventListener:()=>{} };
const localStorage = { getItem:()=>null, setItem:()=>{} };
const clearTimeout = () => {};
const setTimeout = (fn) => {};
const process = () => {}; // mock process function if called

${scriptStr}

let errors = [];
let passed = 0;
let total = 0;
let reportRows = [];

function testInput(input, expectedStrings) {
    total++;
    global.SESSION = { history: [], navStack: [] };
    
    try {
        let intentInfo = global.test_classifyIntent(input);
        if (!intentInfo) {
            errors.push(\`Failed "\${input}". No intent classified.\`);
            reportRows.push(\`| \${input} | ❌ Failed | No intent classified |\`);
            return false;
        }
        global.SESSION.lastIntent = intentInfo.id;
        if (intentInfo.year) global.SESSION.reqYear = intentInfo.year;
        
        let res = global.test_getResponse(input);
        for (let str of expectedStrings) {
            if (!res.text.includes(str)) {
                errors.push(\`Failed "\${input}". Missing: "\${str}".\\nOutput text: \${res.text.substring(0, 150)}...\`);
                reportRows.push(\`| \${input} | ❌ Failed | Output missing \${str} |\`);
                return false;
            }
        }
        passed++;
        reportRows.push(\`| \${input} | ✅ Passed | \${intentInfo.id} / \${intentInfo.year} |\`);
        return true;
    } catch (e) {
        errors.push(\`Failed "\${input}". Exception: \${e.message}\`);
        reportRows.push(\`| \${input} | ❌ Error | \${e.message} |\`);
        return false;
    }
}

// Get all departments
let depts = [];
if (global.test_KB && global.test_KB.departments) {
    if (global.test_KB.departments.ug) depts = depts.concat(global.test_KB.departments.ug.map(d => ({name: d.n, code: d.c, type: 'ug'})));
    if (global.test_KB.departments.pg) depts = depts.concat(global.test_KB.departments.pg.map(d => ({name: d.n, code: d.c, type: 'pg'})));
}

// Deduplicate codes
let seen = new Set();
depts = depts.filter(d => {
    if (seen.has(d.code)) return false;
    seen.add(d.code);
    return true;
});

for (let d of depts) {
    let stats = global.test_KB.placement_stats[d.code];
    if (!stats) continue;
    
    let years = [];
    if (stats[d.type] && stats[d.type].full) {
        years = stats[d.type].full.map(f => f.name.replace(/[^0-9-]/g, ''));
    } else if (stats.full) {
        years = stats.full.map(f => f.name.replace(/[^0-9-]/g, ''));
    } else if (stats.ug && stats.ug.full) {
        years = stats.ug.full.map(f => f.name.replace(/[^0-9-]/g, ''));
    } else if (stats.pg && stats.pg.full) {
        years = stats.pg.full.map(f => f.name.replace(/[^0-9-]/g, ''));
    }
    
    years = years.filter(y => y.length > 0);
    if (years.length > 0) {
        // Test single year
        let year1 = years[0];
        testInput(\`placement stats \${d.code} \${year1}\`, [\`\${year1}\`]);
        
        // Test combined years
        if (years.length > 1) {
            let year2 = years[1];
            testInput(\`placement stats \${d.code} \${year1} & \${year2}\`, [\`\${year1}\`, \`\${year2}\`]);
        }
    }
}

fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/1448ff50-9c63-4001-8d45-95b4bd7262e8/Placement_Testing_Report.md', 
\`# Automated Placement Testing Report
Total Tests Run: \${total}
Tests Passed: \${passed}
Tests Failed: \${total - passed}

| User Input | Result | Details |
|---|---|---|
\` + reportRows.join('\\n')
);

console.log(\`Passed \${passed}/\${total} tests.\`);
`;

fs.writeFileSync('scratch_test2.js', fullScript);
