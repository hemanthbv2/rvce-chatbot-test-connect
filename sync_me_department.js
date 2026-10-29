const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

const newMeFacultyBlock = `me: [
                { n: "Dr. Shanmukha N", u: "https://rvce.edu.in/department/me/faculty-bio/", d: "Professor and HOD", e: "23 years" },
                { n: "Dr Krishna M", u: "https://rvce.edu.in/department/me/dr-krishna-m/", d: "Professor", e: "37 years" },
                { n: "Dr Nanjundaradhya N. V.", u: "https://rvce.edu.in/department/me/dr-nanjundaradhya-n-v/", d: "Professor", e: "31 years" },
                { n: "Dr Srihari P. V.", u: "https://rvce.edu.in/department/me/dr-srihari-p-v/", d: "Professor", e: "26 years" },
                { n: "Dr P. R. Venkatesh", u: "https://rvce.edu.in/department/me/dr-p-r-venkatesh/", d: "Professor", e: "29 years" },
                { n: "Dr Sridhar R", u: "https://rvce.edu.in/department/me/dr-sridhar-r/", d: "Professor", e: "25 years" },
                { n: "Dr Harisha S. K.", u: "https://rvce.edu.in/department/me/dr-harisha-s-k/", d: "Professor", e: "25 years" },
                { n: "Dr Ratna Pal", u: "https://rvce.edu.in/department/me/dr-ratna-pal/", d: "Associate Professor", e: "18 years" },
                { n: "Dr Nataraj J. R.", u: "https://rvce.edu.in/department/me/dr-nataraj-j-r/", d: "Associate Professor", e: "25 years" },
                { n: "Dr Nagesh S", u: "https://rvce.edu.in/department/me/dr-nagesh-s/", d: "Associate Professor", e: "21 years" },
                { n: "Dr Ramakrishna Hegde", u: "https://rvce.edu.in/department/me/dr-ramakrishna-hegde/", d: "Associate Professor", e: "18 years" },
                { n: "Dr Chandrakumar R", u: "https://rvce.edu.in/department/me/dr-chandrakumar-r/", d: "Associate Professor", e: "17 years" },
                { n: "Dr Sourabha S. Havaldar", u: "https://rvce.edu.in/department/me/dr-sourabha-srinivasa-havaldar/", d: "Associate Professor", e: "15 years" },
                { n: "Keshavamurthy Y. C.", u: "https://rvce.edu.in/department/me/keshavamurthy-y-c/", d: "Assistant Professor", e: "19 years" },
                { n: "Dr Keshav M", u: "https://rvce.edu.in/department/me/dr-keshav-m/", d: "Assistant Professor", e: "18 years" },
                { n: "Dr Girish Kumar R", u: "https://rvce.edu.in/department/me/dr-girish-kumar-r/", d: "Assistant Professor", e: "14 years" },
                { n: "Dr Girish V. A.", u: "https://rvce.edu.in/department/me/dr-girish-v-a/", d: "Assistant Professor", e: "14 years" },
                { n: "Dr Gangadhar Angadi", u: "https://rvce.edu.in/department/me/dr-gangadhar-angadi/", d: "Assistant Professor", e: "15 years" },
                { n: "Dr Anjaneya G", u: "https://rvce.edu.in/department/me/dr-anjaneya-g/", d: "Assistant Professor", e: "13 years" },
                { n: "Jinka Ranganayakulu", u: "https://rvce.edu.in/department/me/jinka-ranganayakalu/", d: "Assistant Professor", e: "14 years" },
                { n: "Dr Rakesh Kumar", u: "https://rvce.edu.in/department/me/rakesh-kumar/", d: "Assistant Professor", e: "12 years" },
                { n: "Gajanan", u: "https://rvce.edu.in/department/me/gajanan/", d: "Assistant Professor", e: "12 years" },
                { n: "Abhiram E. R.", u: "https://rvce.edu.in/department/me/abhiram-e-r/", d: "Assistant Professor", e: "11 years" },
                { n: "Dr Prapul Chandra A C", u: "https://rvce.edu.in/department/me/dr-prapul-chandra-a-c/", d: "Assistant Professor", e: "10 years" },
                { n: "Dr Mahantash M. Math", u: "https://rvce.edu.in/department/me/dr-mahantash-m-math/", d: "Assistant Professor", e: "11 years" },
                { n: "Dr Bharatish A", u: "https://rvce.edu.in/department/me/dr-bharatish-a/", d: "Assistant Professor", e: "9 years" },
                { n: "Prof Roopa T. S.", u: "https://rvce.edu.in/department/me/dr-roopa-t-s/", d: "Assistant Professor", e: "15 years" },
                { n: "Dr Ramesh S. Sharma", u: "https://rvce.edu.in/department/me/dr-ramesh-s-sharma/", d: "Associate Professor", e: "17 years" },
                { n: "Dr Kirthan L. J.", u: "https://rvce.edu.in/department/me/dr-kirthan-l-j/", d: "Assistant Professor", e: "8 years" },
                { n: "Sujan Chakraborty", u: "https://rvce.edu.in/department/me/sujan-chakraborty/", d: "Assistant Professor", e: "5 years" },
                { n: "Prof G R Rajkumar", u: "https://rvce.edu.in/department/me/dr-g-r-rajkumar/", d: "Assistant Professor", e: "13 years" },
                { n: "Dr Jagannatha Guptha V. L.", u: "https://rvce.edu.in/department/me/dr-jagannatha-guptha-v-l/", d: "Assistant Professor", e: "4 years" }
            ],`;

code = code.replace(/me:\s*\[[\s\S]*?\]\s*,/i, newMeFacultyBlock);

fs.writeFileSync('script.js', code, 'utf8');
console.log('Successfully updated ME Faculty list in script.js!');
