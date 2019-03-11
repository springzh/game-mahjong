'use strict';

export const TAKE_CARD = (num, position, needSort = false) => {
  return {
    type: 'TAKE_CARD',
    num,
    position,
    needSort
  }
};

export const THROW_CARD = (index) => {
  return {
    type: 'THROW_CARD',
    index,
  }
};

export const CHANGE_ROUND = (round) => {
  return {
    type: 'CHANGE_ROUND',
    round,
  }
};
