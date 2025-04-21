import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibrarySvg from "./public/assets/Library.svg";


const Nav = () => {
    return (
        <nav>
 <div className="nav__container">
            <img className="logo" src={LibrarySvg} alt="Library Logo"></img>
            <ul className="nav__links">
              <li className="nav__list">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__list">
                <a href="#" className="nav__link">
                  Books
                </a>
              </li>
        
              </ul>
              <button className="btn__menu" onClick={openMenu}>
              <FontAwesomeIcon icon={faBars} style={{ width: "32px", height: "32px"}}  />
              </button>

              <li className="nav__icon">
                <i className="nav__link">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </i>
              </li>
              

          
            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close"
                onClick={closeMenu}
              >
                  <FontAwesomeIcon icon={faXmark} />
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li className="menu__list">
                  <a
                    href="#features"
                    className="menu__link"
                    onClick={closeMenu}
                  >
                    Books
                  </a>
                </li>
                <li className="menu__list">
                  <a className="menu__link" href="/cart" onClick={closeMenu}>
                    Cart
                  </a>
                </li>
              </ul>
              <button className="btn__menu" onClick={openMenu}>
               <FontAwesomeIcon icon={faBars} style={{ width: "32px", height: "32px"}} />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close"
                onClick={closeMenu}>
                <FontAwesomeIcon icon={faXmark} style={{ width: "32px", height: "32px"}} />
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <a href="#" className="menu__link" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li className="menu__list">
                  <a
                    href="#features"
                    className="menu__link"
                    onClick={closeMenu}
                  >
                    Books
                  </a>
                </li>
                <li className="menu__list">
                  <a
                    className="menu__link no-cursor"
                    href="#"
                    onClick={closeMenu}
                  >
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
    )
}

export default Nav;