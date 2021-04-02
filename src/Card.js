import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';

/*
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
*/

class Card extends Component{

    render(){
        return(
            <div className="card1">
            Hola esto es  Card {this.props.key}
            <header className="card-header1">
                <img src={this.props.resourceImage} alt={this.props.resourceName} className="card-header" width='720px'/>
            </header>
            <div>
                <h1>this.props.resourceName</h1>
            </div>
           {/* <div className="card-body1">
                <p className="date">#{this.props.hashtag}</p>
                <h2>{this.props.title}</h2>
                <p className="body-content">{this.props.description}<br></br>
                {this.props.description2}</p>
                <ExternalLink href={this.props.url}>
                    <button className="button button-primary" >
                        <i className="fa fa-chevron-right"></i> Find out more
                    </button>    
                </ExternalLink>
            </div>                 */}
            </div>
        )
    }

}

export default Card;