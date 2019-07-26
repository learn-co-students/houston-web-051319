import React from 'react';
import { GreenIndex } from './views/GreenIndex'
import { PurpleDetail } from './views/PurpleDetail'
import { BlueEdit } from './views/BlueEdit'

import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {

  
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/things/:id/edit" component={BlueEdit} />
        <Route exact path="/things/:id" component={PurpleDetail} />
        <Route exact path="/things" component={GreenIndex} />
      </BrowserRouter>
    );
  }

}

export default App;