import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: [{ id: 10, todoAction: "Prepare for Interview!" }]
    },
    reducers: {
        getTodos: (state, action) => {
            return state.todos
        },
        postTodos: (state, action) => {
            const todo = action.payload
            state.todos.push(todo)
            return state
        },
        getTodosSaga: (state, action) => {
            // const todosList = action.payload
            //state.todos = [...state.todos, ...todosList]
           // state.todos = [...action.payload || []]
            return state
        },

        getTodosSagaSuccess: (state, action) => {
            // const todosList = action.payload
            //state.todos = [...state.todos, ...todosList]
            state.todos = [...action.payload || []]
            return state
        }
    }
})

const { actions } = todoSlice

export const { getTodos, postTodos, getTodosSaga, getTodosSagaSuccess } = actions

export default todoSlice.reducer