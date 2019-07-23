import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Characters extends Component {
    render() {
        return (
        
            <div className="card thisCard col-md-1">
                <img className="card-img-top" src={this.props.character.character} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

Characters.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Characters;