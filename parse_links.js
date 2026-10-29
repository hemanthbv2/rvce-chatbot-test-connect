const fs = require('fs');

try {
    const html = fs.readFileSync('cse_dept.html', 'utf8');
    const links = [];
    const regex = /href="([^"]+)"/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
        const link = match[1];
        if (link.includes('rvce.edu.in/department/cse/') && !links.includes(link) && 
            !link.includes('.png') && !link.includes('.jpg') && !link.includes('.css') && !link.includes('.js')) {
            links.push(link);
        }
    }
    
    console.log('CSE Department Sub-Pages:');
    links.forEach(l => console.log(l));
} catch(e) {
    console.error(e);
}
