import React, { Component } from 'react';
 import './App.css';
import CardResource from './CardResource';
import CardFinal from './CardFinal';

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
    fetch('https://raw.githubusercontent.com/fernandocomet/webflowresources/master/src/data/webflow_resources.json')
    //fetch('https://raw.githubusercontent.com/fernandocomet/webflowresources/blob/master/src/data/webflow_resources.json')
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }


  render(){
    return(
      <div className="card-list">
       {this.state.data.map((item, idx) => (
          <CardResource 
          key={idx}
          resourceName={item.resourceName}
          briefDescription={item.briefDescription}
          image={item.pic}
          resourceColor={item.resourceColor}
          resourceType={item.resourceType}
          topic={item.topic}
          creator={item.creator}
          creatorLink={item.creatorLink}
          resourceDetails={item.resourceDetails}
          resourceLink={item.resourceLink}
          cost ={item.cost}
          level ={item.level}
          />
      ))} 
  </div>    
    )
  }

}

export default Resources;
