import { useEffect, useState } from "react";

const CurrentWeather = ({data}) => {
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('01d')
    const [temperature, setTemperature] = useState({
        temp: '',
        lowTemp: '',
        highTemp: '',
        feelsLike: '',
      })

    const toFarenheight = (val) =>{
        const result = (parseFloat(val) - 273.15) * 1.8 + 32
        return result
    }

    useEffect(() =>{
        if(data){
            const temp = toFarenheight(data.temp).toFixed(0)
            const lowTemp = toFarenheight(data.lowTemp).toFixed(0)
            const highTemp = toFarenheight(data.highTemp).toFixed(0)
            const feelsLike = toFarenheight(data.feelsLike).toFixed(0)
            setTemperature({temp, lowTemp, highTemp, feelsLike})
            setIcon(data.icon)

            if(data.description !== ''){
                const description = data.description
                    .split(" ")
                    .map(word => word[0].toUpperCase() + word.substring(1))
                    .join(" ")

                setDescription(description)
            }

        }
    }, [data])

    return ( 
        <div className="card-weather bg-cyan-200 col-span-3 lg:col-span-4 p-4">
            <div className="flex justify-between items-center mb-12">
                <div className="flex gap-1 text-gray-900">
                    <h3 className="text-4xl font-semibold">{temperature.temp}&deg;F</h3>
                    <span className="font-thin">/c</span>
                </div>
                <div>
                <div className="flex gap-1 items-baseline">
                    <p className="text-xs font-light">HIGH</p>
                    <h3 className="text-xl font-semibold">{temperature.highTemp}&deg;F</h3>
                </div>
                <div className="flex gap-1 items-baseline">
                    <p className="text-xs font-light">LOW</p>
                    <h3 className="text-xl font-semibold">{temperature.lowTemp}&deg;F</h3>
                </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-20">
                <div className="order-last md:order-first">
                    <p className="font-semibold tracking-wider text-md mb-0">{description}</p>
                    <p className="font-thin tracking-wide text-sm mb-1">Feels like {temperature.feelsLike}&deg;F</p>
                </div>
                
                <div>
                    <img 
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                        alt="weatherIcon"
                        className="order-first md:order-last" 
                    />
                </div>
            </div>
        </div>
     );
}
 
export default CurrentWeather;