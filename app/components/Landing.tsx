import React from 'react';
import UndrawBooksSvg from "./public/assets/Undraw_Books.svg";

const Landing = () => {
    return (
<header>
          <div className="header__container">
            <div className="header__description">
              <h1>America's most awarded online library platform</h1>
              <h2>
                Find your favorite book with{" "}
                <span className="purple">Library</span>
              </h2>
              <a href="#features">
                <button className="btn">Browse Books</button>
              </a>
            </div>
            <figure className="header__img--wrapper">
              <img src={UndrawBooksSvg} alt="Books Illustration" />
            </figure>
          </div>
        </header>
    )
}

export default Landing;