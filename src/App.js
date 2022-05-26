import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";


const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )

}

export default App;
