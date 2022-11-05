import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar_items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>

                </ul>
            </nav>
        </>

    )

}

export default Header;