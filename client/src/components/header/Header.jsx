import React from 'react'

const Header = () => {
    return (
        <>
            {/*<!-- ╔══════════════════════════════╗ -->*/}
            {/*<!-- ║         NAVIGATION           ║ -->*/}
            {/*<!-- ╚══════════════════════════════╝ -->*/}
            <nav id="site-nav">
                <div className="nav-inner">
                    <a className="nav-brand" href="/">BookVault</a>

                    {/*<!-- Guest links (shown when NOT logged in) -->*/}
                    <div id="guest-nav">
                        <a href="/catalogue">All Books</a>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>

                    {/*<!-- User links (shown when logged in) -->*/}
                    <div id="user-nav" style={{ display: "none" }}>
                        <a href="/catalogue">All Books</a>
                        <a href="/add-book">Add Book</a>
                        <span id="user-email"></span>
                        <a href="#" id="logout-btn">Logout</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
