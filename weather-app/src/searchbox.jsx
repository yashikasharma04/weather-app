import React, { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_KEY = "dafca35dc58b0b0c4b58e0ca1283b6e9";

    const getWeatherInfo = async () => {
        try {
            const geoResponse = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
            );
            const geoData = await geoResponse.json();

            if (geoData.length === 0) {
                alert("City not found");
                return null;
            }

            const { lat, lon } = geoData[0];

            const weatherResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            );
            const weatherData = await weatherResponse.json();

            const result = {
                city: city,
                temp: weatherData.main.temp,
                tempMin: weatherData.main.temp_min,
                tempMax: weatherData.main.temp_max,
                feelsLike: weatherData.main.feels_like,
                humidity: weatherData.main.humidity,
                weather: weatherData.weather[0].description
            };

            return result;

        } catch (error) {
            console.error("Error fetching weather:", error);
            return null;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setCity("");
    };

    return (
        <div className="search-box">
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
