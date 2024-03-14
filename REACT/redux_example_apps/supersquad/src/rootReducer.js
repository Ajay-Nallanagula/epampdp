import { combineReducers } from "redux";
import { SUPERPOWER_ADDED, SUPERPOWER_REMOVED, SUPERPOWER_STATS } from "./actionTypes";
import addSuperPowerReducer from "./reducers_DUMMY/addSuperPowerReducer";
import removeSuperPowerReducer from "./reducers_DUMMY/removeSuperPowerReducer";
import charactersArr from './characters.json'

const preloadedState = {
    defaultCharacters: charactersArr,
    selectedCharacters: [],
    stats: {
        overallStrength: 0,
        overallSpeed: 0,
        overallIntelligence: 0
    }
}



function reducer(state = preloadedState, actions) {
    const statsCharacter = state.defaultCharacters
        .find(character => character.id === actions?.payload?.id)

    switch (actions.type) {
        case SUPERPOWER_ADDED: {
            const selectedChars = [...state.selectedCharacters]
            const newStats = {
                ...state.stats,
                overallStrength: state.stats.overallStrength + statsCharacter.strength,
                overallIntelligence: state.stats.overallIntelligence + statsCharacter.intelligence,
                overallSpeed: state.stats.overallSpeed + statsCharacter.speed
            }
            const newState = Object.assign(
                { ...state },
                {
                    selectedCharacters: [...selectedChars, { ...actions.payload }],
                    stats: newStats
                },
            )

            console.log({ newState })
            return { ...newState }
        }
        case SUPERPOWER_REMOVED: {
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
            // console.log({ newState })
            return newState
        }
        default:
            return state
    }
}

export default reducer

/*
const rootReducer = combineReducers({ addSuperPowerReducer, removeSuperPowerReducer })
export default rootReducer
*/