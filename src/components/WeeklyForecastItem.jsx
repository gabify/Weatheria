const WeeklyForecastItem = ({data}) => {
    const toFarenheight = (val) =>{
        const result = ((parseFloat(val) - 273.15) * 1.8 + 32).toFixed(0)
        return result
    }
    
    const toDay = (val) =>{
        const date = new Date(val)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dayName = days[date.getDay() + 1]
        return dayName
    }

    const getDate = (val) =>{
        const date = new Date((val + 8 *3600) * 1000)
        const day = date.getDate()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName = months[date.getMonth()];
        const year = date.getFullYear()

        return `${monthName} ${day}, ${year}`
    }
    
    return ( 
        <div className="card bg-gray-50 py-2 px-3 mb-4 hover:shadow-md hover:px-6 hover:bg-gray-50">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-semibold tracking-wide">{toDay(data.dt_txt)}</p>
                    <p className="text-xs font-thin">{getDate(data.dt)}</p>
                </div>
                <div>
                    <img 
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt="weatherIcon" 
                        className="w-10"
                    />
                </div>

                <div className="text-end">
                    <p className=" font-semibold">{toFarenheight(data.main.temp)}&deg;F</p>
                    <p className="text-xs font-thin">{(data.weather[0].description)}</p>
                </div>
            </div>
        </div>
     );
}
 
export default WeeklyForecastItem;