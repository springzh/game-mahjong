'use strict';
import {sortArray} from './util';
import {CardRender} from '../dom/card';

class Player {
  static modules = [];

  constructor(options = {}) {
    this._card = [];
    this.options = options;
    this.position = options.position;
    this.Game = options.Game;
    this.init();
  }

  get card() {
    return this._card
  }

  get cardZh() {
    let result = [];
    this._card.map(item => {
      item < 10 ? item = item + '万' : void 0;
      item > 10 && item < 20 ? item = Number(item - 10) + '条' : void 0;
      item > 20 ? item = Number(item - 20) + '筒' : void 0;
      result.push(item);
    });
    return result;
  }

  setCard(value, sort = true) {
    let result = value;
    if (sort) {
      result = sortArray(value);
    }
    CardRender(this, this.Game, result);
    this._card = result
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.initModules();
      this.options.onReady && this.options.onReady(this);
    });
  }

  static use(module) {
    Array.isArray(module) ? module.map(item => Player.use(item)) : Player.modules.push(module);
  }

  initModules() {
    Player.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));
  }

}

export default Player;