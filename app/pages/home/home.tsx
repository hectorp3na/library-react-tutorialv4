import { useState } from "react";
import LibrarySvg from "./public/assets/Library.svg";
import UndrawBooksSvg from "./public/assets/Undraw_Books.svg";

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <section id="landing">
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
              <li className="nav__icon">
                <a href="/cart" className="nav__link">
                <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>

              <button className="btn__menu" onClick={openMenu}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  className="svg-inline--fa fa-bars fa-w-14 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>

              <li className="nav__icon">
                <a className="nav__link" href=".cart">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="shopping-cart"
                    className="svg-inline--fa fa-shopping-cart fa-w-18 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>

            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close"
                onClick={closeMenu}
              >
                <i className="fas fa-times"></i>
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
                <li className="menu_list">
                  <a className="menu__link" href="/cart" onClick={closeMenu}>
                    Cart
                  </a>
                </li>
              </ul>
              <button className="btn__menu" onClick={openMenu}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close"
                onClick={closeMenu}
              >
                <i className="fas fa-times"></i>
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
      </section>

      <main>
        <section id="highlights">
          <div className="container">
            <div className="row">
              <h2 className="section__title">
                Why choose <span className="purple">Library?</span>
              </h2>
              <div className="highlight__wrapper">
                <div className="highlight">
                  <div className="highlight__img">
                    <i className="fas fa-bolt feature__icon"></i>
                  </div>
                  <h3 className="highlight__subtitle">Easy and Quick</h3>
                  <p className="highlight__para">
                    Get access to the book you purchased instantly.
                  </p>
                </div>

                <div className="highlight">
                  <div className="highlight__img>">
                    <i className="fas fa-book-open feature__icon"></i>
                  </div>
                  <h3 className="highlight__subtitle">10,000+ Books</h3>
                  <p className="highlight__para">
                    Library has books in all your favorite categories.
                  </p>
                </div>

                <div className="highlight">
                  <div className="highlight__img">
                    <i className="fas fa-tags feature__icon"></i>
                  </div>
                  <h3 className="highlight__subtitle">Affordable</h3>
                  <p className="highlight__para">
                    Get your hands on popular books for as little as $10.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            
            <div className="row">
              <h2 className="section__title">
                Featured <span className="purple">Books</span>
              </h2>
              <div className="books">
                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/crack the coding interview.png"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Crack the Coding Interview</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">$59.95</div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/atomic habits.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Atomic Habits</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">$39.95</div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/david goggins.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Can't Hurt Me</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">$59.95</div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/deep work.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Deep Work</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">$39.95</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent">
          <div className="container">
            <div className="row">
              <h2 className="section__title">
                Discount <span className="purple">Books</span>
              </h2>
              <div className="books">
                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-1.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">The 10X Rule</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$59.95</span> $14.95
                  </div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-2.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Be Obsseessed Or Be Average</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $12.95
                  </div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-3.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Rich Dad Poor Dad</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$59.95</span> $14.95
                  </div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-4.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Cashflow Quadrant</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $22.95
                  </div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-5.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">48 Laws of Power</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $22.95
                  </div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-6.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">The 5 Second Rule</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $22.95
                  </div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-7.jpg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Your Next Five Moves</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $22.95
                  </div>
                </div>

                <div className="book">
                  <figure className="book__img--wrapper">
                    <img
                      className="book__img"
                      src="./assets/book-8.jpeg"
                      alt=""
                    />
                  </figure>
                  <div className="book__title">Mastery</div>
                  <div className="book__ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $22.95
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="explore">
          <div className="container">
            <div className="row row__column">
              <h2 className="section__title">
                Explore more <span className="purple">Books</span>
              </h2>
              <a href="#features">
                <button className="btn__explore">Browse books</button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="row row__column">
            <a href="#">
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
              <a href="#" className="footer__link">
                About
              </a>
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
    </>
  );
}
