import React from "react";
import logo from "../../assets/logo-black.jpg";

function Nav() {
    
    return(
        <nav>
            <div>
                <img src={logo} alt="logo" height={150} width={150} />
            </div>
            <div>
                <div><a href="/">Home</a></div>
                <div><a href="/menu">Menu</a></div>
                <div><a href="/about">About</a></div>
                <div><a href="/contact">Contact</a></div>
            </div>
        </nav>
    )
}

export default Nav;