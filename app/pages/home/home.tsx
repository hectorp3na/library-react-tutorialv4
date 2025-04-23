import { useState } from "react";
import Nav from "../../components/Nav";
import LibrarySvg from "./public/assets/Library.svg";
import UndrawBooksSvg from "./public/assets/Undraw_Books.svg";
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
import Landing from "~/components/Landing";
import Highlights from "~/components/Highlights";
import Featured from "~/components/Featured";
import Discounted from "~/components/Discounted";
import Explore from "~/components/Explore";
import Footer from "~/components/Footer";
// TODO: please remove this import and follow correct procedure for reclering routes - look back in chat/watch the video
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "../home/Books";

// TODO: This is not the place to do routes. Plese declare components here that are to do with home page.

export function Home() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" element={<Home />} />
        <Route path="/books" Component={Books} />
        <Footer />
      </div>
    </Router>
  );
}
