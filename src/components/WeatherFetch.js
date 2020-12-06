import React, {useState, useEffect} from 'react';

import axios from 'axios'

//function WeatherFetch(){
const WeatherFetch=()=>{
    /**
     * Declare hooks that will be assigned appropriate values 
     * when get data from the OpenWeatherMap Server
     */
    const [location, setLocation] = useState('Toronto CA');
    // "weather"
    const [main, setMain] = useState('');
    const [description, setDescription] = useState('');
    const [iconID, setIconID] = useState('');
    // "main"
    const [temp, setTemp] = useState('');
    const [feels_like, setFeelsLike] = useState('');
    const [temp_min, setTemp_min] = useState('');
    const [temp_max, setTemp_max] = useState('');
    const [pressure, setPressure] = useState('');
    const [humidity, setHumidity] = useState(''); 
    const [sea_level, setSea_level] = useState('');
    const [grnd_level, setGrnd_level] = useState('');
    // "wind"
    const [speed, setWindSpeed] = useState('');
    const [deg, setWindDeg] = useState('');
    // "dt"
    const [timeStamp, setTimeStamp] = useState('');
    
    //the time from the data of OpenWeatherMap is Unix epoch time
    //neet to convert, then can use it for toLocaleDateString() method
    const convetValue=new Date(timeStamp*1000);
    const date_time = convetValue.toLocaleDateString() +" "+ convetValue.toLocaleTimeString();


    // define useEffect function which will run when the component 
    // is mounted for the first time on the web page
    useEffect(() => {
        // use axios to Fetch API data from OpenWeatherMap by using API key
        // assign the data from axios.get() to the 'data' variable and log it out
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=63d7d168aad1162cd2c208aca3548a06&units=metric')
        .then(res => {
            const weaterData=res.data;
            console.log(weaterData);

            setMain(weaterData.weather[0].main);
            setDescription(weaterData.weather[0].description);
            setIconID(weaterData.weather[0].icon);
            setTemp(weaterData.main.temp);
            setFeelsLike(weaterData.main.feels_like);
            setTemp_min(weaterData.main.temp_min);
            setTemp_max(weaterData.main.temp_max);
            setPressure(weaterData.main.pressure);
            setHumidity(weaterData.main.humidity);
            setSea_level(weaterData.main.sea_level);
            setGrnd_level(weaterData.main.grnd_level);
            setWindSpeed(weaterData.wind.speed);
            setWindDeg(weaterData.wind.deg);
            setTimeStamp(weaterData.dt);
        })

        /*//use fetch to get data from API and assign data
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=63d7d168aad1162cd2c208aca3548a06&units=metric')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);

            setMain(data.weather[0].main);
            setDescription(data.weather[0].description);
            setIconID(data.weather[0].icon);
            setTemp(data.main.temp);
            setFeelsLike(data.main.feels_like);
            setTemp_min(data.main.temp_min);
            setTemp_max(data.main.temp_max);
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setSea_level(data.main.sea_level);
            setGrnd_level(data.main.grnd_level);
            setWindSpeed(data.wind.speed);
            setWindDeg(data.wind.deg);
            setTimeStamp(data.dt);
        }) */
    },[])

    return(
        <>
        <h1>{location}</h1>
        <h5>Date and Time: {date_time}</h5>

        <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"}/>
        <h3>Weather: {main}</h3>
        <h3>Decsription: {description}</h3>

        <h3>Main Temperature: {temp} Celsius</h3>
        <h3>Feels Like: {feels_like} Celsius</h3>
        <h3>Temperature Ramge: {temp_min} to {temp_max} Celsius</h3>
        <h3>Pressure: {pressure}</h3>
        <h3>Humidity: {humidity}</h3>
        <h3>Sea Level: {sea_level} meters</h3>
        <h3>Grnd Level: {grnd_level} meters</h3>

        <h3>Wind Speed: {speed} meters/sec</h3>
        <h3>Wind Degree Direction: {deg} Degree</h3>
        </>
    )
}

export default WeatherFetch;