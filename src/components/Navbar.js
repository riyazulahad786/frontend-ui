import React from 'react'

export default function Navbar() {
  return (
    <div className='px-3 '>
        <nav className="navbar navbar-expand-lg bg-transparent px-2 py-4">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="https://dribbble.com/"><h4>Dribble</h4></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://dribbble.com/hiring">Find talent</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://dribbble.com/shots/popular">Inspiration</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://dribbble.com/learn">Learn design</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://dribbble.com/jobs">Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://dribbble.com/pro">Go Pro</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <button className='btn login mx-3' href="https://dribbble.com/session/new">Log in </button>
        <button className="btn signup mx-3" href="https://dribbble.com/signup/new" type="submit">SignUp</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
