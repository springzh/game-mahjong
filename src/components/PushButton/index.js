import React, {Fragment} from 'react';
import connect from '@/connect';
import {GAME_SETTING, TAKE_CARD} from "@/actions";
import {Card} from "@/components";
import './index.less';

class PushButton extends React.Component {

  render() {
    const {game, dispatch} = this.props;
    const {playing, totalCard} = game;
    return (
      <Fragment>
        <div className="card-box">
          {
            playing === 1 ? <Card num={0}>游戏<br/>进行中</Card> : null}
          {
            playing === 0 ? <Card num={0} onClick={_ => {
              dispatch(GAME_SETTING(1));
              dispatch(TAKE_CARD(1, 'east'));
            }}>游戏<br/>开始
            </Card> : null
          }
          {
            playing === 2 || playing === 3 ? <Card num={0} onClick={_ => {
              dispatch(GAME_SETTING(1));
              dispatch(TAKE_CARD(1, 'east'));
            }}>重新<br/>开始
            </Card> : null
          }
          <Card num={0} onClick={_ => {}}>剩余<br/>{totalCard.length}
          </Card>
        </div>
      </Fragment>
    );
  }
}


export default connect(PushButton);