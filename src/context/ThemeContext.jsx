import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

export const themeReducer = (state, action) =>{
    switch(action.type){
        case 'SET_LIGHT':
            return {
                theme: {isLight: true}
            }
        case 'SET_DARK':
            return {
                theme: {isLight: false}
            }
        default:
            return state
    }
}


export const ThemeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, {
        theme: {
            isLight: true,
        }
    })

    return (
        <ThemeContext.Provider value={{...state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;