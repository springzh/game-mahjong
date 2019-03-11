import React, {Fragment} from 'react';
import connect from '@/connect';
import Card from '../Card';
import {TAKE_CARD, THROW_CARD} from "@/actions";
import './index.less'

class Player extends React.Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(TAKE_CARD(13, 'east', true));
    dispatch(TAKE_CARD(13, 'south', true));
    dispatch(TAKE_CARD(13, 'west', true));
    dispatch(TAKE_CARD(13, 'north', true));
  }

  render() {
    const {game} = this.props;
    const {eastCard, southCard, westCard, northCard} = game;
    console.log(eastCard);
    return (
      <Fragment>
        <div className='card-box'>
          {
            eastCard.map((item, index) => <Card key={index} num={item} index={index} position='east'/>)
          }
        </div>
        <div className='card-box'>
          {
            southCard.map((item, index) => <Card key={index} num={item} index={index} position='south'/>)
          }
        </div>
        <div className='card-box'>
          {
            westCard.map((item, index) => <Card key={index} num={item} index={index} position='west'/>)
          }
        </div>
        <div className='card-box'>
          {
            northCard.map((item, index) => <Card key={index} num={item} index={index} position='north'/>)
          }
        </div>
      </Fragment>
    );
  }
}


export default connect(Player);