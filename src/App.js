import './App.css';
import { WeatherBlock } from './WeatherBlock'
import { Setting } from './Setting/Setting'

const test = [
  '123',
  '234',
  '346'
]

function App() {
  return (
    <div className="App">
      {/* <WeatherBlock /> */}
      <Setting/>
    </div>
  );
}

export default App;
