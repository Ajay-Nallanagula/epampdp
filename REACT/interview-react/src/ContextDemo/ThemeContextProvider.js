import ThemeContext from "./ThemeContext";

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState({})

    const toggleTheme = () => {
        setTheme(prevState =>prevState === 'blue' ? 'green' : 'blue')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider