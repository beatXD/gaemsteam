import fs from 'fs';
import game from './game';

let arrtags = [];

for (let i = 0; i < game.length; i += 1) {
  arrtags = arrtags.concat(game[i].tags);
}
const newArrtags = [...new Set(arrtags)];

newArrtags.forEach((element) => {
  const filter = game.filter(user => user.tags.includes(element));
  const time = new Date().toLocaleString();
  const result = { ...filter, Date: time };
  const data = JSON.stringify(result, null, 2);

  fs.writeFile(`gametag/${element}.json`, data, (err) => {
    if (err) throw err;
  });
});
