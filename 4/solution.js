module.exports = (input, H) => [
  input
    .plant(999999)                                                              // Limitation: Works only if result < 1M
    .range()                                                                    // Dummy array for iteration
    .map((x, i) => i + 1)                                                       // Fill the array with sequence
    .map(x => H.md5(input.value() + x))                                         // Calculate hash
    .findIndex(x => x.indexOf('00000') === 0) + 1,                              //Find the first hash that starts with 5 zeros

  input
    .plant(9999999)                                                             // Limitation: Works only if result < 10M
    .range()
    .map((x, i) => i + 1)
    .map(x => H.md5(input.value() + x))
    .findIndex(x => x.indexOf('000000') === 0) + 1
];
