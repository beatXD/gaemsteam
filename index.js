import fs from 'fs';
import game from './game';

let arrtags = [];
let arrname = [];
let arrlink = [];
let arrtitle = [];

for (let i = 0; i < game.length; i += 1) {
  arrtags = arrtags.concat(game[i].tags);
  arrname = arrname.concat(game[i].name);
  arrlink = arrlink.concat(game[i].link);
  arrtitle = arrtitle.concat(game[i].title);
}
const newArr = [...new Set(arrtags)];

console.log(newArr);

for (let a = 0; a < newArr.length; a += 1) {
  const data = JSON.stringify(newArr, null, 2);
  fs.writeFile(`gametag/${newArr[a]}.json`, data, (err) => {
    if (err) throw err;
  });
}
