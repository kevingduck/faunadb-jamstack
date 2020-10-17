import React from 'react';
import './App.css';
import Form from './components/form.js';
import Header from './components/header.js';
// import ItemForm from './components/itemForm';
import ProjectDetail from './components/projectDetail';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="full-form">
          <div>
            <Form></Form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
