import Mahjong from './src/index.js';
import Card from './src/method/card';
import Player from './src/method/player';

Mahjong.use(Card);


const Game = new Mahjong({
  onReady: () => {
    const Player_East = new Player({
      position: 'east',
      Game
    });
    const Player_South = new Player({
      position: 'south',
      Game
    });
    const Player_West = new Player({
      position: 'west',
      Game
    });
    const Player_North = new Player({
      position: 'north',
      Game
    });
    Player_East.setCard(Game.give(14));
    Player_South.setCard(Game.give(14));
    Player_West.setCard(Game.give(14));
    Player_North.setCard(Game.give(14));
    console.log('east', Player_East);
    console.log('south', Player_South);
    console.log('west', Player_West);
    console.log('north', Player_North);
    console.log(Game);
  }
});
