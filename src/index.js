import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    topic: "Atomic Habits",
    writer: "James cler",
    publisher: "jhone wick",
    value: "100cr",
    ud: 1,
    pictu:
      "https://i.pinimg.com/564x/71/07/dd/7107dd1d9fe3f4e7b98f38424c356a9c.jpg",
  },
  {
    topic: "cars and coffee",
    writer: "sarthak singh kanwar",
    publisher: "Maviys prints ",
    value: "150cr",
    ud: 2,
    pictu:
      "https://wallpapers.com/images/featured-small/mclaren-js7crb2zb9wbk7zk.webp",
    vod: "",
  },
  {
    topic: "cool bikes ",
    writer: "singh  sarthak",
    publisher: "Mototrola cp",
    value: "60cr",
    ud: 3,
    pictu:
      "https://w0.peakpx.com/wallpaper/265/20/HD-wallpaper-mclaren-p1-power-mclaren-p1-drift.jpg",
    vod: "",
  },
];

function Booklist() {
  const someVal = "yellow yellow yellow"
  const displayVal = () => {
    console.log(someVal)
  }
  return (
    <section className="booklist">
      {books.map((intel) => {
        return <Book {...intel} key={intel.ud} potato={displayVal} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { topic, writer,pictu,potato } = props;
  const displaytitle = () => {
    console.log(topic);
    
  }
  return (
    <article className="book">
      <img src={pictu} alt={topic} />
      <button onClick={potato}>title in the log</button>
      <h2>{topic}</h2>
      <h4>{writer}</h4>
      <h1>{ potato}</h1>
      
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
