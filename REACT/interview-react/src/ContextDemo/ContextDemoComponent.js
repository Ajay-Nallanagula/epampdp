import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const ContextDemoComponent = () => {
    const context = useContext(ThemeContext)
    console.log({ context })

    const handleToggleTheme = () => {
        context.toggleTheme()
    }
    return (
        <div>

            <button onClick={handleToggleTheme}>Toggle Theme </button>
        </div >
    )
}

export default ContextDemoComponent