module.exports = input => [
  input
    .split('')
    .groupBy(x => x === '(' ? 1 : -1)
    .mapValues(x => x.length)
    .mapValues((count, direction) => count * ~~direction)
    .values()
    .reduce((sum, current) => sum + current, 0),
    
  input
    .split('')
    .map(x => x === '(' ? 1 : -1)
    .map((x, i, a) => a.slice(0, i + 1))
    .map(x => x.reduce((s, c) => s + c, 0))
    .reduce((s, x, i) => s || (x < 0 ? i + 1 : 0), 0)
];
