import axios from 'axios';
import { useEffect, useState } from 'react';
import './Weather.css';

function Weather() {
  const [temperature, setTemperature] = useState(0);
  const [windspeed, setWindspeed] = useState(0);

  useEffect(() => {
    axios(
      'https://api.open-meteo.com/v1/forecast?latitude=43.26&longitude=76.90&current_weather=true'
    ).then((result) => setTemperature(result.data.current_weather.temperature));
  }, []);

  useEffect(() => {
    axios(
      'https://api.open-meteo.com/v1/forecast?latitude=43.26&longitude=76.90&current_weather=true'
    ).then((result) => setWindspeed(result.data.current_weather.windspeed));
  }, []);

  return (
    <div className="weatherContainer">
      <span>
        Сегодня до {temperature} {'\u2103'}. Скорость ветра до {windspeed} км/ч.
        Приятных покупок!
      </span>
    </div>
  );
}

export default Weather;
