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
            <img className="logo" src={LibrarySvg} alt="Library Logo" />
            <ul className="nav__links">
              <li>
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav__link">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="http://127.0.0.1:5500/books.html"
                  className="nav__link nav__link--primary"
                >
                  Books
                </a>
              </li>
            </ul>
            <button className="btn__menu" onClick={openMenu}>
              <i className="fas fa-bars"></i>
            </button>
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
                    Contact
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
            <div className="row"></div>
          </div>
        </section>

        <section id="recent">
          <div className="container__img">
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
                  <div className="book__price">
                    <span className="book__price--normal">$59.95</span> $14.95
                  </div>
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
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $12.95
                  </div>
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
                  <div className="book__price">
                    <span className="book__price--normal">$59.95</span> $14.95
                  </div>
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
                  <div className="book__price">
                    <span className="book__price--normal">$39.95</span> $22.95
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent">
          <div className="container__latest">
            <div className="row">
              <h2 className="section__title">
                Latest <span className="purple">Books</span>
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
          <div className="container__explore">
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
          <div className="row footer__row">
            <a href="#">
              <img
                className="footer__logo"
                src={LibrarySvg}
                alt="Library Logo"
              />
            </a>
            <div className="footer__social--list">
              <a href="#" className="footer__link">
                Home
              </a>
              <a href="#features" className="footer__link">
                About
              </a>
              <a href="#" className="footer__link no-cursor">
                Contact
              </a>
            </div>
            <div className="footer__copyright">&copy; 2025 Library</div>
          </div>
        </div>
      </footer>
    </>
  );
}
