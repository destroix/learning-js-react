import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <aside className='navbar'>
            <div>
                <a href="/profile">Profile</a>
            </div>
            <div>
                <a href="/dialogs">Dialogs</a>
            </div>
        </aside>
    )
}

export default Navbar;