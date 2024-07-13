const Book = (props) => {
  const { topic, writer, pictu,number } = props;
  // console.log(props);
  return (
    <div>
      <article className="book">
        <span className="number">{`# ${number+1}`}</span>
        <img src={pictu} alt={topic} />
        <h2>{topic}</h2>
        <h4>{writer}</h4>
      </article>
    </div>
  );
};

export default Book;