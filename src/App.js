import React, { Component } from 'react';

import './App.css';

import CharacterList from './components/CharacterList'

import Wrapper from "./components/Wrapper";


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
    score:0,
    characters:[
      {
        id:0,
        character: Haku,
        clicked:false 
      },
      {
        id : 1,
        character: Itachi,
        clicked:false
      },
      {
        id : 2,
        character: Jiraya,
        clicked:false
      },
      {
        id : 3,
        character: Kakashi,
        clicked:false
      },
      {
        id : 4,
        character: Minato,
        clicked:false
      },
      {
        id : 5,
        character: Kushina,
        clicked:false
      },
      {
        id : 6,
        character: Sasuke,
        clicked:false
      },
      {
        id : 7,
        character: Zabuza,
        clicked:false
      },
      {
        id : 8,
        character: Obito,
        clicked:false
      }
    ]

  }

  
 
  clicked = id => {
    const charCopy = this.shuffle(this.state.characters)
    
    console.log(charCopy)
    
    this.setState({
      characters: this.state.characters.map(character =>{
        if (character.id === id){
          console.log(character.clicked)
          if(!character.clicked){
            character.clicked = !character.clicked
            this.counter()
          }else{
            this.reset();
          }
          
        } 
        return character
      })
    })
    
    console.log(id)

  }

   shuffle = (array) =>{
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  

  reset = () => {
    this.setState ({
      score : 0,
      characters : this.state.characters.map(character =>{
        character.clicked = false;
        return character
      })
    })
  }
  

  counter = () =>{
    this.setState( (prevState)=>{
      return {score: prevState.score + 1 }
    })
  }
  render(){
    return(
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Clicky Game</span>

          <span>Points: {this.state.score}/9</span>
        </nav>
        <div>
          <Wrapper>
            <CharacterList characters = {this.state.characters} clicked = {this.clicked}/>
          </Wrapper>
        </div>

      </div>
    )
  }
}

export default App;
