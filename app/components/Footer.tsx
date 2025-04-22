import React from "react";
import LibrarySvg from "./public/assets/Library.svg";

const Footer = () => {
    return (
<footer>
        <div className="container">
          <div className="row row__column">
            <a href="/">
              <img
                className="footer__logo"
                src={LibrarySvg}
                alt="Library Logo"
              />
            </a>
            <div className="footer__list">
              <a href="#" className="footer__link">
                Home
              </a>
             <span className="footer__link no-cursor">
                About
             </span>
              <a href="/books" className="footer__link">
                Books
              </a>
              <a href="/cart" className="footer__link">
                Cart
              </a>
            </div>
            <div className="footer__copyright">&copy; 2025 Library</div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;