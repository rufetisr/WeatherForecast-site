import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Context from "../Context/Context"
import { useContext } from "react";

const Menubar = () => {
  const { sidebar, setSidebar } = useContext(Context)
  // const [btnClass, setClass] = useState('burger-bar unclick');
  // const [menuClass, setMenuClass] = useState('menu hidden');
  // const [isMenuClick, setIsMenuClick] = useState(false);

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

        {/* <div className='burger-menu' onClick={updateMenu}>
        <div className={btnClass} ></div>
        <div className={btnClass} ></div>
        <div className={btnClass} ></div>
        </div>
      <div className={menuClass}></div> */}
        <div className="navbar">
          {/* <Link to='/' className='menu-bars'> */}
          <div className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
          {/* </Link> */}
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
