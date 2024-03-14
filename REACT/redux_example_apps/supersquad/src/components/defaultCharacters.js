import { useDispatch, useSelector } from "react-redux"
import CharacterPlusButton from "./characterPlusButton"
import { addSuperPower, calculateStats, removeSuperPower } from "../actions"
import CharacterRemoveButton from "./characterRemoveButton"
import SelectedCharacters from "./selectedCharacters"

const DefaultCharacters = () => {
    const characters = useSelector(state => state.defaultCharacters)
    const dispatch = useDispatch()
    const selectedCharacters = useSelector(state => state.selectedCharacters)

    // console.log(characters)

    const handleClick = (character) => {
        //console.log('Add Clicked', character)
        dispatch(addSuperPower({ id: character.id, name: character.name }))
    }

    return (
        <>
            <div>
                <h1>All Characters</h1>
                <ul>
                    {
                        characters.map(character => {
                            return <li key={character.id} style={{ margin: '3px' }}>
                                <CharacterPlusButton label={character.name} onClick={() => handleClick(character)} />
                            </li>
                        })
                    }
                </ul>
            </div>
        </>

    )
}

export default DefaultCharacters