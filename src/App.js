import React, { Component } from 'react';
import './App.css';

import Chores from './components/chores';
import AddChore from './components/addChore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chores />
        <hr />
        <AddChore />
      </div>
    );
  }
}

export default App;
