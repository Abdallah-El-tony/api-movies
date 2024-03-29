import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">SHOP MOVIES</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addNewMovie/:0">Add New Movie</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
  )
}

export default Navbar