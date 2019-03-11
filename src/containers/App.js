import React, {Fragment} from 'react';
import {Desktop,Player} from '../components';

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Player/>
        <Desktop/>
      </Fragment>
    );
  }
}


export default App;