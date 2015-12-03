module.exports = input => [
  input
    .split('')
    .map(x => '<>^v'.indexOf(x))
    .map(x => [[-1, 0], [1, 0], [0, 1], [0, -1]][x])
    .unshift([0, 0])
    .map((x, i, a) => a.slice(0, i + 1))
    .map(x => x.reduce((s, c) => [s[0] + c[0], s[1] + c[1]], [0, 0]))
    .map(x => x[0] + '|' + x[1])
    .uniq()
    .value()
    .length,

  input
    .split('')
    .map(x => '<>^v'.indexOf(x))
    .map(x => [[-1, 0], [1, 0], [0, 1], [0, -1]][x])
    .unshift([0, 0])
    .unshift([0, 0])
    .map((x, i, a) => a.slice(0, i + 1))
    .map((x, i) => x.filter((y, j) => i % 2 === j % 2))
    .map(x => x.reduce((s, c) => [s[0] + c[0], s[1] + c[1]], [0, 0]))
    .map(x => x[0] + '|' + x[1])
    .uniq()
    .value()
    .length
];
