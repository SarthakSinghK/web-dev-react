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
  const getid = (id) => {
    const book = books.find((amd) => amd.ud === id)
    console.log(book);
  }
  // getid(3)
  return (
  
    <section className="booklist">
      {books.map((intel) => {
        return <Book {...intel} key={intel.ud} bookget={getid} />;
      })}
     
    </section>
  );
}

const Book = (props) => {
  const { topic, writer, pictu, bookget , ud} = props;
  // console.log(props);

  const getone = () => {
    bookget(ud)
  }
  return (
    <article className="book">
      <img src={pictu} alt={topic} />
      <button onClick={getone}>title in the log</button>
      <h2>{topic}</h2>
      <h4>{writer}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
