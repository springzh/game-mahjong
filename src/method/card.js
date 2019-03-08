'use strict';
import {randomArray} from './util';
export default {
  init(mahjong) {
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
    mahjong.cardTotal = arr;
  }
};