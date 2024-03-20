//Design the store
/**
  {
    characters:[
        {
            id:1,
            characterName:'xxx',
            superPower:'xxx'
            strength: 10,
            intelligence:10,
            speed:10
        }
    ],

    selectedCharacters: [<list of ids>],
    stats: {
        overallStrength:0,
        overallspeed:0,
        overallIntelligence:0
    }
  }

 */
//Define the actions
/*
--> addCharacter
--> removeCharacter

*/
//Create the reducer 
/*
reducer(state=[],action){
    addCharacter
    removeCharacter
}
*/

import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import charactersArr from './characters.json'


//setup the store 
/*
   configureStore automatically sets up the Redux DevTools Extension for you, 
    automatically turns on the thunk middleware, and also makes it very easy to add additional store enhancers if desired.
*/
const store = configureStore({ 
    reducer: rootReducer,  
    //middleware: (getDefaultMiddleware) => ([...getDefaultMiddleware()])
})
console.log(store.getState())
export default store 