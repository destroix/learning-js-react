import React from "react";
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

const Content = () => {
    return (
        <main className={s.content}>
            <Routes>
                <Route path="profile" element={<Profile/>} />
                <Route path="dialogs" element={<Dialogs/>} />
            </Routes>
        </main>
    )
}

export default Content;