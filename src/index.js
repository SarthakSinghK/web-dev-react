import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function Greeting() {
//   return <h1>this is the greetings to you from me </h1>;
// }

// const firstbook = {
//   title: "Atomic Habits",
//   author: "James cler",
// };
// const secondbook = {
//   title: "cars and coffee",
//   author: "sarthak singh kanwar",
// };


const names =['jake','rock','chris','scarlet']

const newN = names.map((vegetable) => {
  console.log(vegetable);
  return <h1>{vegetable}</h1>
  
})
// console.log();
function Booklist() {
  return (
    <section className="booklist">{newN}
      {/* <Book title={firstbook.title} author={firstbook.author}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at
          reprehenderit vero a cum corporis magni libero quam laudantium
          incidunt. Laudantium, dignissimos! Natus, alias perspiciatis ipsa
          officiis voluptatum beatae sint ex veniam amet quasi iusto?
        </p>
        <a href="https://www.youtube.com/">
          <button> Clickable </button>
        </a>
        ;
      </Book>
      <Book title={secondbook.title} author={secondbook.author} /> */}
    </section>
  );
}

const Book = ({ title, author, children }) => {
  // const { title, author } = props;
  return (
    <article className="book">
      <img src="ssk" alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
