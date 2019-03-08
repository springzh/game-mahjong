'use strict';
import React, {Fragment} from 'react';
import './card.less';
import PropTypes from 'prop-types';

export default class Card extends React.Component {

  render() {
    const {
      num = 0, onClick = () => {
      }, className='', ...others
    } = this.props;
    return (
      <div className={`card ${className}`} {...others}
           style={{backgroundImage: `url(${require('../asset/card/' + num + '.jpg')})`}}
           onClick={onClick}>{num}</div>
    );
  }
}

Card.propTypes = {
  num: PropTypes.number,
  onClick: PropTypes.function
};