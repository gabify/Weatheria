import { useState } from "react";
import Image from "../assets/wizard.png"
import {useWeatherContext} from '../hooks/useWeatherContext'


const Navbar = () => {
    const [locations, setLocations] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const {dispatch} = useWeatherContext()

    const searchLocation = async(val) =>{
        setSearchQuery(val)
        if(val !== ''){
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=5&appid=${import.meta.env.VITE_API_KEY}`)
            const json = await response.json()
            setLocations(json)
        }
    }

    const handleSelect = async(lat, lon) =>{
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
        const weather = await weatherResponse.json()

        const weeklyWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
        const weeklyWeather = await weeklyWeatherResponse.json()

        if(weatherResponse.ok && weeklyWeatherResponse.ok){
            dispatch({type: 'SET_WEATHER', payload: {weather, weeklyWeather}})
        }
        setLocations(null)
        setSearchQuery('')
        
    }
    
    return (
        <div className="container mb-7"> 
            <div className="lg:flex lg:flex-wrap justify-between items-baseline px-3">
                <div className="flex gap-2 items-baseline justify-center">
                    <h1 className="text-2xl text-gray-700 font-bold mb-3 lg:mb-0 lg:text-start">Weatheria</h1>
                    <img src={Image} alt="wizard" className="w-9" />
                </div>
                <div className="flex flex-col relative">
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Search for city or country"
                            className="grow border border-3 border-gray-200 rounded-lg px-4 py-2 text-gray-800 w-5/6"
                            onChange={(e) => searchLocation(e.target.value)}
                            value={(searchQuery)}
                        />
                    </div>
                    <div className="bg-gray-50 rounded-b-2xl absolute top-11 w-full">
                        {locations && locations.map((location) =>
                            <div 
                                key={location.lat + location.lon}
                                className="mb-2 text-sm p-2 tracking-wide hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(location.lat, location.lon)}
                            >
                                {location.name}, {location.country}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;