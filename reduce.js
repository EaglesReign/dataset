//Phil Hofer
//3/2/15
//reduce.js
//This program reduces the dataset to the champion with the lowest Attack.

load("dataset.js");
var league = JSON.parse(LEAGUE);

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

print(JSON.stringify(reduce(league, function(min, cur) {
  if (cur.Attack < min.Attack) return cur;
  else return min;
})));
