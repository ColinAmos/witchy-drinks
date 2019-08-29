import React from 'react';
import './App.css';

import { Background, MixingStation } from "./components";


class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Background />
        <MixingStation />
      </div>
    );
  }
}


export default App;
