import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosSaga, postTodos } from './store/todoreducer';

function App() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  //dispatch({ type: getTodosSaga.type })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const todoAction = e.target['todoText'].value
    dispatch(postTodos({ id: todos.length + 1, todoAction }))

  }

  const handleSagaButtonClick = (e) => {
    e.preventDefault()
    dispatch(getTodosSaga())
  }

  return (
    <div>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor='todoText'>Create your Todo</label>
        <input type="text" name="todoText" />
        <button>Submit</button>
        <div>
          <button onClick={(e) => handleSagaButtonClick(e)}>Get_data_from_Saga</button>
        </div>
        <ul>
          {
            todos.map(todo => {
              return <li key={todo.id}><h2>{todo.todoAction}</h2></li>
            })
          }
        </ul>
      </form>
    </div>
  );
}

export default App;
