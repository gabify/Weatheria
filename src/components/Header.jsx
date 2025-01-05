import { useEffect, useState } from "react"

const Header = ({location}) => {
    const [today, setToday] = useState(new Date())

    useEffect(() =>{
        const interval = setInterval(() =>{
            setToday(new Date())
        }, 1000)

        return () =>clearInterval(interval)
    }, [])

    const getToday = () =>{
        //Get the day of the week
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dayToday = days[today.getDay()]

        //Get the date
        const dateToday = today.getDate()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthToday = months[today.getMonth()];
        const yearToday = today.getFullYear()

        // Get the time 
        let hours = today.getHours();
        const minutes = today.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12;

        return `${dayToday}, ${monthToday} ${dateToday} ${yearToday} at ${hours}:${minutes} ${ampm}`
    }


    return ( 
        <div>
            <h2 className="text-xl text-gray-800 tracking-wide">Forecast in <span className="font-semibold">{location.name}, {location.country}</span></h2>
            <p className="text-md mt-1 font-thin mb-9">{getToday()}</p>
        </div>
     );
}
 
export default Header;
