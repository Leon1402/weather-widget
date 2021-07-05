import './App.css';
import { WeatherBlock } from './WeatherBlock'
import { Setting } from './Setting/Setting'
import { useEffect, useRef, useState } from 'react';

function App() {
  const [cities, setCities] = useState(['London', 'Moscow'])
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  const [isSettingOpen, setIsSettingOpen] = useState(false)
  const myRef = useRef(null)

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (myRef && !myRef.current.contains(e.target)) {
        setIsWidgetOpen(false)
      }
    })
  }, [])
  console.log(isSettingOpen)
  return (
    <div className="App" ref={myRef}>

      {
        !isWidgetOpen
          ? <button onClick={() => { setIsWidgetOpen(true) }}>Open</button>
          : <>
              <button className='setting' onClick={() => {setIsSettingOpen(true)}}>Setting</button>
              {cities.map((city) => <WeatherBlock city={city} key={city} />)}
              <Setting cities={cities} setCities={setCities} isOpen={isSettingOpen}/>
            </>
      }

    </div>
  );
}

export default App;
