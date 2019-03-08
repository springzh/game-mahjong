'use strict';

class Desktop {
  static modules = [];

  constructor(options = {}) {
    this._card = [];
    this.Game = options.Game;
    this.init();
  }

  get card() {
    return this._card
  }

  set card(value) {
    this._card = value
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

export default Desktop;