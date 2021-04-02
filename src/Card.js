import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';

class Card extends Component{

    render(){
        return(
            <div className="card1">
            <header className="card-header1">
                <img src={this.props.image} alt={this.props.title} className="card-header" width='280px'/>
            </header>
            <div className="card-body1">
                <p className="date">#{this.props.hashtag}</p>
                <h2>{this.props.title}</h2>
                <p className="body-content">{this.props.description}<br></br>
                {this.props.description2}</p>
                <ExternalLink href={this.props.url}>
                    <button className="button button-primary" >
                        <i className="fa fa-chevron-right"></i> Find out more
                    </button>    
                </ExternalLink>
            </div>                
        </div>
        )
    }

}

export default Card;