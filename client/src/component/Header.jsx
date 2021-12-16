import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import '../app.css'

const Header = () => {    

    const handleLogout = () => {
        localStorage.setItem('token', null)
        window.location = 'http://localhost:3000/'
      };

    let user = localStorage.getItem('token')
    user = user ? JSON.parse(user) : null
    console.log('user', user)
    console.log('nama')
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
                <div className="container">
                    <Link className="navbar-brand mx-3 fs-4 fw-bold text-dark" to="/">AL Car</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="mx-3 fs-5 text-dark" to="/">Home</Link>
                            <Link className="mx-3 fs-5 text-dark" to="/cars">Car</Link>
                            {/* { user && user.type == "admin" && (<Link className="mx-3 fs-5 text-dark" to="/user">User</Link>)} */}
                        </div>
                        <div className="navbar-nav ms-auto">
                            <Link className="mx-3 fs-5 text-dark" to="/reservasi">Order</Link>
                            { !user  && (<Link className="mx-3 fs-5 text-dark" to="/login">Login</Link>)}
                            { user && (<li className="mx-3 fs-5 text-dark">{user.name}</li>)}
                            { user  && (<Link className="mx-3 fs-5 text-dark" onClick={handleLogout}>Logout</Link>)}
                    `</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
