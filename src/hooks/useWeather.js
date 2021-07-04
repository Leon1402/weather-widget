import axios from "axios";
import { useEffect, useState } from "react";

export const useWeather = () => {
  const [weather, setWeather] = useState();
  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Krasnoyarsk&appid=51727deeeb8f27eb66b078e557351768`)
      .then(({data}) => {
        setWeather(data)
      })
  }, [])
  return [weather]
}
