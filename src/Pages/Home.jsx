import React from 'react';
import Header from "../Components/Header"
import Main from "../Components/Main"
import Menubar from '../Components/Menubar';
import "./Home.css"
import Context from '../Context/Context';
import { useContext } from "react";

const Home = () => {
  const {sidebar, setSidebar} = useContext(Context)

    return (
        <div className='home'>
            {/* <Header /> */}
            <Main />
        </div>
    );
}

export default Home;
