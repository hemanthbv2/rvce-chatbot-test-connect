const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');

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
    ${scriptContent.replace('function classifyIntent', 'global.classifyIntent = classifyIntent; function classifyIntent')}
    startRVCEChatbot();
`;

eval(sandbox);

const query = "Im curious about what is ise in rvce";
console.log(`Query: "${query}"`);
console.log("Result:", global.classifyIntent(query));
