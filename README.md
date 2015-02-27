# dataset
CMP237 Phil Hofer Dataset for 2/16/15

This dataset contains the first 25 champions from the game League of Legends.

Each entry contains the champion's name, primary role, secondary role, 
attack rating, defense rating, and ability power rating.
These ratings are scaled from 1-10 with 10 being the best.
In the filter.js file, I filter for champions that have an attack rating 
that is lower than 3.
In the map.js file, I filter for champions that have an attack and ability
power rating that is more than 5 and map these to a new array that has the 
names of all champions that have an attack and ability power of rating more 
more than 5.
I did not do reduce, as we only needed 2 of the 3, but I could reduce on either name or a unique combination of Attack, Defense, and Ability Power.

All champions have a primary role, but not necessarily a secondary role.
