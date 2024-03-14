import { SUPERPOWER_REMOVED } from "../actionTypes"

const removeSuperPowerReducer = (state = [], actions) => {

    switch (actions.type) {
        case SUPERPOWER_REMOVED: {
            const statsCharacter = state.defaultCharacters
                .find(character => character.id === actions?.payload?.id)

            const selectedChars = state.selectedCharacters.filter(character => character.id !== actions.payload.id)
            const newStats = {
                ...state.stats,
                overallStrength: state.stats.overallStrength - statsCharacter.strength,
                overallIntelligence: state.stats.overallIntelligence - statsCharacter.intelligence,
                overallSpeed: state.stats.overallSpeed - statsCharacter.speed
            }
            const newState = Object.assign(
                { ...state },
                { selectedCharacters: [...selectedChars], stats: newStats })
            return newState
        }

        default:
            return state
    }
}

export default removeSuperPowerReducer