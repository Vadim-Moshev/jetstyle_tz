import { surroundWith } from "../../helpers/usefulFunctions.js";
import { Link } from "react-router-dom";

import "./index.scss";

const BookItem = ({ id, author, name }) => {
  return (
    <div className="book-item__wrapper">
      <p className="book-item__author">{author}</p>
      <p className="book-item__name">{surroundWith(name, "«", "»")}</p>
      <Link className="book-item__link" to={`/editBook/${id}`}></Link>
    </div>
  );
};

export default BookItem;
