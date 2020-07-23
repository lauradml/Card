
import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

const url = 'https://randomuser.me/api/'
const urlFem = 'https://randomuser.me/api/?gender=female'
const urlMale = 'https://randomuser.me/api/?gender=male'

class App extends Component {

  constructor(props) {
    super(props);
    this.getCharacter = this.getCharacter.bind(this);
    this.getCharacterFeme = this.getCharacterFeme.bind(this);
    this.getCharacterMale = this.getCharacterMale.bind(this);

    this.state = {
      character: [],
    }
  }

  componentDidMount() {
    this.getCharacter();
  }

  getCharacter() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const result = data.results;
        this.setState({
          character: result,
        });
        console.log(result)
      });
    
  }

  getCharacterFeme() {
    fetch(urlFem)
      .then(response => response.json())
      .then(data => {
        const result = data.results;
        this.setState({
          character: result,
        });
        console.log(this.state.character)
      });
    
  }
  getCharacterMale() {
    fetch(urlMale)
      .then(response => response.json())
      .then(data => {
        const result = data.results;
        this.setState({
          character: result,
        });
        console.log(this.state.character)
      });
    
  }

  render() {
    return (
      <div className="App">
        <div >
          <Card character={this.state.character} getCharacter={this.getCharacter} getCharacterFeme={this.getCharacterFeme}
            getCharacterMale={this.getCharacterMale} telefono={this.state.telefono} />
        </div>

      </div>
    );
  }
}

export default App;