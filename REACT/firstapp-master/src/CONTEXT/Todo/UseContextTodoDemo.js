import React, { useState , useContext} from "react";

const TodoHookContext = React.createContext({});
const { Provider } = TodoHookContext;

export const TodoHookProvider = () => {
  const [state, setState] = useState({
    todos: [
      { id: 1, desc: "Fix the bugs assigned", completionStatus: false },
      { id: 2, desc: "Clean Sonar Violations", completionStatus: false },
    ],
    user: { name: "Ajay Nallanagula", canDelete: true },
  });
  const handleDelete = (todo) => {
    const { todos } = state;
    const updatedTodos = todos.filter(({ id }) => id != todo.id);
    setState((prevState) => ({ ...prevState, todos: updatedTodos }));
  };

  const { user, todos } = state;
  return (
    <Provider
      value={{
        onDelete: handleDelete,
        canDelete: user.canDelete,
        todos: todos,
      }}
    >
      <TodoHookList todos={todos} />
    </Provider>
  );
};

const TodoHookList = ({ todos }) => {
  return (
    <>
      <h1 style={{ color: "burlywood" }}>Todo List</h1>
      <div>
        {todos.map((todo) => (
          <div style={{ padding: "5px" }}>
            <TodoHookItem todo={todo} key={todo.id} />
          </div>
        ))}
      </div>
    </>
  );
};

const TodoHookItem = ({ todo }) => {
  const { onDelete, canDelete } = useContext(TodoHookContext);
  const styleObj = {
    width: "30%",
    height: "70px",
    backgroundColor: "bisque",
    margin: "auto",
    padding: "20px",
    borderRadius: "25px",
  };
  return (
    <div style={styleObj}>
      <div>
        <p>{`${todo.id}. ${todo.desc}`}</p>
      </div>
      <div>
        <button disabled={!canDelete} onClick={() => onDelete(todo)}>
          Take Action!!
        </button>
      </div>
    </div>
  );
};
