import React, { useReducer } from "react";

const context = React.createContext({});
const { Provider } = context;
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

const DELETE = "DELETE";
const CREATE = "CREATE";
//const UPDATE = "UPDATE";
// const READ = "READ";

const todoReducers = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE: {
      return state.filter((item) => item.id !== payload.id);
    }
    case CREATE: {
      return [...state, payload];
    }
    default:
      return "NO ACTION TYPE DETECTED";
  }
};

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducers, todos);
  return <Provider value={{ state, dispatch }}>{props.children}</Provider>;
};

export {TodoProvider,Provider,context as TodoContext}
