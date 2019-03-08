'use strict';

class Game {
  static modules = [];

  constructor(options = {}) {
    this._cardTotal = [];
    this._playing = true;
    this.options = options;
    this.round = 'east';
    this.init();
  }

  get playing() {
    return this._playing
  }

  set playing(value) {
    this._playing = value
  }

  get cardTotal() {
    return this._cardTotal
  }

  set cardTotal(value) {
    this._cardTotal = value
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.initModules();
      this.options.onReady && this.options.onReady(this);
    });
  }

  static use(module) {
    Array.isArray(module) ? module.map(item => Game.use(item)) : Game.modules.push(module);
  }

  initModules() {
    Game.modules.map(module => module.init && typeof module.init == 'function' && module.init(this));
  }

  checkPlaying() {
    this.cardTotal.length <= 0 ? this.playing = false : void 0;
  }

  give(num = 1) {
    const result = this.cardTotal.splice(0, num);
    this.checkPlaying();
    console.log(this.cardTotal);
    return result;
  }

}

export default Game;