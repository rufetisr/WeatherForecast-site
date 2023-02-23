import React from 'react';
import './Favourites.css';
import context from '../Context/Context';
import { useContext } from "react";

const Favourites = () => {
  const { color, cityArr } = useContext(context);

  return (
    <div className={`fav ${color}`}>
      <h1>Favourites</h1>
      <ul id='favlist'>
        {
          cityArr.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Favourites;
