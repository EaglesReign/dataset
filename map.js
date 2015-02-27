//Phil Hofer
//2/26/15
//map.js
//This program transforms an array of champions' stats into a much more readable "mapped" form.

var data = require('./dataset.js');
var league = JSON.parse(data);

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
    return mapped;
}

var overPowered = league.filter(function(champion) {
  return champion.Attack > 5 && champion.Ability > 5;
});
console.log(map(overPowered, function(champion) {
  return champion.Name;
}));
