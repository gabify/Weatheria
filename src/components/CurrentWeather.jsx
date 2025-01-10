const CurrentWeather = ({data}) => {

    const toFarenheight = (val) =>{
        const result = (parseFloat(val) - 273.15) * 1.8 + 32
        return result
    }

    const getDescription = (desc) =>{
        if(data.description !== ''){
            const description = desc
                .split(" ")
                .map(word => word[0].toUpperCase() + word.substring(1))
                .join(" ")

            return description
        }
    }

    return ( 
        <div className="card-weather bg-cyan-200 col-span-3 lg:col-span-4 p-4">
            <div className="flex justify-between items-center mb-8 sm:mb-20">
                <div className="flex gap-1 text-gray-900">
                    <h3 className="text-4xl font-semibold">{data && toFarenheight(data.temp).toFixed(0)}&deg;F</h3>
                    <span className="font-thin">/c</span>
                </div>
                <div>
                <div className="flex gap-1 items-baseline">
                    <p className="text-xs font-light">HIGH</p>
                    <h3 className="text-xl font-semibold">{data && toFarenheight(data.highTemp).toFixed(0)}&deg;F</h3>
                </div>
                <div className="flex gap-1 items-baseline">
                    <p className="text-xs font-light">LOW</p>
                    <h3 className="text-xl font-semibold">{data && toFarenheight(data.lowTemp).toFixed(0)}&deg;F</h3>
                </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center">
                <div className="order-last sm:order-first">
                    <p className="font-semibold tracking-wider text-md mb-0">{data && getDescription(data.description)}</p>
                    <p className="font-thin tracking-wide text-sm mb-1">Feels like {data && toFarenheight(data.feelsLike).toFixed(0)}&deg;F</p>
                </div>
                
                <div>
                    <img 
                        src={`https://openweathermap.org/img/wn/${data && data.icon}@2x.png`} 
                        alt="weatherIcon"
                        className="order-first sm:order-last" 
                    />
                </div>
            </div>
        </div>
     );
}
 
export default CurrentWeather;