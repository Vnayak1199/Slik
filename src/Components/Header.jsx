import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to={"/Home"}>
                    <img src={logo} alt="Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/Home"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/About"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={"/Contact"}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="header-right">
                        <div className="join">
                        <NavLink className="btn" title="Join Slik" to={"/Account"}>Account</NavLink>
                        </div>
                        <NavLink className="login" title="Login" to={"/Login"}>Login</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</>
  )
}

export default Header
