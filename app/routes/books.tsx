import type { Route } from "./+types/books";
import BooksPage from "../pages/books/books";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "All Books" },
    
  ];
}

export default function Books() {
  return <BooksPage />;
}
