import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeComponent1 = () => {
    const { theme } = useContext(ThemeContext)
    return <div>
        <h1>Current Theme : {theme}</h1>
    </div>
}

export default ThemeComponent1