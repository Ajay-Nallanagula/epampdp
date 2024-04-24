// add imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useAddTodoMutation, useGetTodosQuery } from '../../api/todoApiSlice'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const useGetTodosQueryResponse = useGetTodosQuery()
    const { isLoading, isError, isSuccess, data, error } = useGetTodosQueryResponse
    const [addTodo] = useAddTodoMutation()

    const handleSubmit = (e) => {
        console.log({e})
        e.preventDefault();
        addTodo({ id: data?.length + 1, userId: 7, title: 'Some Example' })
        setNewTodo({ id: data?.length + 1, userId: 7, title: 'Some Example' })
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>


    let content;
    if (isLoading) {
        content = <div>Loading....</div>
    }

    if (isError) {
        content = <div>{JSON.stringify(error)}</div>
    }

    if (isSuccess) {
        const subsetData = data.slice(0, 10)
        content = <div>
            <ul>
                {
                    subsetData.map(dataLine => {
                        return <li key={dataLine.id}>{dataLine.title}</li>
                    })
                }
            </ul>
        </div>
    }

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}
export default TodoList