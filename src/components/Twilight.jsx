import { useEffect, useState } from "react";
import Sunrise  from '../assets/sunrise.jpg'

const Twilight = ({data}) => {
    const [sunrise, setSunrise] = useState('')
    const [sunset ,setSunset] = useState('')

    const convertTime = (timestamp) =>{
        const date = new Date((timestamp + 8 *3600) * 1000)

        let hours = date.getUTCHours()
        const minutes = date.getUTCMinutes().toString().padStart(2, "0")
        const ampm = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12
        const time  = `${hours} : ${minutes} ${ampm}`
        return time
    }

    useEffect(()=>{
        if(data){
            setSunrise(convertTime(data.sunrise))
            setSunset(convertTime(data.sunset))
        }
    }, [data])


    return ( 
        <div className="card-weather col-span-3 relative">
            <img src={Sunrise} alt="sunrise" className="absolute inset-0 h-full w-full rounded-lg object-cover"/>
            <div className="absolute inset-0 top-11">
                <div className="text-center mb-9">
                    <p className="font-normal text-lg tracking-wide text-gray-50">Sunrise</p>
                    <p className="text-2xl font-medium">{sunrise}</p>
                </div>
                <div className="text-center">
                    <p className="font-normal text-lg tracking-wide">Sunset</p>
                    <p className="text-2xl font-medium">{sunset}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Twilight;