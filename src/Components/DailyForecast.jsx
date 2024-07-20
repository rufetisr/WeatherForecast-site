import React from 'react';
import './DailyForecast.css'
import { useContext } from 'react';
import Context from '../Context/Context';
import water from '../assets/water.png'

const DailyForecast = () => {

  let { daily, color } = useContext(Context)

  console.log('app/home/main/daily');

  let getDate = (date) => {
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let txt = date.split(' ')[0];
    let str = txt.split('-');

    let year = str[0];
    let month = str[1];
    let day = str[2];

    const d = new Date(year, month - 1, day);
    // date= 2022-12-30 => Fri, Dec 30
    return d.toDateString().substring(0, 10);


  }


  return (
    <div className='daily-container'>
      <h1>Daily</h1>
      <hr></hr>
      <ul className={`daily ${color}`}>
        {
          daily?.list?.map((item, index) => {
            if (index == 0 || index == 7 || index == 15 || index == 23 || index == 31 || index == 39) {

              return (
                <li key={index} className='li'>
                  <p className='day'>{getDate(item.dt_txt)}</p>
                  <div className='mid'>
                    <img src={water} alt="" className='water' />
                    <p className='rain'>{`${Math.round(item.pop * 100)}%`}</p>
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                    <p className='temp'>{Math.round(item.main.temp)}°</p>
                  </div>
                  <p className='desc'>{item.weather[0].description}</p>
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  );
}

export default DailyForecast;
