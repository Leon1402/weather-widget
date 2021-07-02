import axios from "axios";
import { useEffect, useState } from "react";
import { getlocation } from "../utils/getLocation";

export const useWeather = () => {
  const [weather, setWeather] = useState();

  const coords = getlocation();
  console.log(coords.lat)
  // useEffect(() => {
  //   axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=51727deeeb8f27eb66b078e557351768&lang=ru`)
  //     .then(({data}) => {
  //       setWeather(data)
  //     })
  // }, [])
  return weather
}
