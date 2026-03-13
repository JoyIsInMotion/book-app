import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        {/* <!-- Navigation -->*/}
        <h1><Link className="home" to="#">BookVault</Link></h1 >
        <nav>
          <Link to="#">All Books</Link>
          {/* <!-- Logged-in users -->*/}
          <div id="user">
              <Link to="#">Add Book</Link>
              <Link to="#">Logout</Link>
      </div >
      {/* <!-- Guest users -->*/}
      < div id="guest" >
        <Link to="/login" > Login</Link >
        <Link to="/register" > Register</Link >
      </div >
    </nav >
        </header >
        </>
    )
}

export default Header
