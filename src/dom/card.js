'use strict';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './card.less';

class CardEle extends React.Component {

  render() {
    const {card = [], player, Game} = this.props;
    return (
      <Fragment>
        {
          card.map((item, index) => {
            return <div className='card'
                        key={index} /*style={{background: require('../asset/card-' + item + '.png')}}*/
                        onClick={_ => {
                          player.setCard(player.card.concat(Game.give()), false)
                        }}>{item}</div>
          })
        }
      </Fragment>
    );
  }
}

export const CardRender = (player, Game, card) => {
  const {position} = player;
  let dom = document.getElementById('card-' + position);
  if (!dom) {
    dom = document.createElement('div');
    dom.id = 'card-' + position;
    dom.className = 'card-box';
    document.body.appendChild(dom);
  }

  ReactDOM.render(<CardEle card={card} player={player} Game={Game}/>, dom);
};
