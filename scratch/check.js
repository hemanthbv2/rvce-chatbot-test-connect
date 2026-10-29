const cleanInput = "who is the hod? cs";
const k = "cs";
const escapedK = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const regex = new RegExp('(?:^|\\s)' + escapedK + '(?=\\s|$)', 'i');
console.log(regex.test(cleanInput));
