import fs from 'fs';
import game from './game';

const tags = [];
let gamelistobj;

const getid = (element) => {
  const idsplit = (game.link);
  const id = `${idsplit.split('/')[4]}`;
  return id;
};

const gethost = (element) => {
  const hostsplit = (game.image);
  const host = `${hostsplit.split('/')[3]}`;
  return host;
};

const getdiscount = (element) => {
  const discountslit = (game.title);
  const discount = `${discountslit.slice(5, 8)}`;
  return discount;
};

const getupdatetime = (element) => {
  const time = new Date().toISOString();
  return time;
};

const geturl = element => game.link;
const getname = element => game[1].name;
const getimage = element => game.image;


const creatobj = (element) => {
  const gameobj = {
    id: getid(element),
    host: gethost(element),
    url: geturl(element),
    name: getname(element),
    discount_percent: getdiscount(element),
    image: getimage(element),
    update_at: getupdatetime(element),

  };
  return gameobj;
};
console.log(creatobj());



game.forEach((element) => {
  const gamelist = creatobj(element);

element.tags.forEach((tags) => {
  const data = JSON.stringify(gamelist, null, 2);
  fs.writeFile(`gametag/${tags}.json`, data, (err) => { if (err) throw err; 
  });
});


// for (let i = 0; i < game.length; i += 1) {
//   tags = tags.concat(game[i].tags);
// }
// const newArrtags = [...new Set(tags)];

// newArrtags.forEach((element) => {
//   const filter = game.filter(user => user.tags.includes(element));
//   const result = { ID: id, Date: time, ...filter };
//   const data = JSON.stringify(result, null, 2);