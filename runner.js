var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var H = require('./helpers');

var days = _.map([1, 2, 3, 4, 5, 6], x => x.toString());
var day = process.argv[2];

if (day) {
  if (_.contains(days, day)) {
    runDay(day);
  } else {
    console.error(`Day ${day} doesn't exist!`);
  }
} else {
  _.each(days, runDay)
}

function runDay(day) {
  console.log(`Running day ${day}:`);
  var input = fs.readFileSync(path.join(__dirname, day, 'input.txt'), 'utf-8').trim();
  var solutions = require(path.join(__dirname, day, 'solution.js'))(_(input), H);
  console.log(`Solution A: ${solutions[0]}`);
  console.log(`Solution B: ${solutions[1]}\n`);
}
