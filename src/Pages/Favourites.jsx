import React from 'react';
import './Favourites.css';
import context from '../Context/Context';
import { useContext } from "react";

const Favourites = () => {
  const { color } = useContext(context)
 
  return (
    <div className={`fav ${color}`}>
      <h1>Favourites</h1>
    </div>
  );
}

export default Favourites;
