import React, { useState } from "react";

const CreateTodo = ({ todoCount, dispatch ,setOpenCreateTodo}) => {
  const [state, setState] = useState({
    id: todoCount,
    desc: "",
    completionStatus: false,
    user: "",
    canDelete: true,
  });
  return (
    <>
      <div>id:{todoCount}</div>
      <div>
        Description:
        <input
          type="text"
          onChange={(e) => {
            const currentVal = e.target.value;
            setState((prevState) => ({ ...prevState, desc: currentVal }));
          }}
        />
      </div>
      <div>
        User :
        <input
          type="text"
          value={state.user}
          onChange={(e) => {
            const currentVal = e.target.value;
            setState((prevState) => ({ ...prevState, user: currentVal }));
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch({ type: "CREATE", payload: state });
          setOpenCreateTodo(false)
        }}
      >
        Add Todo
      </button>
    </>
  );
};

export default CreateTodo;
