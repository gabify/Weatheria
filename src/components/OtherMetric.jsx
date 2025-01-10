import MetricListItem from "./MetricListItem";
import { FaDroplet, FaEye, FaWind, FaCloud } from "react-icons/fa6";

const OtherMetric = ({data}) => {
   
    return ( 
        <ul className="card-weather bg-teal-100 col-span-3 p-4">
            <MetricListItem 
                title={"Visibility"}
                data={`${data && (data.visibility/100)}KM`}
                icon={<FaEye />}
            />
            <MetricListItem 
                title={"Humidity"}
                data={`${data && data.humidity}%`}
                icon={<FaDroplet />}
            />
            <MetricListItem 
                title={"Wind Speed"}
                data={`${data && data.windSpeed.toFixed(0)}mph`}
                icon={<FaWind />}
            />
            <MetricListItem 
                title={"Clouds"}
                data={`${data && data.clouds}%`}
                icon={<FaCloud />}
            />
        </ul>
     );
}
 
export default OtherMetric;