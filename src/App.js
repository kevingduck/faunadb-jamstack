import React from 'react';
import './App.css';
import Header from './components/header.js';
import CreateProject from './components/createProject.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <CreateProject></CreateProject>
      </div>
    );
  }
}

export default App;
