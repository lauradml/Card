
import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

const url = 'https://randomuser.me/api/'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      character: [],
    }
  }

  componentDidMount() {
    this.getCharacter();
  }

  getCharacter = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const result = data.results;
        this.setState({
          character: result,
        });
      })
      .catch(error => console.log(error));

  }
  getCharacterGender = (gender) => {
    fetch(`https://randomuser.me/api/?gender=${gender}`)
      .then(response => response.json())
      .then(data => {
        const result = data.results;
        this.setState({
          character: result,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <div >
          <Card character={this.state.character} getCharacter={this.getCharacter}
            getCharacterGender={this.getCharacterGender} telefono={this.state.telefono} />
        </div>
      </div>
    );
  }
}

export default App;