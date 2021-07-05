import { useWeather } from '../hooks/useWeather';
import { getDewPoint } from '../utils/getDewPoint';
import { getTemp } from '../utils/getTemp';
import { getWindDirection } from '../utils/getWindDirtection';
import styles from './WeatherBlock.module.css'

export const WeatherBlock = ({city}) => {
  const [weather] = useWeather(city);
  console.log(weather)
  if (!weather) {
    return <></>
  }
  const temp = getTemp(weather.main.temp);
  const feelsLike = getTemp(weather.main.feels_like)

  return (
    <div className={styles.weatherBlock}>
      <h2 className={styles.title}>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className={styles.weather}>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        {temp}°C
      </div>
      <p className={styles.block}>
        Feels likes {feelsLike}°C, {weather.weather[0].description}
      </p>
      <div className={styles.wind}>
        <div className={styles.speed}>{weather.wind.speed} m/s {getWindDirection(weather.wind.deg)}</div>
        <div className={styles.pressure}>{weather.main.pressure}hPA</div>
        <div>Humidity: {weather.main.humidity}%</div>
        <div>Dew point: {getDewPoint(temp, weather.main.humidity)}°C</div>
        <div>Visibility: {weather.visibility/1000}km</div>
      </div>
    </div>
  )
}