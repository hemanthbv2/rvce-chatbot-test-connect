const cleanInput = "ece placement stats 2025";
const strippedInput = "ECE PLACEMENT STATS 2025";

const testMatch = (k) => {
    const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');
    return regex.test(cleanInput) || regex.test(strippedInput);
};

console.log("ece:", testMatch("ece"));
console.log("placement stats:", testMatch("placement stats"));
console.log("2025:", testMatch("2025"));
