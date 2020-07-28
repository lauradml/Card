import React from 'react';

class Card extends React.Component {

    formatDate = (date) => {
        let arrayDate = date.split('-');
        let day = arrayDate[2].split('T');
        let dateFormat = day[0] + '/' + arrayDate[1] + '/' + arrayDate[0];
        return dateFormat;
    }

    render() {
        const { character, getCharacter, getCharacterGender } = this.props;
        return (
            <div>
                <ul className="list">
                    {character.map(item => {
                        return (
                            <li className="card" key={item.id}>
                                <h2 className="title">{item.name.first} {item.name.last}</h2>
                                <div className="container-img">
                                    <img className="img-card" src={item.picture.large} alt={item.name.first}></img>
                                </div>

                                <div className="description">
                                    <p>🎂 {this.formatDate(item.dob.date)} ({item.dob.age} años) </p>
                                    <p>✉️  {item.email}</p>
                                    <p>☎️ {item.phone}</p>
                                </div>
                                <div className="container-button">
                                    <button className="button" onClick={getCharacter}>⚧️</button>
                                    <button className="button" onClick={() => getCharacterGender('female')}>🚺</button>
                                    <button className="button" onClick={() => getCharacterGender('male')}>🚹</button>
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