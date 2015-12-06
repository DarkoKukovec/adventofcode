module.exports = input => [
  input
    .split('\n')
    .map(x => x                                                                 // Remove unnecesary words
      .replace(/turn\s/g, '')
      .replace(/through\s/g, '')
      .split(/\s/)
    )
    .map(x => [{                                                                // Transform instructions into functons, split coordinates
      on: y => 1,
      off: y => 0,
      toggle: y => 1 - y
    }[x[0]], x[1].split(','), x[2].split(',')])
    .map(x => [x[0], [~~x[1][0], ~~x[1][1]], [~~x[2][0], ~~x[2][1]]])           // Cast coordinates to integers
    .map(x => [x[0], x[1], x[2], input                                          // Make a subarray with the modifier function
      .plant(Array(x[2][0] - x[1][0] + 1))
      .fill(x[0])
      .value()
    ])
    .map(x => [x[0], x[1], x[2], input                                          // Pad the array from left with noop fn to get it to the right position
      .plant(Array(x[1][0]))
      .fill(y => y)
      .concat(x[3])
      .concat(input
        .plant(1000 - x[2][0])
        .fill(y => y)
        .value()
      )
      .value()
    ])
    .map(x => [x[0], x[1], x[2], input                                          // Create modifier rows
      .plant(Array(x[2][1] - x[1][1] + 1))
      .fill(x[3])
      .value()
    ])
    .map(x => input                                                             // Add noop rows in front and back
      .plant(Array(x[1][1]))
      .fill(input.plant(Array(1000).fill(y => y)))
      .concat(x[3])
      .concat(input
        .plant(1000 - x[2][1])
        .fill(y => y)
      )
    )
    .reduce((r, x) => r                                                         // Execute functions for every command
      .map((y, i) => y                                                          // Rows
        .map((z, j) => x[i][j](z))                                              // Cells
      ),
      input                                                                     // Create a 1000x1000 matrix with 0 values
        .plant(Array(1000))
        .fill(input
          .plant(Array(1000))
          .fill(0)
        )
    )
    .flatten()
    .sum()
];
