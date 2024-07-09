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
      "https://images.filmibeat.com/webp/wallpapers/desktop/2023/07/mrunal-thakur_73.jpg",
  },
  {
    topic: "cars and coffee",
    writer: "sarthak singh kanwar",
    publisher: "Maviys prints ",
    value: "150cr",
    ud: 2,
    pictu:
      "https://w0.peakpx.com/wallpaper/656/377/HD-wallpaper-mrunal-thakur-telugu-actress.jpg",
    vod: "",
  },
  {
    topic: "cool bikes ",
    writer: "singh kanwar sarthak",
    publisher: "Mototrola cp",
    value: "60cr",
    ud: 3,
    pictu:
      "https://images.filmibeat.com/webp/wallpapers/desktop/2022/08/mrunal-thakur_68.jpg",
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
      <EventExample/>
      {books.map((intel) => {
        console.log(intel);
        return < Book {...intel} key={ intel.ud } />;
      })}
    </section>
  );
}

const EventExample = () => {
  const changeintext = () => {
    console.log("the change is here")
  
  
  }
  const clickester = () => {
    alert("did you clicked this button ");
  };
  return <section>
    <form>
      <h2>Typical Form</h2>
      <br />
      <input type="text" style={{margin: '1rem 0'}}  onChange={changeintext}/>
    </form>
    <button onClick={clickester}>this is the button </button>
  </section>
}

const Book = (props) => {
  const {topic,writer,value,ud,publisher,pictu,vod} = props;
  
  // const { title, author } = props;
  return (
    <article className="book">

      <video src={vod}></video>
      <img src={ pictu} alt={topic} />
      <h2>{topic}</h2>
      <h4>{writer}</h4>
      <h3>{value}</h3>
      <h4>{ud}</h4>
      { publisher}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
