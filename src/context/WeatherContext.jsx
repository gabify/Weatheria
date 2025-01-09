import { createContext, useReducer } from "react";

export const WeatherContext = createContext();

export const weatherReducer = (state, action) =>{
    switch(action.type){
        case 'SET_WEATHER' :
            return{
                data: action.payload
            }

        default:
            return state
    }
}


export const WeatherContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(weatherReducer, {
        data: null
    })


    return(
        <WeatherContext.Provider value={{...state, dispatch}}>
            {children}
        </WeatherContext.Provider>
    )
}