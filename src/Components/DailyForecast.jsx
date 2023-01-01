import React from 'react';
import './DailyForecast.css'
import { useContext } from 'react';
import Context from '../Context/Context';

const DailyForecast = () => {

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
                      <img src="src\assets\water.png" alt="" className='water'/>
                      <p className='rain'>{`${Math.round(item.pop*100)}%`}</p>
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
}

export default DailyForecast;
