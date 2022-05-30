import React from "react";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>

            <div className={style.item}>
                <a href="/profile">Profile</a>
            </div>

            <div className={style.item}>
                <a href="/dialogs">Dialogs</a>
            </div>

        </nav>
    )
}

export default Navbar;