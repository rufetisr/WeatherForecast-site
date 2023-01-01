import React from 'react'
import DailyForecast from './DailyForecast';
import Search from './Search';
import WeatherCard from './WeatherCard';
import HourlyForecast from './HourlyForecast';
import DayDetails from './DayDetails';
import { useEffect } from "react";
import Context from '../Context/Context';
import { useContext } from "react";

const Main = () => {
  let { setDaily, daily, weather } = useContext(Context)


    return (
        <main className='main' style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <Search/>
            <WeatherCard/>
            <DailyForecast/>
            <HourlyForecast/>
            <DayDetails/>
        </main>
    )
}

export default Main;