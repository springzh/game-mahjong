'use strict';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './desktop.less';

class DesktopEle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment/>
    );
  }
}

export const DesktopRender = (player, Game, card) => {
  let dom = document.getElementById('desktop');
  if (!dom) {
    dom = document.createElement('div');
    dom.id = 'desktop';
    document.body.appendChild(dom);
  }

  ReactDOM.render(<DesktopEle/>, dom);
};
