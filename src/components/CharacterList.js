import React, { Component } from 'react'
import Characters from './Characters'
import PropTypes from 'prop-types';

class CharacterList extends Component {
    render() {
       return this.props.characters.map((character)=>(
            <div className = 'row'>
                <Characters character = {character} key = {character.id}/>

            </div>
        ));
        
    }
}
 
CharacterList.propTypes = {
    characters: PropTypes.array.isRequired
}

export default CharacterList;