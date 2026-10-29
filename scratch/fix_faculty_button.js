const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');

c = c.replace(/\{l:\s*btnLabel,\s*a:\s*`dept_\$\{deptCode\}`,\s*i:\s*btnIcon\}/, "{l: btnLabel, a: isDeans ? 'deans_list' : `dept_${deptCode}`, i: btnIcon}");

fs.writeFileSync('script.js', c);
