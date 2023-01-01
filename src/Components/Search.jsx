import React, { useContext } from 'react';
import './Search.css'
import Context from '../Context/Context';
import { getDataFromApi } from '../Services/Db';
import axios from "axios";

const Search = () => {
    let { setImg, weather, setWeather, setDaily, setHourly } = useContext(Context)

    let getData = async (e) => {
        e.preventDefault();

        let result = await getDataFromApi(`${e.target.city.value}`);
        setWeather(result);
        setImg(`http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`)
        console.log(result);

        const key = '2f9270987154c3c51798342a0a80f322';
        let city = e.target.city.value;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`).then(res => res.json()).then(data => {
            console.log(data);
            setDaily(data);
        });

        const key1 = '2f9270987154c3c51798342a0a80f322';
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
                <button type='submit' ><img src="/src\assets\search.png" alt="" /></button>
            </form>
        </div>
    );
}

export default Search;
