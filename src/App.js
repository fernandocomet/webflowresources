import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Resources extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/data/portfolio.json')
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

}

export default Resources;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/