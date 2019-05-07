import fs from 'fs';
import game from './game';

let arr = [];
for (let i = 0; i < game.length; i += 1) {
  arr = arr.concat(game[i].tags);
}
console.log(arr);
// const newArr = [...new Set(arr)];

// // // for(){}
// const data = JSON.stringify(newArr, null, 2);
// fs.writeFile('gametag/values.json', data, (err) => {
//   if (err) throw err;
// });
// console.log(newArr);
