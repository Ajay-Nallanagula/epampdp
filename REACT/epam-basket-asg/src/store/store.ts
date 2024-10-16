import { configureStore } from "@reduxjs/toolkit";
import reducer from "./productReducer";

const store = configureStore({
  reducer,
});

export default store;
