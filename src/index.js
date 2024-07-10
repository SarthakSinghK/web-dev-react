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

// const names = ["jake", "rock", "chris", "scarlet"];

// const newN = names.map((vegetable) => {

//   return <h1>{vegetable}</h1>;
// });

function Booklist() {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((intel) => {
        console.log("s");
        return <Book {...intel} key={intel.ud} />;
      })}
    </section>
  );
}
const EventExample = () => {
  const changeintext = (e) => {
    console.log("the change is here");
    console.log(e.target.name);
    // console.log(e.target.value.sa);
    console.log(e.target.type);
    let a = (e.target.value)
    console.log(a);
  };
  const clickester = () => {
    alert("did you clicked this button ");
  };
  const submitkb = (l) => {
    l.preventDefault()
    console.log("hello ji namaste ji kaam ho gya ji");
  };
  return (
    <section>
      <form onSubmit={submitkb}>
        <h2>Typical Form</h2>
        <br />
        <input
          name="intup"
          type="text"
          style={{ margin: "1rem 0" }}
          onChange={changeintext}
        />
      <div>
        <button type="submit">hogya</button>
      </div>
      <button onClick={clickester}>this is the button </button>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { topic, writer, value, ud, publisher, pictu, vod } = props;

  // const { title, author } = props;
  return (
    <article className="book">
      <video src={vod}></video>
      <img src={pictu} alt={topic} />
      <h2>{topic}</h2>
      <h4>{writer}</h4>
      <h3>{value}</h3>
      <h4>{ud}</h4>
      {/* <h1>{EventExample.a}</h1> */}
      {publisher}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
