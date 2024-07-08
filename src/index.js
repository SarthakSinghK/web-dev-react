import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const friends = ['jakson ka michle','susan','drake remore']
// const newF = [...friends,'sakshi']
// console.log(newF);
const books = [
  {
    topic: "Atomic Habits",
    writer: "James cler",
    publisher: "jhone wick",
    value: "100cr",
    ud: 1,
  },
  {
    topic: "cars and coffee",
    writer: "sarthak singh kanwar",
    publisher: "Maviys prints ",
    value: "150cr",
    ud: 2,
  },{
    topic: "cool bikes ",
    writer: "singh kanwar sarthak",
    publisher: "Mototrola cp",
    value: "60cr",
    ud: 2,
    
  }]


// const names = ["jake", "rock", "chris", "scarlet"];

// const newN = names.map((vegetable) => {
  
//   return <h1>{vegetable}</h1>;
// });

function Booklist() {
  return (
    <section className="booklist">
      {books.map((intel) => {
        console.log(intel);
        return < Book {...intel} key={intel.id}/>;
      })}
    </section>
  );
}

const Book = (props) => {
  const {topic,writer,value} = props;
  
  // const { title, author } = props;
  return (
    <article className="book">
      <img src="ssk" alt={topic} />
      <h2>{topic}</h2>
      <h4>{writer}</h4>
      <h3>{value}</h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
