import './App.css';
import { weatherContext } from './context/weatherContext';
import { useWeather } from './hooks/useWeather';

function App() {
  const weather = useWeather();

  return (
    <weatherContext.Provider value={weather}>
      <div className="App">
      
      </div>
    </weatherContext.Provider >
  );
}

export default App;
