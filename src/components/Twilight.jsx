import { useEffect, useState } from "react";

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
        <div className="card bg-cyan-200 col-span-3 p-10">
            <div className="text-center mb-8">
                <p className="font-normal text-lg tracking-wide">Sunrise</p>
                <p className="text-2xl font-medium">{sunrise}</p>
            </div>
            <div className="text-center">
                <p className="font-normal text-lg tracking-wide">Sunset</p>
                <p className="text-2xl font-medium">{sunset}</p>
            </div>
        </div>
     );
}
 
export default Twilight;