import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibrarySvg from "./public/assets/Library.svg";
import {
  faShoppingCart,
  faXmark,
  faBars,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    function openMenu() {
      document.body.classList.add(" menu--open");
    }
  
    function closeMenu() {
      document.body.classList.remove("menu--open");
    }

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
            <a href="/books" className="nav__link">
              Books
            </a>
          </li>
        </ul>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ width: "32px", height: "32px" }}
          />
        </button>

        <li className="nav__icon">
          <i className="nav__link">
            <FontAwesomeIcon icon={faShoppingCart} />
          </i>
        </li>

        <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="#" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/books" className="menu__link">
                Books
              </a>
            </li>
            <li className="menu__list">
              <a className="menu__link" href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;


function useEffect(arg0: () => void, arg1: boolean[]) {
  throw new Error("Function not implemented.");
}


