function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
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

let primaryHex = "#0081C6";
let rgb = hexToRgb(primaryHex);

console.log(\`Current Primary: \${primaryHex}\`);
console.log(\`Current Contrast with White: \${contrast(primaryHex, "#FFFFFF").toFixed(2)}:1\`);

// Darken loop
while (contrast(rgbToHex(rgb.r, rgb.g, rgb.b), "#FFFFFF") < 4.5) {
    rgb.r = Math.max(0, rgb.r - 1);
    rgb.g = Math.max(0, rgb.g - 1);
    rgb.b = Math.max(0, rgb.b - 1);
}

let optimizedPrimary = rgbToHex(rgb.r, rgb.g, rgb.b);
console.log(\`\\nOptimized Primary (Darkened for WCAG AA 4.5:1): \${optimizedPrimary}\`);
console.log(\`New Contrast with White: \${contrast(optimizedPrimary, "#FFFFFF").toFixed(2)}:1\`);

let secondaryHex = "#EB5624";
let sRgb = hexToRgb(secondaryHex);

console.log(\`\\nCurrent Secondary: \${secondaryHex}\`);
console.log(\`Current Contrast with White: \${contrast(secondaryHex, "#FFFFFF").toFixed(2)}:1\`);

while (contrast(rgbToHex(sRgb.r, sRgb.g, sRgb.b), "#FFFFFF") < 4.5) {
    sRgb.r = Math.max(0, sRgb.r - 1);
    sRgb.g = Math.max(0, sRgb.g - 1);
    sRgb.b = Math.max(0, sRgb.b - 1);
}

let optimizedSecondary = rgbToHex(sRgb.r, sRgb.g, sRgb.b);
console.log(\`\\nOptimized Secondary (Darkened for WCAG AA 4.5:1): \${optimizedSecondary}\`);
console.log(\`New Contrast with White: \${contrast(optimizedSecondary, "#FFFFFF").toFixed(2)}:1\`);

