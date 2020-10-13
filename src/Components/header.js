import React, { useState } from 'react';
import logo from '../Images/logo.png'

const Header = () =>{

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        return(
            menu &&
            <div className="full-menu">
            <div className="menu">
                <div>
                    <div className="menu-name">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span className="menu-name-span"> Wedding Sevices</span>
                    </div>
                    <div className="menu-name">
                        <i class="fa fa-certificate" aria-hidden="true"></i>
                        <span className="menu-name-span"> Makeup Courses</span>
                    </div>
                    <div className="menu-name">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <span className="menu-name-span"> Vendor Login</span>
                    </div>
                </div>
                <div>
                    <hr />
                    <div className="menu-name">
                    <a href="mailto:contact@feba.co.in">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="menu-name-span"> Contact@feba.co.in</span>
                    </a>
                    </div>
                    <div className="menu-name">
                    <a href="https://wa.me/917304879310">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    <span className="menu-name-span"> +91 7304879310</span>
                    </a>
                    </div>
                    <div className="menu-name">
                    <a href="https://www.instagram.com/feba__/">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <span className="menu-name-span"> @feva__</span>
                    </a>
                    </div>
                </div>
            </div>
            <div className="menu-close">
                <button 
                    className="menu-close-button"
                    onClick={()=> setMenu(!menu)}
                >  </button>
            </div>
            </div>

        )
    }

    return (
        <div>
        {handleMenu()}
        <header className="header">
            <div>
                <button 
                    onClick={()=> setMenu(!menu)}
                    className="header-button">
                <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
            <div>
                <img className="header-img" src={logo} alt="logo" />
            </div>
            <div>
                <h2 className="header-h2"> Feba </h2>
            </div>
        </header>
        <hr />
        </div>
    )
}

export default Header;