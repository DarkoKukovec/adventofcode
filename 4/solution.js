module.exports = (input, H) => [
  input
    .plant(999999) // Limitation: Works only if result less than 1M
    .range()
    .map((x, i) => i + 1)
    .map(x => H.md5(input.value() + x))
    .findIndex(x => x.indexOf('00000') === 0) + 1,

  input
    .plant(9999999) // Limitation: Works only if result less than 10M
    .range()
    .map((x, i) => i + 1)
    .map(x => H.md5(input.value() + x))
    .findIndex(x => x.indexOf('000000') === 0) + 1,
];
