import React from 'react';

class Card extends React.Component {

    render() {
        return (
            <div>
                <ul className="list">
                    {this.props.character.map(item => {
                        return (
                            <li className="card" key={item.id}>
                                <h2>{item.name.first} {item.name.last}</h2>
                                <div className="container-img">
                                    <img className="img-card" src={item.picture.large} alt={item.name.first}></img>
                                </div>

                                <div className="description">
                                    <p>🎂 {item.dob.date} ({item.dob.age} años) </p>
                                    <p>✉️  {item.email}</p>
                                    <p>☎️ {item.phone}</p>
                                </div>
                                <div className="container-button">
                                    <button className="button" onClick={this.props.getCharacter}>🆓 </button>
                                    <button className="button" onClick={this.props.getCharacterFeme}>🚺</button>
                                    <button className="button" onClick={this.props.getCharacterMale}>🚹</button>
                                </div>

                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
export default Card;