const fs = require('fs');

// Read script.js, remove DOM dependencies to eval safely
let scriptContent = fs.readFileSync('script.js', 'utf8');
scriptContent = scriptContent.replace(/const chatFab[\s\S]*?}\);/g, ''); 
scriptContent = scriptContent.replace(/document\.getElementById/g, '(() => ({}))');
scriptContent = scriptContent.replace(/window\.addEventListener/g, '(() => {})');

try {
    eval(scriptContent);
    
    const testCases = [
        "Hi, can you tell me about the placements for the CSE department?",
        "Yes sure, what is the fee structure?",
        "Hello",
        "how are the placements in electrical engineering?",
        "what is the fee structure?"
    ];

    console.log("=== NLP Tests ===");
    testCases.forEach(t => {
        console.log(`\nQuery: "${t}"`);
        const res = classifyIntent(t);
        console.log(`Matched ID: ${res.id}`);
    });
} catch(e) {
    console.error("Test execution failed (likely DOM element missing):", e.message);
}
