import React from 'react'
import { useContext } from "react";
import Context from '../Context/Context';
import './DayDetails.css'

const DayDetails = () => {
    let { setDaily, daily, weather, color } = useContext(Context)



    if (weather.data != undefined) {

        return (
            <div className='day-details'>
                <h1>Day Details</h1>
                <hr />
                <div className={`details ${color}`}>
                    <div className='sec1'>
                        <div className="sec3">
                            <img src="src\assets\thermometer.png" alt="" />
                            <p>Feels Like:</p>
                        </div>
                        <p>{Math.floor(weather.data.main.feels_like)}&deg;C</p>
                    </div>
                    <div className='sec1'>
                        <div className='sec3'>
                            <img src="src\assets\drop (1).png" alt="" />
                            <p>Humdity: </p>
                        </div>
                        <p>{weather.data.main.humidity}%</p>
                    </div>
                    <div className='sec1'>
                        <div className='sec3'>
                            <img src="src\assets\wind.webp" alt="" />
                            <p>Wind: </p>
                        </div>
                        <p>{weather.data.wind.speed} m/s</p>
                    </div>
                    <div className='sec1'>
                        <div className='sec3'>
                            <img src="src\assets\cloud.png" alt="" />
                            <p>Cloudiness: </p>
                        </div>
                        <p>{weather.data.clouds.all} %</p>
                    </div>
                    <div className='sec1'>
                        <div className='sec3'>
                            <img src="src\assets\resilience.png" alt="" />
                            <p>Pressure: </p>
                        </div>
                        <p>{weather.data.main.pressure} hPa</p>
                    </div>
                    <div className='sec1'>
                        <div className='sec3'>
                            <img src="src\assets\eye.png" alt="" />
                            <p>Visibility: </p>
                        </div>
                        <p>{weather.data.visibility / 1000} km</p>
                    </div>
                </div>
                <div className={`det2 ${color}`}>
                    <div>
                        <h2>Sunrise</h2>
                        <div>
                            <img className='sun' src="src\assets\sunrise.png" alt="" />
                            <p>{`${new Date(weather.data.sys.sunrise * 1000).toLocaleTimeString()}`}</p>
                        </div>
                    </div>
                    <div>
                        <h2>Sunset</h2>
                        <div>
                            <img className='sun' src="src\assets\sunset.png" alt="" />
                            <p>{`${new Date(weather.data.sys.sunset * 1000).toLocaleTimeString()}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DayDetails