const r = new RegExp('(?:^|\\s)' + 'placements in mtech cse'.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=\\s|$)', 'i');
console.log(r.test('can you tell me about placements in mtech cse'));
