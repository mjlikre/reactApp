import React, { Component } from 'react'

import "./style.css"
export class Characters extends Component {

    
    render() {
        const { id } = this.props.character
        return (
        
            <div className="card">
                <div className = 'img-container' charid = {this.props.character.id} value = {this.props.character.clicked} onClick = {this.props.clicked.bind(this, id)}>
                    <img className="card-img-top" src={this.props.character.character} alt=""/>
                </div>
            </div>
        )
    }
}



export default Characters;