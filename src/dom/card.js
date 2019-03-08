'use strict';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Card} from "../component";
import './card.less';

class CardEle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      player: props.player
    };
  }

  render() {
    const {card = [], player} = this.props;
    const {Game} = player;
    return (
      <Fragment>
        {
          card.map((item, index) => {
            return <Card key={index} num={item}
                         onClick={_ => {
                           player.setCard(player.card.concat(Game.give()), false)
                         }}>{item}</Card>
          })
        }
      </Fragment>
    );
  }
}

export const CardRender = (player, card) => {
  const {position, Game, Desktop} = player;
  let dom = document.getElementById('card-' + position);
  if (!dom) {
    dom = document.createElement('div');
    dom.id = 'card-' + position;
    dom.className = 'card-box';
    document.body.appendChild(dom);
  }

  ReactDOM.render(<CardEle card={card} player={player}/>, dom);
};
