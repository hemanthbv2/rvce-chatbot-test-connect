const fs = require('fs');
let scriptContent = fs.readFileSync('script.js', 'utf8');
const injection = `
    global.QA = QA;
    global.classifyIntent = classifyIntent;
    return;
`;
let modScript = scriptContent.replace("function getResponse(id) {", injection);
eval(modScript);
let failed = ['hod_cs cse', 'plcmt_cs cse', 'fac_drsindhudv', 'fac_drchitrabt', 'fac_drmohanaradhya'];
console.log(global.QA.filter(q => failed.includes(q.id) || q.id.includes('sindhudv') || q.id.includes('drchitrabt') || q.id.includes('drmohanaradhya') || q.id === 'hod_cs cse' || q.id === 'plcmt_cs cse'));
