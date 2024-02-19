import React from 'react'

const ThemeContext = React.createContext({theme:'light', setTheme:()=>{}})
const { Provider } = ThemeContext
export { ThemeContext, Provider }