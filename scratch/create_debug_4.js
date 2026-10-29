const fs = require('fs');

let runAcc = fs.readFileSync('scratch/run_accuracy.js', 'utf8');
runAcc += `
console.log("TESTING QA FOR HOD_CS_CSE");
console.log(global.QA.find(q => q.id === 'hod_cs_cse'));
console.log("TESTING QA FOR PLCMT_CS_CSE");
console.log(global.QA.find(q => q.id === 'plcmt_cs_cse'));
`;
fs.writeFileSync('scratch/run_accuracy_debug2.js', runAcc);
