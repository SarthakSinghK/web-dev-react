import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import book from './books'
import Book from "./Book";

// there is only one default export in react per file that is the whole pt of using react
function Booklist() {
  return (
    <>
      <h1>Kitab Ghar</h1>
      <section className="booklist">
        {book.map((intel, index) => {
          return <Book {...intel} key={intel.ud} number={index} />;
        })}
      </section>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
