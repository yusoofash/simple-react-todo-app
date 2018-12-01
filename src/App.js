import React, { Component } from 'react';
import './App.css';
import ToDo from './ToDo/ToDo';

class App extends Component {
  render() {
    return (
      <div>
        <ToDo
        title="Simple Mobile To-Do App"></ToDo>
      </div>
    );
  }
}

export default App;
