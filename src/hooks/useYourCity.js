import axios from 'axios';
import { useState, useEffect } from 'react';

export const useYourCity = () => {
  const [city, setCity] = useState(null);

  const onChange = (data) => {
    const {latitude, longitude} = data.coords
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=51727deeeb8f27eb66b078e557351768`)
    .then(({data})=> {
      setCity(data.name)
    })
  };

  const onError = (error) => {
    console.log('error')
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, [city]);

  return [city];
}