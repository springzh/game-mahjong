'use strict';
import {randomArray} from "../util";

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
};

const game = (state = defaultData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state
  }
};
export default game
