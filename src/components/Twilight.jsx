import Sunrise  from '../assets/sunrise.jpg'

const Twilight = ({data}) => {
    const convertTime = (timestamp, timezone) =>{
        const date = new Date(timestamp * 1000)
        const localDate = new Date(date.getTime() + timezone * 1000)
        let hours = localDate.getUTCHours()
        const minutes = localDate.getUTCMinutes().toString().padStart(2, "0")
        const ampm = hours >= 12 ? "PM" : "AM"
        hours = hours % 12 || 12
        const time  = `${hours} : ${minutes} ${ampm}`
        return time
    }

    return ( 
        <div className="card-weather col-span-3 relative">
            <img src={Sunrise} alt="sunrise" className="absolute inset-0 h-full w-full rounded-lg object-cover"/>
            <div className="absolute inset-0 top-11">
                <div className="text-center mb-9">
                    <p className="font-normal text-lg tracking-wide">Sunrise</p>
                    <p className="text-2xl font-medium">{data && convertTime(data.sunrise, data.timezone_offset)}</p>
                </div>
                <div className="text-center">
                    <p className="font-normal text-lg tracking-wide">Sunset</p>
                    <p className="text-2xl font-medium">{data && convertTime(data.sunset, data.timezone_offset)}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Twilight;