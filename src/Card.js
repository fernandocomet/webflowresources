import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/*
    "resourceImage": "https://raw.githubusercontent.com/fernandocomet/webflowresources/blob/master/src/img/Webflow_101_crash_course-min.jpg",
*/

class Card extends Component{
   

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <img src={this.props.image} alt={this.props.resourceName} className="img-fluid"/>
                </div>
                <div>
                    <h2>Card</h2>
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