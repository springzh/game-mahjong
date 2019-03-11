import React, {Fragment} from 'react';
import connect from '../../connect';
import Card from '../Card';
import {CHANGE_ROUND, CHECK_EVENT, TAKE_CARD, GAME_SETTING} from "@/actions";

class Desktop extends React.Component {

  componentDidUpdate() {
    const {game, dispatch} = this.props;
    const {desktopRound, round, totalCard} = game;
    if (desktopRound) {
      // 没牌了
      if (totalCard.length === 0) {
        dispatch(GAME_SETTING(2));
      }
      dispatch(CHECK_EVENT());
      if (round === 'east') {
        dispatch(CHANGE_ROUND('south'));
        dispatch(TAKE_CARD({position:'south'}));
      }
      if (round === 'south') {
        dispatch(CHANGE_ROUND('west'));
        dispatch(TAKE_CARD({position:'west'}));
      }
      if (round === 'west') {
        dispatch(CHANGE_ROUND('north'));
        dispatch(TAKE_CARD({position:'north'}));
      }
      if (round === 'north') {
        dispatch(CHANGE_ROUND('east'));
        dispatch(TAKE_CARD({position:'east'}));
      }
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