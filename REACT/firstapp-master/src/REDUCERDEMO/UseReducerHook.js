import React, { useReducer ,useState} from "react";
import CreateTodo from './CreateTodo'

//syntax :
//const [state, dispatch] = useReducer(reducer, initialArg, init);

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
    user: "Simon",
    canDelete: false,
  },
];

//What is the reducer
/* Reducers are functions that take the current state and an action as arguments, 
and return a new state result. In other words, (state, action) => newState.*/

//What is an action ?
/* In general sense action you can think of an action as an 
    event( ex: CRUD) that describes something that happened in the application with your state. 
    action are javascript objects with {type:'blabla',payload:'blabla'} properties
    */

//what is initialState ?
/* seed data for your application to launch and start working with*/

//What is dispatch?
/*dispatch is an alias for action i.e inside reducer function  */

const DELETE = "DELETE";
const CREATE = "CREATE";
//const UPDATE = "UPDATE";
// const READ = "READ";

const todoReducer = (state, action) => {
  console.log({ state }, { action });
  const { type, payload } = action;

  switch (type) {
    case DELETE: {
      return state.filter((todo) => todo.id !== payload.id);
    }
    case CREATE: {
        return [...state,payload]
    }
    default:
      return "NO action is defined, this results in ERROR";
  }
};

//Q1 . Why should we use useReducer over useState ?
const UseReducerHook = () => {
  //todos array here is seed-data
  const [state, dispatch] = useReducer(todoReducer, todos);
  //boolean value , its a primitive
  const [openCreateTodo,setOpenCreateTodo] = useState(false)

 if(openCreateTodo){
    return <CreateTodo todoCount={state.length+1} dispatch = {dispatch} setOpenCreateTodo={setOpenCreateTodo}/>
 }

  return (
    <>
     <div><button onClick = {()=>setOpenCreateTodo(true)}>Create Todo</button></div>
      {<TodoList dispatch={dispatch} todos={state} />}
    </>
  );
};

export const TodoList = ({ todos, dispatch }) => {
  return (
    <>
      <h1 style={{ color: "burlywood" }}>Todo List</h1>
      <div>
        {todos.map((todo) => (
          <div style={{ padding: "5px" }}>
            <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
          </div>
        ))}
      </div>
    </>
  );
};

const TodoItem = ({ dispatch, todo }) => {
  const styleObj = {
    width: "30%",
    height: "70px",
    backgroundColor: "bisque",
    margin: "auto",
    padding: "20px",
    borderRadius: "25px",
  };
  const { canDelete } = todo;
  const onDeleteHandler = ()=>{
    //Pass an action object to dispatch, dispatch is an alias for action
    dispatch({type:'DELETE',payload:todo})
  }

  return (
    <div style={styleObj}>
      <div>
        <p>{`${todo.id}. ${todo.desc}: `} <span>{todo.user}</span></p>
        
      </div>
      <div>
        <button disabled={!canDelete} onClick={onDeleteHandler}>
          Delete Action!!
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
