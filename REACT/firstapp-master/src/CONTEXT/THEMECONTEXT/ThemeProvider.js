import { useState } from "react"
import { Provider } from "./ThemeContext"

const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = useState()

    return <Provider value={{ theme, setTheme }}>
        {children}
    </Provider>
}

export default ThemeProvider