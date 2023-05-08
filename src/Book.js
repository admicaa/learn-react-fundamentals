const Book = ({ book, index }) => {
  const { title, image, author } = book;

  return (
    <article className="book">
      <span className="count">#{index + 1}</span>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
