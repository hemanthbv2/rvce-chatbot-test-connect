const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');

c = c.replace(/    \/\/ Composite Intent Resolution: Combine Department \+ Topic \(e\.g\., CSE \+ Placements\)/, `    // 2.5 Faculty Override (Prioritize specific faculty matches over generic keywords)
    const facultyId = findFacultyMatch(input);
    if (facultyId) {
        return { type: 'exact', id: facultyId, suggestions: [] };
    }

    // Composite Intent Resolution: Combine Department + Topic (e.g., CSE + Placements)`);

fs.writeFileSync('script.js', c);
