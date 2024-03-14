import { Component } from "react";
import CharacterPlusButton from "./characterPlusButton";
import { connect } from "react-redux";
import { addSuperPower } from "../actions";

class DefaultCharactersClass extends Component {
    constructor(props) {
        super(props)
    }

    handleClick(character) {
        this.props.addSuperPower(character)
    }

    render() {
        const { characters } = this.props
        return (
            <div>
                <h1>All Characters</h1>
                <ul>
                    {
                        characters.map(character => {
                            return <li key={character.id} style={{ margin: '3px' }}>
                                <CharacterPlusButton label={character.name} onClick={() => this.handleClick(character)} />
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { characters: state.defaultCharacters }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSuperPower: (character) => dispatch(addSuperPower(character.id, character.name))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DefaultCharactersClass)