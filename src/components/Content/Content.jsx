import React from "react";
import './Content.css';
import Profile from "../Navbar/Profile/Profile";
import Dialogs from "../Navbar/Dialogs/Dialogs";

const Content = () => {
    return (
        <div className='content'>
            <Profile/>
            <Dialogs/>
        </div>
    )
}

export default Content;