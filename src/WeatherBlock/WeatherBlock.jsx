import { useWeather } from '../hooks/useWeather';
import { getWindDirection } from '../utils/getWindDirtection';
import styles from './WeatherBlock.module.css'

export const WeatherBlock = () => {
  const [weather] = useWeather();
  console.log(weather)
  if (!weather) {
    return <></>
  }
  return (
    <div>
      <h2 className={styles.title}>
        {weather.name}, {weather.sys.country}
      </h2>
      <div className={styles.weather}>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
        {weather.main.temp}
      </div>
      <p className={styles.block}>
        Feels likes {weather.main.feels_like} Broken clouds. Light breeze
      </p>
      <div className={styles.wind}>
        <span className="">icon </span>
        <span className={styles.spped}>{weather.wind.speed} m/s </span>
        {getWindDirection(weather.wind.deg)}
        <div className={styles.pressure}>{weather.main.pressure}hPA</div>
      </div>
    </div>
  )
}