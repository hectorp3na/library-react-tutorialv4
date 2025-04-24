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




export function Home() {
  return (
   <>
     <Nav />
     <Landing />
     <Highlights />
     <Featured />
     <Discounted />
     <Explore />
     <Footer />
   </>
  
  );
}
