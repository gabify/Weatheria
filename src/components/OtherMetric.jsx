import { useEffect, useState } from "react";
import MetricListItem from "./MetricListItem";

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
            setWindSpeed(data.windSpeed)
        }
    }, [data])


    return ( 
        <ul className="card bg-teal-100 col-span-3 p-4">
            <MetricListItem 
                title={"Visibility"}
                data={`${visibility}KM`}
            />
            <MetricListItem 
                title={"Humidity"}
                data={`${humidity}%`}
            />
            <MetricListItem 
                title={"Wind Speed"}
                data={`${windSpeed}mph`}
            />
            <MetricListItem 
                title={"Clouds"}
                data={`${clouds}%`}
            />
        </ul>
     );
}
 
export default OtherMetric;