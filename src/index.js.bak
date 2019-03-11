'use strict';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.less';

class GameEle extends React.Component {

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

class Game {
  static modules = [];

  constructor(options = {}) {
    this._cardTotal = [];
    this._playing = true;
    this.options = options;
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
      // let dom = document.getElementById('Game');
      // if (!dom) {
      //   dom = document.createElement('div');
      //   dom.setAttribute('id', 'Game');
      //   document.body.appendChild(dom);
      // }
      // this.Game = ReactDOM.render(<GameEle/>, dom);
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