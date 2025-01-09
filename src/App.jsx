import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Twilight from "./components/Twilight"
import OtherMetric from "./components/OtherMetric"
import CurrentWeather from "./components/CurrentWeather"
import Header from "./components/Header"
import WeeklyForecastItem from "./components/WeeklyForecastItem"

function App() {
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const [coordinate, setCoordinate] = useState({
    lat: 13.7558718,
    lon: 121.0584755
  })
  const [location, setLocation] = useState({
    country: 'PH',
    name: 'Batangas'
  })
  const [twilightData, setTwilightData] = useState(null)
  const [currentWeatherData, setCurrentWeatherData] = useState(null)
  const [otherMetricsData, setOtherMetricsData] = useState(null)
  const [weeklyWeather, setWeeklyWeather] = useState(null)
  
  useEffect(() =>{
    const getCurrentWeather = async() =>{
      setIsLoading(true)

      if(!coordinate){
        setError('No such city or country exist')
      }else{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${import.meta.env.VITE_API_KEY}`)

        const json = await response.json()

        if(!response.ok){
          setError(json.message)
        }

        if(response.ok){
          const twilightData = {
            sunrise: json.sys.sunrise,
            sunset: json.sys.sunset
          }

          const currentWeatherData = {
            temp: json.main.temp,
            lowTemp: json.main.temp_min,
            highTemp: json.main.temp_max,
            feelsLike: json.main.feels_like,
            description: json.weather[0].description,
            icon: json.weather[0].icon
          }

          const otherMetricsData = {
            visibility: json.visibility,
            clouds: json.clouds.all,
            windSpeed: json.wind.speed,
            humidity: json.main.humidity
          }

          setCurrentWeatherData(currentWeatherData)
          setTwilightData(twilightData)
          setOtherMetricsData(otherMetricsData)
          setIsLoading(false)
        }
      }
    }

    const getweeklyWeather = async() =>{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${import.meta.env.VITE_API_KEY}`)
      const json = await response.json()

      if(response.ok){
        const weeklyWeather = json.list.filter((item) => item.dt_txt.split(" ")[1] === '09:00:00')
        setWeeklyWeather(weeklyWeather)
      }
    }

    getCurrentWeather()
    getweeklyWeather()
  }, [coordinate])

  return (
    <section className="main py-10 px-12 md:px-24">
        <Navbar 
          setCoordinate={setCoordinate}
          changeLocation={setLocation}
        />

        {error && error}

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
