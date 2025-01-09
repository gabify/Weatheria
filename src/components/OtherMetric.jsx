import { useEffect, useState } from "react";
import MetricListItem from "./MetricListItem";
import { FaDroplet, FaEye, FaWind, FaCloud } from "react-icons/fa6";

const OtherMetric = ({data}) => {
    const [visibility, setVisbility] = useState('')
    const [humidity, setHumidity] = useState('')
    const [clouds, setClouds] = useState('')
    const [windSpeed, setWindSpeed] = useState('')

    useEffect(() =>{
        if(data){
            setVisbility(data.visibility / 100)
            setHumidity(data.humidity)
            setClouds(data.clouds)
            setWindSpeed(data.windSpeed.toFixed(0))
        }
    }, [data])


    return ( 
        <ul className="card-weather bg-teal-100 col-span-3 p-4">
            <MetricListItem 
                title={"Visibility"}
                data={`${visibility}KM`}
                icon={<FaEye />}
            />
            <MetricListItem 
                title={"Humidity"}
                data={`${humidity}%`}
                icon={<FaDroplet />}
            />
            <MetricListItem 
                title={"Wind Speed"}
                data={`${windSpeed}mph`}
                icon={<FaWind />}
            />
            <MetricListItem 
                title={"Clouds"}
                data={`${clouds}%`}
                icon={<FaCloud />}
            />
        </ul>
     );
}
 
export default OtherMetric;