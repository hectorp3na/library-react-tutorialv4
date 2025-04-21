import React from 'react';
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
  import Highlight from "./ui/Highlight";

const Highlights = () => {
    return (
        <section id="highlights">
          <div className="container">
            <div className="row">
              <h2 className="section__title">
                Why choose <span className="purple">Library?</span>
              </h2>
              <div className="highlight__wrapper">
                <Highlight icon= { <i className="fas__fa-bolt__feature__icon"> <FontAwesomeIcon 
                icon={faBolt} /> </i> } 
                title= "Easy and Quick"  
                para= "Get access to the book you purchased online instantly."
                /> 
              </div>
              <div className="highlight__wrapper">
                <Highlight icon= { <i className="fas__fa-book-open__feature__icon"> <FontAwesomeIcon 
                icon={faBookOpen} /> </i> } 
                title= "10,000+ Books"  
                para= "  Library has books in all your favorite categories."
                /> 
              </div>
              <div className="highlight__wrapper">
                <Highlight icon= { <i className="fas__fa-tags__feature__icon"> <FontAwesomeIcon 
                icon={faTags} /> </i> } 
                title= "Affordable"  
                para= " Get your hands on popular books for as little as $10."
                /> 
              </div>
            </div>
          </div>
        </section>
    );
};

export default Highlights;