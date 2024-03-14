import { SUPERPOWER_ADDED } from "../actionTypes"

const addSuperPowerReducer = (state = [], actions) => {



    switch (actions.type) {
        case SUPERPOWER_ADDED: {
            const statsCharacter = state.defaultCharacters
                .find(character => character.id === actions?.payload?.id)
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

        default:
            return state
    }
}

export default addSuperPowerReducer