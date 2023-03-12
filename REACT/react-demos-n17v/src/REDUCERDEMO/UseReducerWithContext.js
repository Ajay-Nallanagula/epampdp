import React, { useState, useContext } from "react";
import { TodoProvider, TodoContext } from "./TodoContext";
import CreateTodo from "./CreateTodo";

const UseReducerWithContext = () => {
  return (
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  );
};

const TodoPage = () => {
  const context = useContext(TodoContext);
  const {state,dispatch} = context
  const [openCreateTodo, setOpenCreateTodo] = useState(false);
  if (openCreateTodo) {
    return (
      <CreateTodo
        todoCount={state.length + 1}
        dispatch={dispatch}
        setOpenCreateTodo={setOpenCreateTodo}
      />
    );
  }

  return (
    <>
      <div>
        <button onClick={() => setOpenCreateTodo(true)}>Create Todo</button>
      </div>
      {<TodoList todos={state} />}
    </>
  );
};

const TodoList = ({ todos }) => {
  return (
    <>
      <h1 style={{ color: "burlywood" }}>Todo List</h1>
      <div>
        {todos.map((todo) => (
          <div style={{ padding: "5px" }}>
            <TodoItem key={todo.id} todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
};

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const styleObj = {
    width: "30%",
    height: "70px",
    backgroundColor: "bisque",
    margin: "auto",
    padding: "20px",
    borderRadius: "25px",
  };

  const { canDelete } = todo;

  const onDeleteHandler = () => {
    dispatch({ type: "DELETE", payload: todo });
  };

  return (
    <div style={styleObj}>
      <div>
        <p>
          {`${todo.id}. ${todo.desc}: `} <span>{todo.user}</span>
        </p>
      </div>
      <div>
        <button disabled={!canDelete} onClick={onDeleteHandler}>
          Delete Action!!
        </button>
      </div>
    </div>
  );
};

export default UseReducerWithContext;
