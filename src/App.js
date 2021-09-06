import "./App.css";
import WeatherApp from "./WeatherApp.js";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherApp />
      <p>
        Coded by Nou Vang and is{" "}
        <a
          href="https://github.com/nousvang/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          opened-sourced.
        </a>
      </p>
    </div>
  );
}

export default App;
