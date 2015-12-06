module.exports = input => [
  input
    .split('\n')
    .filter(x => x.length - x.replace(/[aeiou]/gi, '').length > 2)              // Remove wowels
    .filter(x => x.match(/(.)\1/) !== null)                                     // Check repeated character
    .filter(x => x.match(/(ab|cd|pq|xy)/) === null)                             // Check naughty phrases
    .size(),

  input
    .split('\n')
    .filter(x => x.match(/(.)(.).*\1\2/) !== null)                              // Check two same doubles rule
    .filter(x => x.match(/(.).\1/) !== null)                                    // Check same letter with one letter inbetween rule
    .size()
];
