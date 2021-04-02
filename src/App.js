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

  /*
    "resourceName": "Webflow 101 crash course",
    "briefDescription": "overview of the basics to get started on building your first website,",
    "resourceImage": "Webflow_101_crash_course-min.jpg",
    "resourceColor": "#B9C3FF",
    "resourceType": "Course",
    "topic": "Web Design",
    "creator": "Webflow",
    "creatorLink": "https://webflow.com/",
    "resourceDetails": "Jump right in to Webflow — get an overview of the basics and get started on building your first website, without learning or writing code.",
    "resourceLink": "https://university.webflow.com/courses/webflow-101-crash-course",
    "cost": "Free",
    "level": "Beginner"
  */

  render(){
    return(
      <div className="resources-list">
      {this.state.data.map((item, idx) => (
          <Card2 
          key={idx}
          resourceName
          resourceImage
          resourceColor
          resourceType
          topic
          creator
          creatorLink
          resourceDetails
          resourceLink
          level 
          image={item.pic}
          title={item.title} 
          hashtag={item.category}
          description={item.description}
          description2={item.description2}
          thanksto={item.thanksto}
          url={item.url}
          />
      ))}
  </div>    
    )
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