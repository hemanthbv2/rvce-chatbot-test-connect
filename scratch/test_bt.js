const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.window = dom.window;
global.document = dom.window.document;
let scriptCode = fs.readFileSync('script.js', 'utf8');
eval(scriptCode);

console.log(classifyIntent('can you tell me about head of m.tech biotechnology'));
