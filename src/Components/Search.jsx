import React, { useContext } from 'react';
import './Search.css'
import Context from '../Context/Context';
import { getDataFromApi } from '../Services/Db';
import search from '../assets/search.png';

const Search = () => {
    console.log('app/home/main/search');
    let { setImg, weather, setWeather, setDaily, city, setCity, setDate, cityArr, setCityArr } = useContext(Context)

    const apiKey = import.meta.env.VITE_API_KEY

    let getData = async (e) => {

        console.log('getData');
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

        console.log('before fetch');
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`).then(res => res.json()).then(data => {
            console.log(data);
            console.log('after fetch');
            setDaily(data);
        });

    }
    let clickSave = (e) => {
        e.preventDefault();
        if (!cityArr.includes(city.name)) {
            setCityArr([...cityArr, city.name]);
        }

        console.log(cityArr);
    }
    return (
        <div className='search'>

            {
                weather.data == undefined
                    ? null : <button id='star' onClick={clickSave}>Save</button>
            }
            <form onSubmit={getData}>
                <input required name='city' type="text" placeholder='City' />
                <button type='submit' ><img src={search} alt="Search" /></button>
            </form>
        </div>
    );
}

export default Search;
