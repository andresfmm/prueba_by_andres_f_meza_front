import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavbarComponent = () => {
  return (
    <>
    
       <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <Link to="/" className="nav-link active text-white">Prueba By Andres Meza -- </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link  text-white">Consumir api</Link>
                </li>
                <li className="nav-item">
                  <Link to="/crud" className="nav-link  text-white">Crud</Link>
                </li>
                <li className="nav-item">
                  <NavLink to="/lista-crud" className="nav-link  text-white">Lista crud</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}
