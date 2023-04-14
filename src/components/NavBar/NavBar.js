import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'
import { Link } from "react-router-dom"


const NavBar = () => {
    
    return (
        <div>
            <nav>
                <Link className="navbar-brand logo" to={"/"}>TELSTAR</Link>
                <ul className="nav-links">
                    <li><Link to={"/category/retro"}>Retro</Link></li>
                    <li><Link to={"/category/moderna"}>Modernas</Link></li>
                    <li><Link to={"/"}>Ingresá a tu Cuenta</Link></li>
                </ul>
                <Link to={"/cart"}>
                    <div><CartWidget/></div>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar