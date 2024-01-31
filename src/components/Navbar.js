import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return <nav>
        <NavLink to={"/"}>Home</NavLink>
        <br />
        <NavLink to={"/about"}>About</NavLink>
        <br />
        <NavLink to={"/contact"}>Contact</NavLink>
        <br />
        <NavLink to={"/products"}>Products</NavLink>
    </nav>
}

export default Navbar;