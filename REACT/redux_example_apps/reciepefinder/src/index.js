import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ecommStore from './ecommStore/store'

const container = document.getElementById('root')



const root = createRoot(container)

root.render(
    <Provider store={ecommStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)