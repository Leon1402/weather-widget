import axios from "axios";
import { useEffect, useState } from "react";

export const useWeather = (city) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51727deeeb8f27eb66b078e557351768`)
      .then(({ data }) => {
        setWeather(data)
      })
  }, [city])
  return [weather]
}
