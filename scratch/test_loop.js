const QA = require('./script.js'); // Not exported, so we just copy the loop logic

function sanitize(input) {
    let cleaned = input.replace(/\./g, '');
    cleaned = cleaned.replace(/[^a-zA-Z0-9_\s]/g, ' ');
    return cleaned.replace(/\s+/g, ' ').trim();
}

let input = "can you tell me about placements in m.tech cse";
let cleanInput = sanitize(input).toLowerCase();

const stopWords = ['the', 'is', 'for', 'a', 'an', 'of', 'in', 'to', 'and', 'with', 'about', 'on', 'at', 'please', 'can', 'you', 'tell', 'me', 'know'];
let strippedInput = cleanInput.split(' ').filter(w => !stopWords.includes(w)).join(' ');

console.log("cleanInput:", cleanInput);
console.log("strippedInput:", strippedInput);

const k = 'placements in mtech cse';
const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');
            
let isMatch = regex.test(cleanInput) || regex.test(strippedInput);
console.log("isMatch:", isMatch);

// Fuzzy Matching for typos on single keywords > 4 chars
const wordCount = strippedInput.split(' ').length;
if (!isMatch && k.length > 4 && !k.includes(' ') && wordCount < 15) {
    console.log("Fuzzy matched");
}

console.log("Final isMatch:", isMatch);
