import React, { Component } from 'react';
import CharacterList from './CharacterList'
import HeroesList from './HeroesList'
import SquadStats from './SquadStats'

import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">SuperSquad</h1>
        <div className="col-md-4">
          <CharacterList/>
        </div>
        <div className="col-md-4">
          <HeroesList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    );
  }
}

export default App;
