import React from 'react'
import Menubar from './Menubar'
import { useContext } from "react";
import Context from '../Context/Context';
import { Link } from 'react-router-dom';



const Header = () => {
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