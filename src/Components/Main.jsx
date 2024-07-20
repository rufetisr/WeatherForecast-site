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
    let { weather } = useContext(Context)
    console.log('app/home/main');

    return (
        <main className='main' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <Search />
            {
                weather.data != undefined ?

                    <>
                        <WeatherCard />
                        {/* <DailyForecast />
                        <HourlyForecast />
                        <DayDetails /> */}
                    </> : null
            }

        </main>
    )
}

export default Main;