import React,{useReducer} from 'react'
import {TodoList} from './UseReducerHook'
/*
How to lazyload or conditionally make seed-data available for useReducer(reducers,seedData,initSeedData)?
A) initSeedData here accepts a javascript function which can me made use for conditions and lazyloading the seed-data
initSeedData will override initial state, i.e seedData in this case 
*/

const todos = [
    {
      id: 1,
      desc: "Fix the bugs assigned",
      completionStatus: false,
      user: "Ajay",
      canDelete: true,
    },
    {
      id: 2,
      desc: "Clean Sonar Violations",
      completionStatus: false,
      user: "Manohar",
      canDelete: true,
    },
    {
      id: 3,
      desc: "Prepare for React session",
      completionStatus: false,
      user: "Praveen",
      canDelete: true,
    },
    {
      id: 4,
      desc: "Gather requirements for next Sprint",
      completionStatus: false,
      user: "Ajay",
      canDelete: false,
    },
  ];

const initTodos = ()=>todos.filter(({user}) => user === 'Ajay')

const DELETE = "DELETE";
//const CREATE = "CREATE";

const todoReducers = (state,action) => {
const {type,payload} = action
switch(type){
    case DELETE:{
        return state.filter(({id}) => id!==payload.id)
    }
    default:
      return "NO action is defined, this results in ERROR";
}
}

const UseReducerHookLazySeed = ()=>{
const [state,dispatch] = useReducer(todoReducers,todos,initTodos)
console.log({state})
return (
    <>
      <TodoList dispatch={dispatch} todos={state} />
    </>
)
}

export default UseReducerHookLazySeed