//Phil Hofer
//filter.js
//2/26/15
//This program filters the data in dataset.js.

load("dataset.js");
var league = JSON.parse(LEAGUE);
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

print(JSON.stringify(filter(league, function(champion) {
  return champion.Primary = "Fighter" && champion.Attack > 7;
})));
