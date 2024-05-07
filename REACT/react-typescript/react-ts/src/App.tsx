import React, { useState} from 'react'
import TodoList from './TodoList'
import { TodoItem } from './schema/Todos.schema'
import AddTodo from './AddTodo'
import ApiCallExample from './ApiCallExample'

const App: React.FC = (): React.JSX.Element => {
const [todos,setTodos] = useState<TodoItem[]>([{name:'Ajay',id:100}])
const addTodo = (value:string) =>{
    setTodos((todos) => [...todos, {name:value,id:101}])
}

return (
<>
      {/* <TodoList todos = {todos}/>
      <AddTodo addTodoItem={addTodo}/> */}
      <ApiCallExample/>
    </>
)
}

export default App