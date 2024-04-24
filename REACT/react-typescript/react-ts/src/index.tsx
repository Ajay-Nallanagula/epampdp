import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootDiv: HTMLElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootDiv)

root.render(
    <App/>
)
