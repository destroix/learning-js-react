import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink
                    to="/profile"
                    className={({isActive}) =>
                        isActive ? s.active : undefined
                    }
                >
                    Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to="/dialogs"
                    className={({isActive}) =>
                        isActive ? s.active : undefined
                    }
                >
                    Dialogs</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;