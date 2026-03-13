import React from 'react'

const Home = () => {
    return (
        <div>
            {/* <!-- Home Page --> */}
            <section id="welcome-world">

                <div className="welcome-message">
                    <h2>Discover your next</h2>
                    <h3>Favourite Read</h3>
                </div>
                <img src="./images/hero-books.png" alt="hero"/>

                    <div id="home-page">
                        <h1>Recent Picks</h1>

                        {/* <!-- Display div: with information about every book (if any) --> */}
                        <div className="book">
                            <div className="image-wrap">
                                <img src="./images/book-dune.jpg"/>
                            </div>
                            <h3>Dune</h3>
                            <div className="genre-tag">
                                <span>Science Fiction</span>
                            </div>
                            <div className="data-buttons">
                                <a href="#" className="btn details-btn">Details</a>
                            </div>
                        </div>

                        <div className="book">
                            <div className="image-wrap">
                                <img src="./images/book-dracula.jpg"/>
                            </div>
                            <h3>Dracula</h3>
                            <div className="genre-tag">
                                <span>Gothic Horror</span>
                            </div>
                            <div className="data-buttons">
                                <a href="#" className="btn details-btn">Details</a>
                            </div>
                        </div>

                        <div className="book">
                            <div className="image-wrap">
                                <img src="./images/book-gatsby.jpg"/>
                            </div>
                            <h3>The Great Gatsby</h3>
                            <div className="genre-tag">
                                <span>Classic Fiction</span>
                            </div>
                            <div className="data-buttons">
                                <a href="#" className="btn details-btn">Details</a>
                            </div>
                        </div>

                        {/* {<!-- Display paragraph: If there are no books -->} */}
                        <p className="no-articles">No books yet</p>
                    </div>
            </section>
        </div>
    )
}

export default Home
