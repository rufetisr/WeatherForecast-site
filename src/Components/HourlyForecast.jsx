import React from 'react';
import { useContext } from "react";
import Context from '../Context/Context';
import './HourlyForecast.css'
import water from '../assets/water.png'
import wind from '../assets/wind.webp'
const HourlyForecast = () => {

  let { setDaily, daily, weather, color } = useContext(Context)
  let getDate = (date) => {
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let txt = date.split(' ')[0];
    console.log(txt);
    let str = txt.split('-');
    console.log(str);
    let year = str[0];
    let month = str[1];
    let day = str[2];
    console.log(year, month, day);
    const d = new Date(year, month - 1, day);
    // date= 2022-12-30 => Fri, Dec 30
    console.log(daily.list);
    return d.toDateString().substring(0, 10);


  }
  if (weather.data != undefined) {

    return (
      <div >
        <h1>Hourly</h1>
        <hr></hr>
        <ul className={`hourly ${color}`}>
          {
            daily?.list?.map((item, index) => {
              if (index >= 0 && index <= 4) {

                return (
                  <li key={index} className='li'>
                    <p className='hour'>{item.dt_txt.split(' ')[1].substring(0, 5)}</p>
                    <div className='mid'>
                      <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                      <p className='temp'>{Math.round(item.main.temp)}°</p>
                    </div>
                    <div  className='pop'>
                      <img src={water} alt="" className='water'/>
                      <p className='desc'>{`${Math.round(item.pop * 100)}%`}</p>
                    </div>
                    <div  className='pop sec2'>
                      <img src={wind} alt="" className='water'/>
                      <p className='desc'>{`${item.wind.speed} m/s`}</p>
                    </div>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    );
  }
}

export default HourlyForecast;
