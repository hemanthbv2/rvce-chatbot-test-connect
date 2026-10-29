const fs = require('fs');

let scriptStr = fs.readFileSync('script.js', 'utf8');

// Quick mock for DOM to just let it load
global.document = {
    readyState: 'complete',
    getElementById: () => ({ addEventListener:()=>{}, classList:{toggle:()=>{}, add:()=>{}, remove:()=>{}, contains:()=>false}, focus:()=>{}, setAttribute:()=>{} }),
    createElement: () => ({ classList:{add:()=>{}}, appendChild:()=>{} }),
    body: { appendChild: () => {} },
    querySelector: () => ({ addEventListener: ()=>{} }),
    addEventListener: () => {}
};
global.window = { addEventListener: () => {} };
global.localStorage = { getItem: () => null, setItem: () => {} };
global.clearTimeout = () => {};
global.setTimeout = () => {};

// Remove startRVCEChatbot wrapper so everything becomes global
let innerStr = scriptStr.replace('function startRVCEChatbot() {', '');
innerStr = innerStr.replace(/'use strict';/, '');

// Find where DOM manipulation starts and cut it off to avoid errors
let domIdx = innerStr.indexOf('/* =============== DOM MANIPULATION =============== */');
if (domIdx !== -1) {
    innerStr = innerStr.substring(0, domIdx);
}

// Remove the trailing bracket that used to close startRVCEChatbot
let lastBrace = innerStr.lastIndexOf('}');
if (lastBrace !== -1) {
    innerStr = innerStr.substring(0, lastBrace) + innerStr.substring(lastBrace + 1);
}

// Evaluate the inner script so KB, classifyIntent, and getResponse are globally available!
eval(innerStr);

let errors = [];
let passed = 0;
let total = 0;
let reportRows = [];

function testInput(input, expectedDeptCode, expectedYear) {
    total++;
    global.SESSION = { history: [], navStack: [] };
    
    try {
        let intentInfo = classifyIntent(input);
        if (!intentInfo) {
            errors.push(`Failed "${input}". No intent classified.`);
            reportRows.push(`| ${input} | ❌ Failed | No intent classified |`);
            return false;
        }
        
        let expectedIntent = 'plcmt_' + expectedDeptCode;
        if (intentInfo.id !== expectedIntent) {
            errors.push(`Failed "${input}". Expected intent ${expectedIntent} but got ${intentInfo.id}.`);
            reportRows.push(`| ${input} | ❌ Failed | Routed to wrong dept: ${intentInfo.id} |`);
            return false;
        }
        
        passed++;
        reportRows.push(`| ${input} | ✅ Passed | Routed correctly to ${intentInfo.id} |`);
        return true;
    } catch (e) {
        errors.push(`Failed "${input}". Exception: ${e.message}`);
        reportRows.push(`| ${input} | ❌ Error | ${e.message} |`);
        return false;
    }
}

// Get all departments
let depts = [];
if (typeof KB !== 'undefined' && KB.departments) {
    if (KB.departments.ug) depts = depts.concat(KB.departments.ug.map(d => ({name: d.n, code: d.c, type: 'ug'})));
    if (KB.departments.pg) depts = depts.concat(KB.departments.pg.map(d => ({name: d.n, code: d.c, type: 'pg'})));
}

// Deduplicate codes
let seen = new Set();
depts = depts.filter(d => {
    if (seen.has(d.code)) return false;
    seen.add(d.code);
    return true;
});

for (let d of depts) {
    let stats = KB.placement_stats[d.code];
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
        testInput(`placement stats ${d.code} ${year1}`, d.code, year1);
        
        // Test combined years
        if (years.length > 1) {
            let year2 = years[1];
            testInput(`placement stats ${d.code} ${year1} & ${year2}`, d.code, `${year1} & ${year2}`);
        }
    }
}

fs.writeFileSync('C:/Users/HP/.gemini/antigravity-ide/brain/1448ff50-9c63-4001-8d45-95b4bd7262e8/Placement_Testing_Report.md', 
`# Automated Placement Testing Report
Total Tests Run: ${total}
Tests Passed: ${passed}
Tests Failed: ${total - passed}

| User Input | Result | Details |
|---|---|---|
` + reportRows.join('\n')
);

console.log(`Passed ${passed}/${total} tests.`);
