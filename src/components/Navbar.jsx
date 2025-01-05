import { useState } from "react";

const Navbar = ({setCoordinate, changeLocation}) => {
    const [location, setLocation] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        setError(null)

        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${import.meta.env.VITE_API_KEY}`)

        const json = await response.json()

        if(!response.ok){
            setError(json.message)
        }

        if(response.ok){
            changeLocation({
                country: json[0].country,
                name: json[0].name
            })
            setCoordinate({
                lat: json[0].lat,
                lon: json[0].lon
            })
        }

    }
    
    return (
        <div className="container mb-7"> 
            <div className="lg:flex lg:flex-wrap justify-between items-baseline px-3">
                <h1 className="text-2xl text-gray-700 font-bold mb-3 lg:mb-0 text-center lg:text-start">Weatheria</h1>
                <div className="items-end">
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <input 
                                type="text" 
                                placeholder="Find for your location..."
                                className="grow border border-3 border-gray-200 rounded-s-2xl px-4 text-gray-800"
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <input 
                                type="submit" 
                                value="Search" 
                                className="bg-gray-200 py-2 px-7 rounded-e-2xl text-gray-800"
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div>{error && error}</div>
        </div>
     );
}
 
export default Navbar;