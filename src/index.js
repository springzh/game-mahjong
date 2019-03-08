import _Game from './method/game';
import Card from './method/card';
import _Desktop from './method/desktop';
import _Player from './method/player';

_Game.use(Card);


const Game = new _Game({
  onReady: () => {

    const Desktop = new _Desktop({
      Game
    });
    const Player_East = new _Player({
      position: 'east',
      Desktop,
      Game
    });
    const Player_South = new _Player({
      position: 'south',
      Desktop,
      Game
    });
    const Player_West = new _Player({
      position: 'west',
      Desktop,
      Game
    });
    const Player_North = new _Player({
      position: 'north',
      Desktop,
      Game
    });
    Player_East.setCard(Game.give(13));
    Player_South.setCard(Game.give(13));
    Player_West.setCard(Game.give(13));
    Player_North.setCard(Game.give(13));
  }
});
