import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';
import './CardResource.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class CardResource extends Component{

    render(){
        return(
            <div className="box gallery">
                <div className="card-image">
                    <img src={this.props.image} alt={this.props.resourceName} className="img-fluid"/>
                </div>
                <div className="card-body">
                    <ExternalLink href={this.props.resourceLink}>
                        <div className="profile-name">{this.props.resourceName}</div> 
                    </ExternalLink>
                    <div className="profile-description">{this.props.briefDescription} <p> {this.props.resourceDetails}</p></div>
                    <div className="profile-name">{this.props.topic} - {this.props.resourceType} - {this.props.cost} - {this.props.level}</div>
                    
                    <ExternalLink href={this.props.creatorLink}>
                        <div className="profile-name">Created by {this.props.creator}</div>
                    </ExternalLink>
                </div>
            </div> 
        )
    }
}

export default CardResource;