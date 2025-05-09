import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

interface BookProps {
  book: {
    url: string;
    title: string;
    salePrice: number | null;
    rating: number;
  };
  originalPrice: number;
}

const Book: React.FC<BookProps> = ({ book, originalPrice }) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a className="book__title--link" href=""> {book.title}</a>
      </div>
      <div className="book__ratings">
        {
            new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon={faStar} key={index} className="book__ratings--star" />)
        }
        {
            !Number.isInteger(book.rating) && <FontAwesomeIcon icon={faStarHalfStroke} className="book__ratings--star" />
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal"> ${originalPrice.toFixed(2)} </span>$
            {book.salePrice.toFixed(2)}
          </>
        ) : (
           <> ${originalPrice.toFixed(2)} </>
        )}
      </div>
    </div>
  );
};

export default Book;
