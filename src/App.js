import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/Content/Content";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
