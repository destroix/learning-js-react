import React from "react";
import './Main.css';
import Content from "./Content/Content";
import Navbar from "./Navbar/Navbar";

const Main = () => {
    return (
        <main className='main'>
            <Navbar/>
            <Content/>
        </main>
    )
}

export default Main;