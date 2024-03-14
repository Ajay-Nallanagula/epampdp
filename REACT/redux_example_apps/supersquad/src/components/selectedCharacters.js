import { useDispatch, useSelector } from "react-redux"
import CharacterRemoveButton from "./characterRemoveButton"
import { removeSuperPower } from "../actions"
import store from "../store"

const SelectedCharacters = () => {
    const selectedChracters = useSelector(state => state.selectedCharacters)//selectedCharacters
    const dispatch = useDispatch()

    const handleClick = (character) => {
        dispatch(removeSuperPower(character.id))
    }

    return <div>
        <h1>Selected Characters</h1>
        <ul>
            {selectedChracters?.length ? selectedChracters.map(character => {
                return <li key={character.id} style={{ margin: '3px' }}>
                    <CharacterRemoveButton label={character.name} onClick={() => handleClick(character)} />
                </li>
            }) : <div> No Super Powers Selected</div>}
        </ul>
    </div>
}

export default SelectedCharacters