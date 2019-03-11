'use strict';
import React from 'react';
import PropTypes from 'prop-types'
import './card.less';

export default class Card extends React.Component {

  render() {
    const {num=0,onClick=_=>{}} = this.props;
    return (
             <div className='card'
               /*style={{background: require('../asset/card-' + item + '.png')}}*/
                  onClick={onClick}>{num}</div>

    );
  }
}
Card.PropTypes={
  num:PropTypes.number,
  onClick:PropTypes.function
};