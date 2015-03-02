//Phil Hofer
//reduce.js
//3/2/15
//This program returns the single champion with the lowest Attack.


load("dataset.js");
var league = JSON.parse(LEAGUE);

print(JSON.stringify(league.reduce(function(min, cur) {
  return (cur.Attack < min.Attack)? cur : min;
})));
