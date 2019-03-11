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
  playing: false,
  totalCard: arr,
  desktopCard: [],
  eastCard: [],
  southCard: [],
  westCard: [],
  northCard: [],
  round: 'east',
  desktopRound: false,
};

const game = (state = defaultData, action) => {
  switch (action.type) {
    // 拿牌
    case 'TAKE_CARD':
      const {num = 1, position = state.round, needSort} = action;
      needSort ? state[position + 'Card'] = sortArray(state.totalCard.splice(0, num)) : state[position + 'Card'] = state.totalCard.splice(0, num);
      return Object.assign({}, state, {});
    // 打牌
    case 'THROW_CARD':
      const {index} = action;
      state.desktopCard.push(state[state.round + 'Card'][index]);
      state[state.round + 'Card'].splice(index, 1);
      state.desktopRound = true;
      return Object.assign({}, state, {});
    // 换回合
    case 'CHANGE_ROUND':
      const {round} = action;
      state.round = round;
      state.desktopRound = false;
      return Object.assign({}, state, {});
    default:
      return state;
  }
};
export default game
