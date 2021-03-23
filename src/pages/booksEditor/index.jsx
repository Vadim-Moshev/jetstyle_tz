import { observer, inject } from "mobx-react";
import { useEffect } from "react";

import Menu from "../../components/menu";
import DeleteBookButton from "../../components/deleteBookButton";

import "./index.scss";

const BooksEditor = inject("BooksStore")(
  observer(({ BooksStore, activeItemName, bookId = "" }) => {
    const {
      reset,
      fetchedBook,
      newBook,
      changeBookData,
      saveBook,
      fetchBookById,
      isEdtorModeEnabled,
      enableEditorMode,
      deleteBookById,
    } = BooksStore;

    useEffect(() => {
      enableEditorMode(bookId !== "");

      if (isEdtorModeEnabled) {
        fetchBookById(bookId);
      }
    }, [fetchBookById, bookId, enableEditorMode, isEdtorModeEnabled]);

    useEffect(() => {
      return () => {
        reset();
      };
    }, [reset]);

    const targetBook = isEdtorModeEnabled ? fetchedBook : newBook;

    const submitForm = (event) => {
      event.preventDefault();
      saveBook(bookId);
    };

    const deleteBookButton = isEdtorModeEnabled && (
      <DeleteBookButton onClick={() => deleteBookById(bookId)} />
    );

    return (
      <>
        <Menu className="menu" activeItemName={activeItemName} />
        {deleteBookButton}
        <form noValidate onSubmit={submitForm}>
          <div className="books-editor__labeled-input">
            <p className="books-editor__label">Автор книги:</p>
            <input
              type="text"
              value={targetBook.author}
              className="books-editor__input"
              onChange={(event) => {
                changeBookData(targetBook, "author", event.target.value);
              }}
              autoFocus={true}
            />
          </div>

          <div className="books-editor__labeled-input">
            <p className="books-editor__label">Название книги:</p>
            <input
              type="text"
              value={targetBook.name}
              className="books-editor__input"
              onChange={(event) => {
                changeBookData(targetBook, "name", event.target.value);
              }}
            />
          </div>

          <input
            className="books-editor__submit-button"
            type="submit"
            value="Сохранить"
          />
        </form>
      </>
    );
  })
);

export default BooksEditor;
