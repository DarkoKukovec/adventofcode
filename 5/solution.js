module.exports = input => [
  input
    .split('\n')
    .filter(x => x.length - x.replace(/[aeiou]/gi, '').length > 2)
    .filter(x => x.match(/(.)\1/) !== null)
    .filter(x => x.match(/(ab|cd|pq|xy)/) === null)
    .size(),

  input
    .split('\n')
    .filter(x => x.match(/(.)(.).*\1\2/) !== null)
    .filter(x => x.match(/(.).\1/) !== null)
    .size()
];
