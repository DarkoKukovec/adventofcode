module.exports = input => [
  input
    .split('\n')
    .map(x => x.split('x').map(y => ~~y))
    .map(x => x
      .map((y, i, a) => y * (a[i + 1] || a[i - 2]))
    )
    .map(x => x.map(y => y * 2))
    .map(x => x
      .concat(Math.min.apply(Math, x) / 2)
      .reduce((s, c) => s + c, 0)
    )
    .reduce((s, c) => s + c, 0),

  input
    .split('\n')
    .map(x => x
      .split('x')
      .map(y => ~~y)
      .sort((a, b) => a - b)
    )
    .map(x => x
      .slice(0, 2)
      .concat(x
        .reduce((s, c) => s * c, 0.5)
      )
      .map(y => y * 2)
      .reduce((s, c) => s + c, 0)
    )
    .reduce((s, c) => s + c, 0)
];
