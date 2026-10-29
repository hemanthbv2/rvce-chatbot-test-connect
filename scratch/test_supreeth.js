const fetch = require('node-fetch');

async function test() {
    const res = await fetch('https://rvce.edu.in/department/ae/faculty/');
    const text = await res.text();
    
    const links = text.match(/href="([^"]*supreeth[^"]*)"/ig);
    console.log("LINKS FOUND:", links);
    
    // Also check if the current link redirects or fails
    const res2 = await fetch('https://rvce.edu.in/department/ae/dr_r_supreeth/');
    console.log("Status of dr_r_supreeth:", res2.status, res2.statusText);
}

test();
