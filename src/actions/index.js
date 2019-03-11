'use strict';

export const TAKE_CARD = ({num, position, needSort = false, needConcat = true}) => {
  return {
    type: 'TAKE_CARD',
    num,
    position,
    needSort,
    needConcat
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

export const GAME_SETTING = (playing) => {
  return {
    type: 'GAME_SETTING',
    playing
  }
};

export const CHECK_EVENT = () => {
  return {
    type: 'CHECK_EVENT',
  }
};


