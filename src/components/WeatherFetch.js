import React, {useState, useEffect} from 'react';

import axios from 'axios'

function WeatherFetch(){

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
    const [speed, setSpeed] = useState('');
    const [deg, setDeg] = useState('');
    // "dt"
    const [time, setTime] = useState('');

    // define useEffect function which will run when the component 
    // is mounted for the first time on the web page
    useEffect(() => {
        // use axios to Fetch API data from OpenWeatherMap by using API key
        // assign the data from axios.get() to the 'data' variable and log it out
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=63d7d168aad1162cd2c208aca3548a06')
        .then((data) => {
            console.log(data)

        }) 

    },[])

    return(
        <>
        </>
    )
}

export default WeatherFetch;