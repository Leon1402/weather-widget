import './App.css';
import { WeatherBlock } from './WeatherBlock'
import { Setting } from './Setting/Setting'
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { useYourCity } from './hooks/useYourCity';

function App() {
  const [cities, setCities] = useState()
  const [isWidgetOpen, setIsWidgetOpen] = useState(true)
  const [myCity] = useYourCity()

  const myRef = useRef(null)

  useEffect(() => {
    if (!cities)
      setCities(myCity)
      console.log(cities)
  }, [myCity, cities])

  // useEffect(() => {
  //   const closeWidget = (e) => {
  //       if (isWidgetOpen && !myRef.current.contains(e.target)) {
  //         setIsWidgetOpen(false)
  //       }
  //     }
  //   window.addEventListener('click', closeWidget)
  //   return () => { window.removeEventListener('click', closeWidget) }
  // }, [isWidgetOpen])

  console.log(myCity)
  return (
    <BrowserRouter>
      <div className="App">
        {
          !isWidgetOpen
            ? <button onClick={() => { setIsWidgetOpen(true) }}>Open</button>
            : <div className='weather-container' ref={myRef}>
              <Route exact path='/'>
                <Link to='setting' className='setting'>Setting</Link>
                !!cities
                ?{cities.map((city) => <WeatherBlock city={city} key={city} />)}
                : <></>
                <WeatherBlock key='123' />
              </Route>
              <Route path="/setting">
                <Setting cities={cities} setCities={setCities} />
              </Route>
            </div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
