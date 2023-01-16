import { useState } from 'react'
import './App.css'

import Home from "./Pages/Home"
import Map from "./Pages/Map"
import Favourites from "./Pages/Favourites"
import Feedback from "./Pages/Feedback"

import Context from "./Context/Context"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'


function App() {
  // const [count, setCount] = useState(0)
  const [weather, setWeather] = useState({});
  const [daily, setDaily] = useState({});
  const [date, setDate] = useState("");
  const [hourly, setHourly] = useState({});
  const [city, setCity] = useState({
    lat: '',
    lon: '',
    name: "",
  });
  const [img, setImg] = useState("");
  const [color, setColor] = useState("white");
  const [inputValue, inputSetValue] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const data = {
    daily, setDaily,
    hourly, setHourly,
    color, setColor,
    sidebar, setSidebar,
    img,
    setImg,
    weather,
    setWeather,
    inputValue,
    inputSetValue,
    city, setCity,
    date, setDate,
  }
  return (
    <Context.Provider value={data}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/map' element={<Map/>} ></Route>
          <Route path='/favourites' element={<Favourites/>} ></Route>
          <Route path='/feedback' element={<Feedback/>} ></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
