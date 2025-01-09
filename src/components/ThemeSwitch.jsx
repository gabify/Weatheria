import { useEffect } from "react";
import { useThemeContext } from "../hooks/useThemeContext";

const ThemeSwitch = () => {
    const {theme, dispatch} = useThemeContext()

    const handleToggle = () =>{
        if(theme.isLight){
            dispatch({type: 'SET_DARK'})
        }else{
            dispatch({type: 'SET_LIGHT'})
        }
    }
    
    return ( 
        <label className="inline-flex items-center cursor-pointer">
            <input 
                type="checkbox" 
                value="" 
                className="sr-only peer"
                onChange={handleToggle}
            />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>

     );
}
 
export default ThemeSwitch;