import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';

/*
    "resourceImage": "https://raw.githubusercontent.com/fernandocomet/webflowresources/blob/master/src/img/Webflow_101_crash_course-min.jpg",
*/

class Card extends Component{

    render(){
        return(
            <div className="card1">
            Hola esto es  Card 
            <header className="card-header1">
                <img src={this.props.resourceImage} alt={this.props.resourceName} className="card-header" width='720px'/>
            </header>
                <div>
                    <h2>{this.props.idx}</h2>
                    <ExternalLink href={this.props.resourceLink}>
                        <h1>{this.props.resourceName}</h1>
                    </ExternalLink>
                    <h3>{this.props.briefDescription} - {this.props.resourceDetails}</h3>
                    <h6>- {this.props.resourceColor} - {this.props.topic} - {this.props.cost} - {this.props.level}</h6>
                    
                    <ExternalLink href={this.props.creatorLink}>
                        <h4>{this.props.creator}</h4>
                    </ExternalLink>
                </div>
            </div>
        )
    }

}

export default Card;