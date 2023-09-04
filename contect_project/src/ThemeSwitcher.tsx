import { useContext } from "react"
import { themeContext } from "./App"


function ThemeSwitcher() {

    const context = useContext(themeContext)!
    const {setTheme} = context
    const {theme} = context

    function changeTheme() {
        theme === 'light'? setTheme('dark') : setTheme('light')
    }
  return (
        <button onClick={changeTheme}>switch theme</button>
    )
}

export default ThemeSwitcher