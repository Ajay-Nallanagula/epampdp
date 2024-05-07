import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import todosApi from "./api/todoApiSlice";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

/*

What is the disadvantage of RTK <ApiProvider> vs Redux <Provider>?
Ref: https://github.com/reduxjs/redux-toolkit/issues/1410 
Ans: If you have two or more API's we will have to do the following with <ApiProvider>
// This is what I want to have
<ApiProvider stores={[api1, api2]}>...</ApiProvider>

// I guess this is possible, but ugly, and also I have many Apis..
<ApiProvider store={api1}>
  <ApiProvider store={api2}>{...}</ApiProvider>
</ApiProvider>

When you already have a Provider/Store in place:
https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#configuring-the-store 
https://stackoverflow.com/questions/68995149/how-to-put-rtk-query-into-store-slice 
Example 
export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    [todosApi.reducerPath]: todosApi.reducer
  },

Step 3: 
https://redux-toolkit.js.org/rtk-query/overview 
https://redux-toolkit.js.org/rtk-query/api/ApiProvider
NOTE: Using this together with an existing Redux store will cause them to conflict with each other. If you are already using Redux, please follow the instructions as shown in the

If you are already using Redux Provider, we can directly supply api to the store.

*/


root.render(
<ApiProvider api={todosApi}>
   <App />
</ApiProvider>
)

reportWebVitals()
