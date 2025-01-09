import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Twilight from "./components/Twilight"
import OtherMetric from "./components/OtherMetric"
import CurrentWeather from "./components/CurrentWeather"
import Header from "./components/Header"
import WeeklyForecastItem from "./components/WeeklyForecastItem"
import { useWeatherContext } from "./hooks/useWeatherContext"

function App() {
  const {data} = useWeatherContext()
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [coordinate, setCoordinate] = useState({
    lat: 13.7558718,
    lon: 121.0584755
  })
  const [location, setLocation] = useState(null)
  const [twilightData, setTwilightData] = useState(null)
  const [currentWeatherData, setCurrentWeatherData] = useState(null)
  const [otherMetricsData, setOtherMetricsData] = useState(null)
  const [weeklyWeather, setWeeklyWeather] = useState(null)

  useEffect(() =>{
    console.log(data)
    if(data){
      setIsLoading(false)
      const twilightData = {
        sunrise: data.weather.sys.sunrise,
        sunset: data.weather.sys.sunset
      }

      const currentWeatherData = {
        temp: data.weather.main.temp,
        lowTemp: data.weather.main.temp_min,
        highTemp: data.weather.main.temp_max,
        feelsLike: data.weather.main.feels_like,
        description: data.weather.weather[0].description,
        icon: data.weather.weather[0].icon
      }

      const otherMetricsData = {
        visibility: data.weather.visibility,
        clouds: data.weather.clouds.all,
        windSpeed: data.weather.wind.speed,
        humidity: data.weather.main.humidity
      }

      const weeklyWeather = data.weeklyWeather.list.filter((item) => item.dt_txt.split(" ")[1] === '09:00:00')
      setWeeklyWeather(weeklyWeather)

      setCurrentWeatherData(currentWeatherData)
      setTwilightData(twilightData)
      setOtherMetricsData(otherMetricsData)
      setLocation({name:data.weather.name, country: data.weather.sys.country})
    }else{
      setIsLoading(true)
    }
  }, [data])

  return (
    <section className="main py-10 px-12 md:px-24">
        <Navbar />

        {data ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            <div className="lg:col-span-2 card p-5 bg-gray-50">
              <Header
                location={location}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 mb-6">
                <CurrentWeather
                    data={currentWeatherData}
                />
                <OtherMetric 
                  data={otherMetricsData}
                />
                <Twilight data={twilightData}/>
              </div>
            </div>
            <div className=" card px-8 py-6 lg:col-span-1 bg-gray-50">
              <h4 className="text-center text-xl text-gray-700 font-bold">Weekly Forecasts</h4>
              {weeklyWeather && weeklyWeather.map((forecast) =>(
                    <WeeklyForecastItem key={forecast.dt} data={forecast}/>
                ))}
            </div>
          </div>
        ) : (
          <p>Please search for a city or country</p>
        )}

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className="lg:col-span-2 card p-5 bg-gray-50">
            <Header
              location={{name:weather.name, country: weather.sys.country}}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-2 mb-6">
              <CurrentWeather
                  data={currentWeatherData}
              />
              <OtherMetric 
                data={otherMetricsData}
              />
              <Twilight data={twilightData}/>
            </div>
          </div>
          <div className=" card px-8 py-6 lg:col-span-1 bg-gray-50">
            <h4 className="text-center text-xl text-gray-700 font-bold">Weekly Forecasts</h4>
            {weeklyWeather && weeklyWeather.map((forecast) =>(
                  <WeeklyForecastItem key={forecast.dt} data={forecast}/>
              ))}
          </div>
        </div> */}

        <p className="text-sm font-sans font-semibold mt-3 text-center"
        >
          Designed and Coded by 
          <a 
            href="https://github.com/gabify" 
            target="_blank"
            className="ms-1 text-blue-600"
          >
            Gabify
          </a>
        </p>
    </section>
  )
}

export default App
