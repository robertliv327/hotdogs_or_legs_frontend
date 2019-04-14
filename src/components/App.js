import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route render={() => (<div>route not found </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
