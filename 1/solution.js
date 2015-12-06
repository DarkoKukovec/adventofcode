module.exports = input => [
  input
    .split('')                                                                  // Split commands
    .groupBy(x => x === '(' ? 1 : -1)                                           // Transform commands into numerical values, and group them
    .mapValues(x => x.length)                                                   // Replace grouped arrays with their lengths
    .mapValues((count, direction) => count * ~~direction)                       // Multiply number of occurances with the numberical value of the command
    .values()
    .reduce((sum, current) => sum + current, 0),                                // Sum them together

  input
    .split('')
    .map(x => x === '(' ? 1 : -1)
    .map((x, i, a) => a.slice(0, i + 1))                                        // Remember the previous moves
    .map(x => x.reduce((s, c) => s + c, 0))                                     // Calculate the current position for every step
    .reduce((s, x, i) => s || (x < 0 ? i + 1 : 0), 0)                           // Find the first negative
];
