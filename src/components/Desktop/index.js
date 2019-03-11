import React, {Fragment} from 'react';
import connect from '../../connect';
import Card from '../Card';
import {CHANGE_ROUND} from "@/actions";

class Desktop extends React.Component {

  componentDidUpdate() {
    const {game, dispatch} = this.props;
    const {desktopRound, round} = game;
    if (desktopRound) {
      if (round === 'east') dispatch(CHANGE_ROUND('south'));
      if (round === 'south') dispatch(CHANGE_ROUND('west'));
      if (round === 'west') dispatch(CHANGE_ROUND('north'));
      if (round === 'north') dispatch(CHANGE_ROUND('east'));
    }
  }

  render() {
    const {game} = this.props;
    const {desktopCard} = game;
    return (
      <Fragment>
        <div className='card-box'>
          {
            desktopCard.map((item, index) => {
              return <Card key={index} num={item}/>
            })
          }
        </div>
      </Fragment>
    );
  }
}


export default connect(Desktop);