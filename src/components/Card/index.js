'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import './index.less';
import {THROW_CARD, CHANGE_ROUND} from "@/actions";
import connect from '@/connect';

const debug = require('debug')('game');

class Card extends React.Component {

  throwCard = index => {
    const {dispatch, position, game} = this.props;
    const {round, playing} = game;
    if (round === position && playing === 1) {
      dispatch(THROW_CARD(index));
      debug(position + ' throw card');
    }
  };

  render() {
    const {
      num = 0, className = '', onClick = _ => {
        this.throwCard(this.props.index)
      }
    } = this.props;
    return (
      <div className={`card ${className}`}
           style={{backgroundImage: `url(${require('@/asset/imgs/card/' + num + '.jpg')})`}}
           onClick={onClick}>{this.props.children}</div>
    );
  }
}

Card.propTypes = {
  num: PropTypes.number,
  position: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number
};

export default connect(Card);