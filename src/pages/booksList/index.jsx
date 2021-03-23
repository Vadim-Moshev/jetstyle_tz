import { observer, inject } from "mobx-react";
import { useEffect } from "react";

import Menu from "../../components/menu";
import BookItem from "../../components/bookItem";

import "./index.scss";

const BooksList = inject("BooksStore")(
  observer(({ BooksStore, activeItemName }) => {
    const { books, fetchBooks } = BooksStore;

    useEffect(() => {
      fetchBooks();
    }, [fetchBooks]);

    const bookItems = books.map(({ id, author, name }) => {
      return <BookItem key={id} id={id} author={author} name={name} />;
    });

    return (
      <>
        <Menu className="menu" activeItemName={activeItemName} />
        <div className="books-list">{bookItems}</div>
      </>
    );
  })
);

export default BooksList;
