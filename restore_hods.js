const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

// For MCA
content = content.replace(
    /n:\s*"Master of Computer Applications \(MCA\)",/g,
    'n:"Master of Computer Applications (MCA)",\n                hod: "Dr. Jasmine K S",'
);

// For EIM (let's look for eim or Instrumentation)
// EIM is c:"ei" or c:"eim"
content = content.replace(
    /c:\s*"eim",/g,
    'c:"eim", \n                hod: "Dr. CH. Renumadhavi",'
);
// just in case it's ei
content = content.replace(
    /c:\s*"ei",/g,
    'c:"ei", \n                hod: "Dr. CH. Renumadhavi",'
);

fs.writeFileSync('script.js', content, 'utf8');
console.log("Restored missing HODs.");
