import React, { useContext } from 'react';
import './Search.css'
import Context from '../Context/Context';
import { getDataFromApi } from '../Services/Db';
import axios from "axios";
import search from '../assets/search.png'
const Search = () => {
    let { setImg, weather, setWeather, setDaily, setHourly,city, setCity, setDate } = useContext(Context)

    let getData = async (e) => {
        e.preventDefault();
        let city = e.target.city.value;

        e.target.city.value = null;
        let result = await getDataFromApi(`${city}`);
        setWeather(result);
        let latC = result.data.coord.lat;
        let lonC = result.data.coord.lon;
        setCity({
            lat: latC,
            lon: lonC,
            name: city,
        })
        setDate(result.data.dt);
        // console.log(lat, lon);
        setImg(`http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`)
        console.log(result);

        const key =  '2f9270987154c3c51798342a0a80f322';
        // let city = e.target.city.value;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`).then(res => res.json()).then(data => {
            console.log(data);
            setDaily(data);
        });
        // e.target.city = null;
        // const key1 = '2f9270987154c3c51798342a0a80f322';
        // fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${result.data.coord.lat}&lon=${result.data.coord.lon}&appid=${key1}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     setHourly(data); 
        // });
        // let res = fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&units=metric&appid=${key1}`).then(res=>res.json()).then(data=>{
        //     setHourly(data);
        //     console.log(data);
        // });


    }

    return (
        <div className='search'>
            <form onSubmit={getData}>
                <input required name='city' type="text" placeholder='City' />
                <button type='submit' ><img src={search} alt="" /></button>
            </form>
        </div>
    );
}

export default Search;
