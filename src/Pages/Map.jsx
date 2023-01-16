import React from 'react';
import { getDataFromApi } from '../Services/Db';
import Context from '../Context/Context';
import { useContext } from "react";
// import { getDataFromApi } from '../Services/Db';
import './Map.css'

const Map = () => {
  let { city, setCity } = useContext(Context)

  // let result = await getDataFromApi(`${city}`);
  // let lat = result.data.coord.lat;
  // let lon = result.data.coord.lon;
  let mapUrl = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${city.lat}&lon=${city.lon}&zoom=9`;
  const getUrl = () => {
    console.log(city.lat);
    return mapUrl;
  }
  return (
    <div className='map'>
      <iframe frameBorder='0' scrolling='no' height='350px' width='100%' onScroll='none' src={mapUrl} className='frame'></iframe>
    </div>
  );
}

export default Map;
