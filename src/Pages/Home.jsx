import React from 'react';
import Header from "../Components/Header"
import Main from "../Components/Main"
import Menubar from '../Components/Menubar';
import "./Home.css"

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Main />
        </div>
    );
}

export default Home;
