import React from "react";
import style from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";


const Content = () => {
    return (
        <div className={style.content}>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
        </div>
    )
}

export default Content;