import fs from 'fs';
import game from './game';

let arrtags = [];
let newArrtags = [];
let time = [];
let data = [];
let testData = [];
let newData = [];

for (let i = 0; i < game.length; i += 1) {
  arrtags = arrtags.concat(game[i].tags);
}
newArrtags = [...new Set(arrtags)];

newArrtags.forEach((element) => {
  testData = game.filter(user => user.tags.includes(element));
  time = JSON.stringify(new Date().toLocaleString(), null, 2);
  newData = { ...testData, date: time };
  data = JSON.stringify(newData, null, 2);

  fs.writeFile(`gametag/${element}.json`, data, (err) => {
    if (err) throw err;
  });
});
