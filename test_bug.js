const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');

// Replace the end of startRVCEChatbot to expose classifyIntent
const modified = scriptContent.replace(
    'return {',
    'global.classifyIntent = classifyIntent; global.getBotResponse = getBotResponse; return {'
);

const sandbox = `
    const window = { innerWidth: 1000 };
    const document = { 
        addEventListener: () => {},
        getElementById: () => ({ 
            addEventListener: () => {},
            querySelectorAll: () => ({ forEach: () => {} }),
            style: {}
        }),
        querySelectorAll: () => ({ forEach: () => {} })
    };
    ${modified}
    startRVCEChatbot();
`;

eval(sandbox);

console.log("Testing 'what is cse':", global.classifyIntent("what is cse"));
console.log("Testing 'what is ise':", global.classifyIntent("what is ise"));
