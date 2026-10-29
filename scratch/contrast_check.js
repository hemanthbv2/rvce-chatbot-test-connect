function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function luminance(r, g, b) {
    const a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

const combinations = [
    { name: "Bot Message (Text on Bot Bg)", bg: "#FFFFFF", text: "#1e293b" },
    { name: "User Message (White Text on Primary Blue)", bg: "#0081C6", text: "#FFFFFF" },
    { name: "Send Button (White Text on Secondary Orange)", bg: "#EB5624", text: "#FFFFFF" },
    { name: "Chat Header (White Text on Primary Blue)", bg: "#0081C6", text: "#FFFFFF" },
    { name: "Secondary Text (Subtle text on Bot Bg)", bg: "#FFFFFF", text: "#64748b" }
];

console.log("WCAG Contrast Check (Target: 4.5:1 for normal text, 3.0:1 for large text/icons):\\n");

combinations.forEach(combo => {
    const ratio = contrast(combo.bg, combo.text).toFixed(2);
    let status = ratio >= 4.5 ? "PASS (AAA/AA)" : (ratio >= 3.0 ? "ACCEPTABLE (Large text only)" : "FAIL (Hard to read)");
    console.log(combo.name + " -> Ratio: " + ratio + ":1 -> " + status);
});
