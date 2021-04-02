import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class Resources extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[], function () {
        console.log(this.state.data);
    }//);
    }
  }

  componentDidMount(){
    fetch('https://cdn.jsdelivr.net/gh/fernandocomet/webflowresources@master/src/data/webflow_resources.json')
    //fetch('https://raw.githubusercontent.com/fernandocomet/webflowresources/blob/master/src/data/webflow_resources.json')
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
          <Card 
          key={idx}
          resourceName={item.resourceName}
          resourceImage={item.resourceImage}
          resourceColor={item.resourceColor}
          resourceType={item.resourceType}
          topic={item.topic}
          creator={item.creator}
          creatorLink={item.creatorLink}
          resourceDetails={item.resourceDetails}
          resourceLink={item.resourceLink}
          level ={item.level}
          />
      ))}
  </div>    
    )
  }

}

export default Resources;
