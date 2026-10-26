import {useEffect, useState, createContext} from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [ theme , setTheme ] = useState(
        localStorage.getItem("light") || "light"
    )
    const toggleTheme = () => {
        const toggler = theme === "light" ? "dark" : "light"
        localStorage.setItem("light", toggler)
        setTheme(toggler)
    }

    useEffect(() => {
        document.documentElement.classList = theme
    }, [theme]);

    return (
        <ThemeContext value={{ theme , toggleTheme }}>
            {children}
        </ThemeContext>
    )
}

export default ThemeContext