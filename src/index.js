import React from "react";
import ReactDOM from "react-dom/client";
import books from "./books";
import "./index.css";
import Book from "./Book";
const BookList = () => {
  return (
    <>
      <h1>amazon best seller</h1>
      <section className="book-list">
        {books.map((book, index) => {
          return <Book book={book} index={index} key={`Book${index}`}></Book>;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
