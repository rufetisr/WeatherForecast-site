import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Context from "../Context/Context"
import { useContext } from "react";
import logo from '../assets/weather.png'

const Menubar = () => {
  const { sidebar, setSidebar } = useContext(Context)

  let { color, setColor } = useContext(Context)

  let changeColor = () => {

    color == 'white' ? setColor('night') : setColor('white')

  }
  const dateBuilder = (d) => {
    // const [query, setQuery] = useState("");

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    return `${day},  ${date}th ${month} ${year}`;
    // return new Date().getMonth();
  }
  // let updateMenu = () => {
  //   if (!isMenuClick) {
  //     setClass('burger-bar click');
  //     setMenuClass('menu visible');
  //   }
  //   else {
  //     setClass("burger-bar unclick");
  //     setMenuClass('menu hidden');
  //   }
  //   setIsMenuClick(!isMenuClick)
  // }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>

        <div className="navbar">
          {/* <Link to='/' className='menu-bars'> */}
          <div style={{ display: 'flex', alignItems: 'baseLine' }}>

            <div className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </div>
            <div className="logo" style={{ marginLeft: '10px' }}>
              <Link to='/home' style={{ textDecoration: 'none', color: '#fff' }}>
                <img src={logo} style={{ width: '40px', height: '40px' }} alt='logo'/>
              </Link>
            </div>
          </div>
          <div className="day" style={{ marginLeft: '10px', width: 'fit-content' }}>
            {dateBuilder(new Date())}
          </div>
          <div className="theme">
            <label class="switch">              
              <input type="checkbox" onChange={changeColor} />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <Link to='/' className='menu-bars'> */}
              <div className="menu-bars">
                <AiIcons.AiOutlineClose />
              </div>
              {/* </Link> */}
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Menubar;
