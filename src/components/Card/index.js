'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';
import {THROW_CARD, CHANGE_ROUND} from "@/actions";
import connect from '@/connect';

class Card extends React.Component {

  throwCard = index => {
    const {dispatch, position, game} = this.props;
    if (game.round === position) {
      dispatch(THROW_CARD(index));
    } else {

    }
  };

  render() {
    const {
      num = 0, className = '', index, ...others
    } = this.props;
    return (
      <div className={`card ${className}`}
           {...others}
           style={{backgroundImage: `url(${require('@/asset/imgs/card/' + num + '.jpg')})`}}
           onClick={_ => {
             this.throwCard(index)
           }}>{num}</div>
    );
  }
}

Card.propTypes = {
  num: PropTypes.number,
  position: PropTypes.string,
  index: PropTypes.number
};

export default connect(Card);