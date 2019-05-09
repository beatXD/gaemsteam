import fs from 'fs';
import gameJSON from './game';

const getid = (game) => {
  const id = `${game.link.split('/')[4]}`;
  return id;
};

const gethost = (game) => {
  const hostsearch = game.link.search('steam');
  const host = game.link.substr(hostsearch, 5);
  return host;
};

const getdiscount = (game) => {
  const discount = `${game.title.slice(5, 7)}`;
  return discount;
};

const getupdatetime = () => {
  const time = new Date().toISOString();
  return time;
};

const geturl = game => game.link;
const getname = game => game.name;
const getimage = game => game.image;


const creatobj = (game) => {
  const gameobj = {
    id: getid(game),
    host: gethost(game),
    url: geturl(game),
    name: getname(game),
    discount_percent: getdiscount(game),
    image: getimage(game),
    update_at: getupdatetime(),
  };
  return gameobj;
};


gameJSON.forEach((game) => {
  const gamelist = creatobj(game);

  game.tags.forEach((tags) => {
    const data = JSON.stringify(gamelist, null, 2);

    fs.writeFileSync(`gametag/${tags}.json`, data, (err) => {
      if (err) throw err;
    });
  });
});
