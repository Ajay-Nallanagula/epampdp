//Documentation: https://redux-toolkit.js.org/rtk-query/overview

//We have @reduxjs/toolkit/query is generic for RTK
// @reduxjs/toolkit/query/react specific for 'react',
//if we are not using this we might see TS types error while exposing hooks
// export {useGetTodosQuery} = todosApi , TS will not find the type
//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

//Documentation : https://redux-toolkit.js.org/rtk-query/api/created-api/hooks

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

//Step 1
const todosApi = createApi({
  reducerPath: "api/todos", //This is used when you have redux-<Provider> optional when you use RTK-<ApiProvider>
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      //NOTE: Also check on RTK Query , queryFn, usecase: download
      //Docs queryFn: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#examples---queryfn
      query: () => {
        //throw Error("Something went Wrong");
        return "/todos";
      },
    }),

    addTodo: builder.mutation<Todo[], Todo>({
      query: (todo) => {
        return {
          url: "/todos",
          method: "POST",
          body: { todo },
        };
      },
    }),

    updateTodo: builder.mutation<Todo[], Todo>({
      //NOTE: Also check on RTK Query , queryFn, usecase: download
      //Docs queryFn: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#examples---queryfn
      query: (todo) => {
        return {
          url: `/todos/${todo.id}`,
          method: "PATCH",
          body: { todo },
        };
      },
    }),

    removeTodo: builder.mutation<Todo[], Todo>({
      //NOTE: Also check on RTK Query , queryFn, usecase: download
      //Docs queryFn: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#examples---queryfn
      query: ({ id }) => {
        return {
          url: `/todos/${id}`,
          method: "delete",
        };
      },
    }),
  }),
});

//Step 2
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useRemoveTodoMutation,
} = todosApi;

export default todosApi;

//Step 3: See PTO to index.tsx

//NOTE: Also check on RTK Query , queryFn, usecase: download
//Docs queryFn: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#examples---queryfn