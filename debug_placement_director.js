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

// 1. Remove 'girls hostel' and 'boys hostel' from hostels QA
let modified = scriptContent.replace(
    "{k:['hostel','hostels','accommodation','dorm','dormitory','boys hostel','girls hostel','hostel fee','hostel room','single room','shared room','hostel mess','staying','where to stay','stay at rvce','pg','paying guest','hostel life','hstl','hostl'],id:'hostels',p:1},",
    "{k:['hostel','hostels','accommodation','dorm','dormitory','hostel fee','hostel room','single room','shared room','hostel mess','staying','where to stay','stay at rvce','pg','paying guest','hostel life','hstl','hostl'],id:'hostels',p:1},"
);

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
    ${modified.replace('function classifyIntent', 'global.classifyIntent = classifyIntent; function classifyIntent')}
    startRVCEChatbot();
`;

eval(sandbox);

const res = global.classifyIntent("Girls hostel facilities");
console.log("CLASSIFY RESULT FOR 'Girls hostel facilities':", res);
