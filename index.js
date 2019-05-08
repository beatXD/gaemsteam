import fs from 'fs';
import game from './game';

let arrtags = [];
let newData = [];
//const date = [new Date().toLocaleString()];

for (let i = 0; i < game.length; i += 1) {
  arrtags = arrtags.concat(game[i].tags);
}
const newArrtags = [...new Set(arrtags)];

newArrtags.forEach((element) => {
  newData = game.filter(user => user.tags.includes(element));

  const time = JSON.stringify(date, null, 2);
 // const testData = { ...newData, date : time };
  const data = JSON.stringify(newData, null, 2);

  fs.writeFile(`gametag/${element}.json`, data, (err) => {
    if (err) throw err;
  });