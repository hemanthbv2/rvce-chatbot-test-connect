const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');

// Expose getBotResponse and classifyIntent
const modified = scriptContent.replace(
    'return {',
    'global.classifyIntent = classifyIntent; global.getBotResponse = getBotResponse; return {'
);

const dummyEl = {
    addEventListener: () => {},
    querySelectorAll: () => [],
    querySelector: () => dummyEl,
    appendChild: () => {},
    setAttribute: () => {},
    classList: { add: () => {}, remove: () => {} },
    style: {},
    getContext: () => ({ 
        fillStyle: '', strokeStyle: '', lineWidth: 0,
        clearRect: () => {}, beginPath: () => {}, arc: () => {}, fill: () => {},
        moveTo: () => {}, lineTo: () => {}, stroke: () => {} 
    })
};

const sandbox = `
    const innerWidth = 1000, innerHeight = 800;
    const requestAnimationFrame = () => {};
    class MutationObserver { observe() {} }
    const window = { 
        innerWidth: 1000, innerHeight: 800,
        addEventListener: () => {},
        sessionStorage: { getItem: () => null, setItem: () => {} },
        localStorage: { getItem: () => null, setItem: () => {} },
        location: { hostname: 'localhost', protocol: 'http:' }
    };
    const addEventListener = () => {};
    const sessionStorage = window.sessionStorage;
    const localStorage = window.localStorage;
    const document = { 
        addEventListener: () => {},
        getElementById: () => dummyEl,
        querySelectorAll: () => [],
        querySelector: () => dummyEl,
        createElement: () => dummyEl
    };
    ${modified}
    startRVCEChatbot();
`;

try {
    eval(sandbox);
    console.log("CLASSIFY 'what is cse':", global.classifyIntent("what is cse"));
    const resp = global.getBotResponse("what is cse");
    console.log("RESPONSE 'what is cse':", resp.text ? resp.text.substring(0, 150) : resp);
} catch (e) {
    console.error("Error executing sandbox:", e);
}
