const pptxgen = require("pptxgenjs");

let pres = new pptxgen();

// Set presentation title
pres.title = "Chatbot Presentation";

// --- Slide 1 ---
let slide1 = pres.addSlide();

// Slide 1 Title
slide1.addText("Chatbot Knowledge Domains (What It Knows)", {
    x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 32, bold: true, color: "363636"
});

// Slide 1 Bullet Points
slide1.addText(
    [
        { text: "Departments & Programs" },
        { text: "Admissions & Fees" },
        { text: "Placements" },
        { text: "Faculty & Administration Directory" },
        { text: "Campus Facilities" },
        { text: "Academics & Research" },
        { text: "College Identity" }
    ],
    { x: 0.5, y: 1.5, w: "90%", h: 4, fontSize: 24, bullet: true, color: "404040", lineSpacing: 40 }
);

// --- Slide 2 ---
let slide2 = pres.addSlide();

// Slide 2 Title
slide2.addText("Core Technical Features (How It Works)", {
    x: 0.5, y: 0.5, w: "90%", h: 1, fontSize: 32, bold: true, color: "363636"
});

// Slide 2 Bullet Points
slide2.addText(
    [
        { text: "Advanced Input Sanitization" },
        { text: "Stop-Word Filtering & Negation Detection" },
        { text: "Typo Tolerance (Fuzzy Matching)" },
        { text: "Composite Intent Resolution" },
        { text: "Contextual Session Memory" },
        { text: "Faculty Override System" },
        { text: "Dynamic User Interface" },
        { text: "100% Accuracy Guarantee" }
    ],
    { x: 0.5, y: 1.5, w: "90%", h: 4.5, fontSize: 24, bullet: true, color: "404040", lineSpacing: 40 }
);

// Save the Presentation
pres.writeFile({ fileName: "../Chatbot_Presentation_v2.pptx" }).then(fileName => {
    console.log(`Created file: ${fileName}`);
});
