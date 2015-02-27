//Phil Hofer
//dataset.js
//2/15/15
//This is the dataset for class. It consists of the first alphabetical 
//25 champions in the League of Legends. It contains each champion's name,
//primary role, secondary role(if applicable), attack, defense, and ability 
//power ratings.

var LEAGUE = "[\n  " + [
  '{"Name":"Aatrox", "Primary":"Fighter", "Secondary":"Tank", "Attack":"8", "Defense":"4", "Ability":"3"}',
  '{"Name":"Ahri", "Primary":"Mage", "Secondary":"Assassin", "Attack":"3", "Defense":"4", "Ability":"8"}',
  '{"Name":"Akali", "Primary":"Assassin", "Secondary":null, "Attack":"5", "Defense":"3", "Ability":"8"}',
  '{"Name":"Alistar", "Primary":"Tank", "Secondary":null, "Attack":"6", "Defense":"9", "Ability":"5"}',
  '{"Name":"Amumu", "Primary":"Tank", "Secondary":"Mage", "Attack":"2","Defense":"6", "Ability":"8"}',
  '{"Name":"Anivia", "Primary":"Mage", "Secondary":"Support", "Attack":"1", "Defense":"4", "Ability":"10"}',
  '{"Name":"Annie", "Primary":"Mage", "Secondary":null, "Attack":"2","Defense":"3", "Ability":"10"}',
  '{"Name":"Ashe", "Primary":"Marksman", "Secondary":"Support", "Attack":"7", "Defense":"3", "Ability":"2"}',
  '{"Name":"Azir", "Primary":"Mage", "Secondary":"Marksman", "Attack":"6", "Defense":"3", "Ability":"8"}',
  '{"Name":"Blitzcrank", "Primary":"Tank","Secondary":"Fighter", "Attack":"4", "Defense":"8", "Ability":"5"}',
  '{"Name":"Brand", "Primary":"Mage", "Secondary":null, "Attack":"2", "Defense":"3", "Ability":"9"}',
  '{"Name":"Braum", "Primary":"Support", "Secondary":"Tank", "Attack":"3", "Defense":"9", "Ability":"4"}',
  '{"Name":"Caitlyn", "Primary":"Marksman", "Secondary":null, "Attack":"8", "Defense":"2", "Ability":"2"}',
  '{"Name":"Cassiopeia", "Primary":"Mage", "Secondary":null, "Attack":"2", "Defense":"3", "Ability":"9"}',
  '{"Name":"ChoGath", "Primary":"Tank", "Secondary":"Mage", "Attack":"3", "Defense":"7", "Ability":"7"}',
  '{"Name":"Corki", "Primary":"Marksman", "Secondary":null, "Attack":"8", "Defense":"3", "Ability":"6"}',
  '{"Name":"Darius", "Primary":"Fighter", "Secondary":"Tank", "Attack":"9", "Defense":"5", "Ability":"1"}',
  '{"Name":"Diana", "Primary":"Fighter", "Secondary":"Mage", "Attack":"7", "Defense":"6", "Ability":"8"}',
  '{"Name":"Dr. Mundo", "Primary":"Fighter", "Secondary":"Tank", "Attack":"5", "Defense":"7", "Ability":"6"}',
  '{"Name":"Draven", "Primary":"Marksman", "Secondary":null, "Attack":"9", "Defense":"3", "Ability":"1"}',
  '{"Name":"Elise", "Primary":"Mage", "Secondary":"Fighter", "Attack":"6", "Defense":"5", "Ability":"7"}',
  '{"Name":"Evelynn", "Primary":"Assassin", "Secondary":"Mage", "Attack":"4", "Defense":"2", "Ability":"7"}',
  '{"Name":"Ezreal", "Primary":"Marksman", "Secondary":"Mage", "Attack":"7", "Defense":"2", "Ability":"6"}',
  '{"Name":"Fiddlesticks", "Primary":"Mage", "Secondary":"Support", "Attack":"2", "Defense":"3", "Ability":"9"}',
  '{"Name":"Fiora", "Primary":"Fighter", "Secondary":"Assassin", "Attack":"10", "Defense":"4", "Ability": "2"}'
].join(",\n  ") + "\n]";

//Makes sure the data is exported in node
if (typeof module != "undefined" && module.exports)
  module.exports = LEAGUE;
  
