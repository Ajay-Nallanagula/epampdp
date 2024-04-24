import React,{useRef} from 'react'
import { AddTodoProps } from './schema/Todos.schema'

const AddTodo: React.FC<AddTodoProps> = (props): React.JSX.Element => {
const textRef = useRef<HTMLInputElement>(null)



const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    const txtValue = textRef.current!.value
    props.addTodoItem(txtValue)
    textRef.current!.value = ''
}

    return(
        <form onSubmit={handleSubmit}>
            <div><label>Enter Todo</label></div>
            <div><input type='text' ref={textRef}></input></div>
            <div><button type="submit">Add Todo</button></div>
        </form>
    )
}

export default AddTodo