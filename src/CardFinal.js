import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';
import './CardFinal.css';

class CardFinal extends Component{

    render(){
        return(
            <div className="container">

            {/* <hr> */}
            <div className="profile-card-4 text-center"><img src="https://cdn.jsdelivr.net/gh/fernandocomet/webflowresources@master/src/img/Ultimate_web_design_course-min.jpg" className="img img-responsive"/></div>
                <div className="profile-content">
                    <div className="profile-name">Resource Name
                        <p>@creator + creatorLink</p>
                    </div>
                    <div className="profile-description">briefDescription - Lorem ipsum dolor sit amet</div>
                    <div className="profile-description">resourceDetails - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                    <button type="button" className="btn btn-info">GET IT - resourceLink</button>
                    
                    <div className="row">
                        <div className="col-xs-3">
                            <div className="profile-overview">
                                <p>Type</p>
                                <h5>Video</h5>
                            </div>
                        </div>
                        <div className="col-xs-3">
                            <div className="profile-overview">
                                <p>Topic</p>
                                <h5>Tutorial</h5>
                            </div>
                        </div>
                        <div className="col-xs-3">
                            <div className="profile-overview">
                                <p>Level</p>
                                <h5>Beginner</h5>
                            </div>
                        </div>
                        <div className="col-xs-3">
                            <div className="profile-overview">
                                <p>Cost</p>
                                <h5>Free</h5>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </div>

        )
    }
}

export default CardFinal;