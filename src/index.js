import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function Greeting() {
//   return <h1>this is the greetings to you from me </h1>;
// }

const books = [
  {
    topic: "Atomic Habits",
    writer: "James cler",
    ud: 1,
  },
  {
    topic: "cars and coffee",
    writer: "sarthak singh kanwar",
    ud: 2,
  },
];

const names = ["jake", "rock", "chris", "scarlet"];

const newN = names.map((vegetable) => {
  // console.log(vegetable);
  return <h1>{vegetable}</h1>;
});
// console.log();
function Booklist() {
  return (
    <section className="booklist">
      {books.map((intel) => {
        const { topic, writer, ud } = intel; // destructuring intel that is basically the array which is possible because of map func
        console.log(intel.author);
        return (
          <Book title={topic} author={writer} key={ud} id={ud} />

          // <div>
          //   <h2>{intel.author}</h2>
          // </div>
        );
      })}
    </section>
  );
}

const Book = ({ title, author, children,id }) => {
  // const { title, author } = props;
  return (
    <article className="book">
      <img src="ssk" alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h3>{id}</h3>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
