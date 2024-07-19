import React from 'react';
import axios from "axios";
// import apiKey from './Apikey';

export const getDataFromApi = async (city) => {
    // let {setDaily, daily,  } = useContext(Context)

    // const key = '2f9270987154c3c51798342a0a80f322';
    const apiKey = import.meta.env.VITE_API_KEY

    console.log(apiKey);


    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).catch(
        (error) => {
            alert('This city was not found!');
            return Promise.reject(error);
        }
    );

    return res;
}

