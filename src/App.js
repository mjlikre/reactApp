import React, { Component } from 'react';

import './App.css';

import Todos from './components/CharacterList'

import Haku from "./images/Haku.png"
import Itachi from "./images/Itachi.png"
import Jiraya from "./images/Jiraiya.png"
import Kakashi from "./images/Kakashi.png"
import Kushina from "./images/Kushina.png"
import Minato from "./images/Minato.png"
import Obito from "./images/Obito.png"
import Sasuke from "./images/Sasuke.png"
import Zabuza from "./images/Zabuza.png"



class App extends Component {
  state={
    characters:[
      {
        id:0,
        character: Haku,
        clicked:0 
      },
      {
        id : 1,
        character: Itachi,
        clicked:0
      },
      {
        id : 2,
        character: Jiraya,
        clicked:0
      },
      {
        id : 3,
        character: Kakashi,
        clicked:0
      },
      {
        id : 4,
        character: Minato,
        clicked:0
      },
      {
        id : 5,
        character: Kushina,
        clicked:0
      },
      {
        id : 6,
        character: Sasuke,
        clicked:0
      },
      {
        id : 7,
        character: Zabuza,
        clicked:0
      },
      {
        id : 8,
        character: Obito,
        clicked:0
      }
    ]

  }
  render(){

    return(
      <div>
  
        <Todos characters = {this.state.characters}/>
      </div>
    );
  }
}

export default App;
