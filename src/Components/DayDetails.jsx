import React from 'react'
import { useContext } from "react";
import Context from '../Context/Context';
import './DayDetails.css'
import termo from '../assets/thermometer.png'
import drop from '../assets/drop (1).png'
import wind from '../assets/wind.webp'
import cloud from '../assets/cloud.png'
import res from '../assets/resilience.png'
import eye from '../assets/eye.png'
import sunrise from '../assets/sunrise.png'
import sunset from '../assets/sunset.png'


const DayDetails = () => {
    let { weather, color } = useContext(Context)

    console.log('app/home/main/details');


    return (
        <div className='day-details'>
            <h1>Day Details</h1>
            <hr />
            <div className={`details ${color}`}>
                <div className='sec1'>
                    <div className="sec3">
                        <img src={termo} alt="" />
                        <p>Feels Like:</p>
                    </div>
                    <p>{Math.floor(weather.data.main.feels_like)}&deg;C</p>
                </div>
                <div className='sec1'>
                    <div className='sec3'>
                        <img src={drop} alt="" />
                        <p>Humdity: </p>
                    </div>
                    <p>{weather.data.main.humidity}%</p>
                </div>
                <div className='sec1'>
                    <div className='sec3'>
                        <img src={wind} alt="" />
                        <p>Wind: </p>
                    </div>
                    <p>{weather.data.wind.speed} m/s</p>
                </div>
                <div className='sec1'>
                    <div className='sec3'>
                        <img src={cloud} alt="" />
                        <p>Cloudiness: </p>
                    </div>
                    <p>{weather.data.clouds.all} %</p>
                </div>
                <div className='sec1'>
                    <div className='sec3'>
                        <img src={res} alt="" />
                        <p>Pressure: </p>
                    </div>
                    <p>{weather.data.main.pressure} hPa</p>
                </div>
                <div className='sec1'>
                    <div className='sec3'>
                        <img src={eye} alt="" />
                        <p>Visibility: </p>
                    </div>
                    <p>{weather.data.visibility / 1000} km</p>
                </div>
            </div>
            <div className={`det2 ${color}`}>
                <div>
                    <h2>Sunrise</h2>
                    <div>
                        <img className='sun' src={sunrise} alt="" />
                        <p>{`${new Date(weather.data.sys.sunrise * 1000).toLocaleTimeString()}`}</p>
                    </div>
                </div>
                <div>
                    <h2>Sunset</h2>
                    <div>
                        <img className='sun' src={sunset} alt="" />
                        <p>{`${new Date(weather.data.sys.sunset * 1000).toLocaleTimeString()}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DayDetails