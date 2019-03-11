import React, {Fragment} from 'react';
import connect from '@/connect';
import Card from '../Card';
import {TAKE_CARD, THROW_CARD, GAME_SETTING} from "@/actions";

class Player extends React.Component {

  componentDidMount() {
    const {dispatch, position} = this.props;
    dispatch(TAKE_CARD(13, position, true));
  }

  render() {
    const {game, position} = this.props;
    const {round, playing} = game;
    return (
      <Fragment>
        <div className={`card-box ${round === position && playing === 1 ? 'active' : ''}`}>
          {
            game[position + 'Card'].map((item, index) =>
              <Card key={index} num={item} index={index} position={position}/>)
          }
        </div>
      </Fragment>
    );
  }
}


export default connect(Player);