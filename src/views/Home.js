import React from "react";
import md5 from "md5";
import Characters from "../components/Characters";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            bookmarkedCharacters: [],
            searchValue: ''
        };
    }

    componentDidMount() {
        const bookmarkedCharactersString = window.localStorage.getItem("bookmarkedCharacters");
        const bookmarkedCharacters = bookmarkedCharactersString ? JSON.parse(bookmarkedCharactersString) : [];
        this.setState({ bookmarkedCharacters: bookmarkedCharacters });

        const base_url ='https://gateway.marvel.com/v1/public/characters';
        const ts = 'ts' + Math.random() * 10;
        const publicKey = '263d98587f9be29f411909cd3287e8de';
        const privateKey = '0a3a8637f82b31da552186601bcae2ae88340ba2';
        const hash = md5(ts + privateKey + publicKey);
        const limit = 100;
        const url = `${base_url}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;

        fetch(url)
            .then(response => response.json())
            .then(results => {
                this.setState({ characters: results.data.results });
            });
    }


    handleChange = (character, bookmarked) => {
        const bookmarkedCharactersString = window.localStorage.getItem("bookmarkedCharacters");
        const bookmarkedCharacters = bookmarkedCharactersString ? JSON.parse(bookmarkedCharactersString) : [];
        
        if (bookmarked) {
            bookmarkedCharacters.push(character);
        } else if ("bookmarkedCharacters" in localStorage) {
            for (let i = 0; i <  bookmarkedCharacters.length; i++) {
                if (bookmarkedCharacters[i].id === character.id) {
                    bookmarkedCharacters.splice(i, 1);
                }
            }
        }

        window.localStorage.setItem("bookmarkedCharacters", JSON.stringify(bookmarkedCharacters));
        this.setState({ bookmarkedCharacters: bookmarkedCharacters });
    };

    updateResults = event => {
        this.setState({ searchValue: event.currentTarget.value });
    };

    render() {
        const {
            characters,
            bookmarkedCharacters,
            searchValue
         } = this.state;

        let component;

        if (searchValue && characters.filter(character => character.name.toLowerCase().includes(searchValue)).length === 0) {
            component = <div className="no-results">No heroes found!</div>;
        } else if (searchValue) {
            component = 
                <Characters
                    characters={characters.filter(character => character.name.toLowerCase().includes(searchValue)).slice(0, 20)}
                    bookmarkedSearch={false}
                    handleChange={this.handleChange}
                />;
        } else if (!searchValue && bookmarkedCharacters.length) {
            component = 
                <Characters
                    characters={bookmarkedCharacters.slice(0, 20)}
                    bookmarkedSearch={true}
                    handleChange={this.handleChange}
                />;
        }

        return (    
            <div>
                <div className="search-wrapper">
                    <input
                        type="search"
                        placeholder="Search for your favorite characters..."
                        onChange={event => this.updateResults(event)}
                    />
                </div>
                {component}
            </div>     
        );
    }
}

export default Home;
