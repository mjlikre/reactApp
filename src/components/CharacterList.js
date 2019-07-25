import React, { Component } from 'react'
import Characters from './Characters'


class CharacterList extends Component {
    render() {
       return this.props.characters.map((character)=>(
            <div>
                <Characters character = {character} key = {character.id} clicked = {this.props.clicked}/>
            </div>
        ));
        
    }
}

export default CharacterList;