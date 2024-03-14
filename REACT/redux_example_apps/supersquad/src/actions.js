import { createAction } from "@reduxjs/toolkit"
import { SUPERPOWER_ADDED, SUPERPOWER_REMOVED, SUPERPOWER_STATS } from "./actionTypes"

export const addSuperPower = createAction(SUPERPOWER_ADDED, (payload) => payload)
console.log(addSuperPower)

// export const addSuperPower = (id, name) => {
//     return {
//         type: SUPERPOWER_ADDED,
//         payload: {
//             id,
//             name
//         }
//     }
// }

export const removeSuperPower = (id) => {
    return {
        type: SUPERPOWER_REMOVED,
        payload: {
            id
        }
    }
}

export const calculateStats = (id) => {
    return {
        type: SUPERPOWER_STATS,
        payload: {
            id
        }
    }
}