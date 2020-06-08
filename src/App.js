import React from 'react';
import Table from './Table';
import Form from './Form';
import GetWikipediaApi from './GetWikipediaApi';

export class App extends React.Component {
    state = {
        characters: [
        ]
    }

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })

    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <GetWikipediaApi />
                <h1> Tabla </h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>  
            </div>
        );
    }
}
