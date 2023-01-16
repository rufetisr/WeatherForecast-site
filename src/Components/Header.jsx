import React from 'react'
import Menubar from './Menubar'
import { useContext } from "react";
import Context from '../Context/Context';
import { Link } from 'react-router-dom';



const Header = () => {
    

    return (
        // <header className='header'>
        //     <nav>
        <div className='header'>
            <Menubar />            
        </div>
        
        // </header>
    )
}

export default Header