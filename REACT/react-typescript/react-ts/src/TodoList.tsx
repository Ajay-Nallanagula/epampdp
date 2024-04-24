import React  from "react"
import { TodoListProps } from "./schema/Todos.schema"


const TodoList: React.FC<TodoListProps> = (props):React.JSX.Element =>{

    if(!props.todos){
        return <div>No Todos added </div>
    }
    
    return (<>
    <ul>
        {
            props.todos.map(todo => <li key ={todo.id}>{todo.name}</li>)
        }
    </ul>
    </>)
}

export default TodoList