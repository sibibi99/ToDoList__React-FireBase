import React from 'react'

export default function Nav() {
  return (
    
      <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'black' }}>
        <a className="navbar-brand" href="#">Note App React - Firebase</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav  mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Danh Sách Note</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}
