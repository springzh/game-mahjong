import React, {Fragment} from 'react';
import {Desktop, Player, PushButton} from '../components';

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Player position='east'/>
        <Player position='south'/>
        <Player position='west'/>
        <Player position='north'/>
        <Desktop/>
        <PushButton/>
      </Fragment>
    );
  }
}


export default App;