import React from "react";
import Character from "./Character";

class Characters extends React.Component {
    render() {
        return (
            <div className="characters">
                {
                    this.props.characters.map(character => (
                        <Character
                            character={character}
                            bookmarkedSearch={this.props.bookmarkedSearch}
                            key={character.id}
                            handleChange={this.props.handleChange}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Characters;
