import React from "react";
import ReactDOM from "react-dom/client";
//import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log('DEFAULT_CHARACTERS', store.getState())

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

//reportWebVitals();