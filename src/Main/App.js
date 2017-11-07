import React, { Component } from 'react';
import '../styles/App.css';
import Second from '../components/Second';

class App extends Component {
  render() {
    return (
      <div className="Background">
        <Second width="1000" height="1360"/>
      </div>
    );
  }
}

export default App;
