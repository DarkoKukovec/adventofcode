module.exports = input => [
  input
    .split('')                                                                  // Split to single commants
    .map(x => '<>^v'.indexOf(x))                                                // Transform commands to array indexes
    .map(x => [[-1, 0], [1, 0], [0, 1], [0, -1]][x])                            // Transform commands to delta arrays
    .unshift([0, 0])                                                            // Add the initial coordinates
    .map((x, i, a) => a.slice(0, i + 1))                                        // For every command, also remember the previous steps
    .map(x => x.reduce((s, c) => [s[0] + c[0], s[1] + c[1]], [0, 0]))           // Calculate the current position
    .map(x => x[0] + '|' + x[1])                                                // Transform it into a list of coordinates (as a string)
    .uniq()                                                                     // Remove duplicates
    .value()
    .length,

  input
    .split('')
    .map(x => '<>^v'.indexOf(x))
    .map(x => [[-1, 0], [1, 0], [0, 1], [0, -1]][x])
    .unshift([0, 0])
    .unshift([0, 0])                                                            // The second initial coordinates
    .map((x, i, a) => a.slice(0, i + 1))
    .map((x, i) => x.filter((y, j) => i % 2 === j % 2))                         // For every step, check only the previous steps with same parity
    .map(x => x.reduce((s, c) => [s[0] + c[0], s[1] + c[1]], [0, 0]))
    .map(x => x[0] + '|' + x[1])
    .uniq()
    .value()
    .length
];
