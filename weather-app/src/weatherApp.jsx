import SearchBox from "./searchbox.jsx";
import InfoBox from "./infobox.jsx"
import {useState} from 'react';
export default function WeatherApp(){
    const [weather, setWeather] = useState({
        city: "Indore",
    temp: 25.05,
    tempMin: 20.0,
    tempMax: 30.0,
    feelsLike: 26.0,
    humidity: 60,
    weather: "clear sky"
    }); 

    let updateInfo = (newInfo) =>{
       setWeather(newInfo);
    }
    return (
        <div className="weather-app">
        <SearchBox updateInfo = {updateInfo} />
        <InfoBox info = {weather} />
        </div>
    );
}