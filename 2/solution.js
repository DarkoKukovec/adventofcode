module.exports = input => [
  input
    .split('\n')                                                                // Split separate gifts
    .map(x => x.split('x').map(y => ~~y))                                       // Transform dimensions into separate integers
    .map(x => x
      .map((y, i, a) => y * (a[i + 1] || a[i - 2]))                             // Get all side combinations: a*b, b*c, c*a
    )
    .map(x => x.map(y => y * 2))                                                // Double all values: 2*a*b, 2*b*c, 2*c*a
    .map(x => x
      .concat(Math.min.apply(Math, x) / 2)                                      // Add the smallest
      .reduce((s, c) => s + c, 0)                                               // Sum of all values for the gift
    )
    .reduce((s, c) => s + c, 0),                                                // Sum values for all gifts

  input
    .split('\n')
    .map(x => x
      .split('x')
      .map(y => ~~y)
      .sort((a, b) => a - b)                                                    // Sort gift sizes
    )
    .map(x => x
      .slice(0, 2)                                                              // Ignore the biggest side
      .concat(x
        .reduce((s, c) => s * c, 0.5)                                           // Half of the bow
      )
      .map(y => y * 2)                                                          // Double all the values (every side twice, full bow)
      .reduce((s, c) => s + c, 0)
    )
    .reduce((s, c) => s + c, 0)
];
