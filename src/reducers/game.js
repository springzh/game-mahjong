'use strict';
import {randomArray, sortArray} from "@/util";

let arr = [];
const newCard = (startNum, endNum) => {
  for (let i = startNum; i <= endNum; i++) {
    arr.push(i);
    arr.push(i);
    arr.push(i);
    arr.push(i);
  }
};
newCard(1, 9);
newCard(11, 19);
newCard(21, 29);
arr = randomArray(arr);

const defaultData = {
  playing: 0, // 0 未开始 1 进行中 2 流局 3 决出胜负
  totalCard: arr,
  desktopCard: [],
  eastCard: [],
  southCard: [],
  westCard: [],
  northCard: [],
  round: 'east',
  desktopRound: false,
  desktopEvent: '' // PENG GANG CHI HU
};

const game = (state = defaultData, action) => {
  switch (action.type) {
    // 拿牌
    case 'TAKE_CARD':
      const {num = 1, position = state.round, needSort} = action;
      needSort ?
        state[position + 'Card'] = sortArray(state[position + 'Card'].concat(state.totalCard.splice(0, num))) :
        state[position + 'Card'] = state[position + 'Card'].concat(state.totalCard.splice(0, num));
      return Object.assign({}, state, {});
    // 打牌
    case 'THROW_CARD':
      const {index} = action;
      state.desktopCard.push(state[state.round + 'Card'][index]);
      (state[state.round + 'Card'].splice(index, 1));
      state[state.round + 'Card'] = sortArray(state[state.round + 'Card']);
      state.desktopRound = true;
      return Object.assign({}, state, {});
    // 换回合
    case 'CHANGE_ROUND':
      const {round} = action;
      state.round = round;
      state.desktopRound = false;
      return Object.assign({}, state, {});
    // 游戏状态设置
    case 'GAME_SETTING':
      const {playing} = action;
      state.playing = playing;
      return Object.assign({}, state, {});
    // 判断有无碰\杠
    case 'CHECK_EVENT':
      const lastCard = state.desktopCard[state.desktopCard.length - 1];
      let i_e = 0, i_s = 0, i_w = 0, i_n = 0;
      state.eastCard.map(item => {
        if (item === lastCard) {
          i_e++;
        }
      });
      state.southCard.map(item => {
        if (item === lastCard) {
          i_s++;
        }
      });
      state.westCard.map(item => {
        if (item === lastCard) {
          i_w++;
        }
      });
      state.northCard.map(item => {
        if (item === lastCard) {
          i_n++;
        }
      });
      if (i_e === 2 || i_s === 2 || i_w === 2 || i_n === 2) {
        state.desktopEvent = 'PENG'
      }
      if (i_e === 3 || i_s === 3 || i_w === 3 || i_n === 3) {
        state.desktopEvent = 'GANG'
      }
      return Object.assign({}, state, {});
    default:
      return state;
  }
};
export default game
