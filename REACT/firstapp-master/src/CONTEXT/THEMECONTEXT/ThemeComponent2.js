import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeComponent2 = () => {
    const { setTheme } = useContext(ThemeContext)
    return <div>
        <div>
            <button name='light' onClick={() => setTheme('light')}>Light</button>
        </div>
        <div>
            <button name='dark' onClick={() => setTheme('dark')}> Dark</button>
        </div>
    </div >
}

export default ThemeComponent2