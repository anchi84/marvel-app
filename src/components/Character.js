import React from "react";

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarked: props.bookmarkedSearch
        };
    }

    updateBookmarkedCharacters = (event, character) => {
        this.setState({ bookmarked: !this.state.bookmarked });
        setTimeout(() => {
            this.props.handleChange(character, this.state.bookmarked);
        }, 0);
    };

    render() {
        const { character } = this.props;
        let star;

        if (this.state.bookmarked) {
            star = <span className="star">&#9733;</span>
        } else {
            star = <span className="star">&#9734;</span>
        }

        return (
            <div
                key={character.id}
                className="character"
            >
                <p className="name">{character.name}</p>
                <div className="img-wrapper">
                    <img
                        src={character.thumbnail.path + '.' + character.thumbnail.extension }
                        alt={character.name}
                    />
                </div>
                <div onClick={event => this.updateBookmarkedCharacters(event, character)}>
                    {star}
                </div>
            </div>
        );
    }
}

export default Character;
