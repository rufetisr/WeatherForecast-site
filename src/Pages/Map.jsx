import React from 'react';
import { getDataFromApi } from '../Services/Db';
import Context from '../Context/Context';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import './Map.css'
import key from '../Services/Apikey'

const Map = () => {
  let { city, setCity, date, weather, color } = useContext(Context)
  let mapUrl1 = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${city.lat}&lon=${city.lon}&zoom=9`;

  if (weather.data != undefined) {

    return (
      <div className={`map ${color}`}>
        <h2>Temperature Map</h2>
        <iframe frameBorder='0' scrolling='no' height='350px' width='100%' onScroll='none' src={mapUrl1} className='frame'></iframe>
      </div>
    );
  }
  else {
    return (
      <div className={color}>
        <h2 className='mes'>
          <Link to='/'>
            Go to Home and search city
          </Link>
        </h2>
      </div>
    )
  }

}

export default Map;
