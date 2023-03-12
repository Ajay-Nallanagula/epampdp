import React from "react";
//STEP 1
const TodoContext = React.createContext({});
const { Provider, Consumer } = TodoContext;

export class ToDoProvider extends React.Component {
  state = {
    todos: [
      { id: 1, desc: "Fix the bugs assigned", completionStatus: false },
      { id: 2, desc: "Clean Sonar Violations", completionStatus: false },
    ],
    user: { name: "Ajay Nallanagula", canDelete: true },
  };

  handleDelete = (todo) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter(({ id }) => id != todo.id);
    this.setState((prevState) => ({ ...prevState, todos: updatedTodos }));
  };

  render() {
    const { todos, user } = this.state;
    return (
      <Provider
        value={{
          onDelete: this.handleDelete,
          canDelete: user.canDelete,
          todos: todos,
        }}
      >
        {/* {<TodoList todos={todos} /> } */}
        {
        //Alternate Style implementation
        this.props.children
        }
      </Provider>
    );
  }
}

export class TodoList extends React.Component {
  static contextType= TodoContext

  componentDidMount(){
    console.log({context:this.context})
  }

  render() {
    const { todos } = this.props;
    return (
      <>
        <h1 style={{ color: "burlywood" }}>Todo List</h1>
        <div>
          {todos.map((todo) => (
            <div style={{ padding: "5px" }}>
              <TodoItem todo={todo} key={todo.id} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

//Alternate Style implementation
export class TodoListAsKid extends React.Component {
  render() {
    //const { todos } = this.props;
    return (
      <Consumer>
        {({todos}) => {
          return (
            <>
              <h1 style={{ color: "burlywood" }}>Todo List</h1>
              <div>
                {todos.map((todo) => (
                  <div style={{ padding: "5px" }}>
                    <TodoItem todo={todo} key={todo.id} />
                  </div>
                ))}
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    const styleObj = {
      width: "30%",
      height: "70px",
      backgroundColor: "bisque",
      margin: "auto",
      padding: "20px",
      borderRadius: "25px",
    };
    return (
      <Consumer>
        {({ canDelete, onDelete }) => {
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
        }}
      </Consumer>
    );
  }
}
