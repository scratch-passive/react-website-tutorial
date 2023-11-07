import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        MCKENZY ISON <i class="gg-smile" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i class={click ? "gg-math-minus" : "gg-menu"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                            <li className="nav-item">
                            <Link to='/sign-up' className="nav-links" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar