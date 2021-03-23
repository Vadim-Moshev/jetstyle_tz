import "./index.scss";

const DeleteBookButton = ({ bookId, onClick }) => {
  return (
    <button className="delete-book-button" onClick={onClick}>
      Удалить эту книгу
    </button>
  );
};

export default DeleteBookButton;
