import { makeObservable, observable, set, action, runInAction } from "mobx";

import booksStorage from "../helpers/booksStorage";
import routing from "./routing";

const BOOK_STRUCTURE = {
  id: "",
  author: "",
  name: "",
};

class BooksStore {
  constructor() {
    this.reset();

    makeObservable(this, {
      books: observable,
      fetchedBook: observable,
      newBook: observable,
      isEdtorModeEnabled: observable,

      reset: action,
      fetchBooks: action,
      changeBookData: action,
      saveBook: action,
      fetchBookById: action,
      enableEditorMode: action,
    });
  }

  books = [];
  isEdtorModeEnabled = false;

  reset = () => {
    this.fetchedBook = { ...BOOK_STRUCTURE };
    this.newBook = { ...BOOK_STRUCTURE };
  };

  enableEditorMode = (flag) => {
    this.isEdtorModeEnabled = flag;
  };

  changeBookData = (object, field, value) => {
    set(object, field, value);
  };

  fetchBooks = () => {
    this.books = booksStorage.getAllBooks();
  };

  fetchBookById = (id) => {
    this.fetchedBook = booksStorage.getBookById(id);
  };

  deleteBookById = (bookId) => {
    booksStorage.deleteBookById(bookId);

    runInAction(() => {
      routing.push("/");
    });
  };

  saveBook = (bookId) => {
    if (this.isEdtorModeEnabled) {
      const { author, name } = this.fetchedBook;
      booksStorage.changeBookDataById(bookId, author, name);
    } else {
      const newBookId = new Date().getTime().toString();
      this.newBook.id = newBookId;
      booksStorage.addBook(newBookId, this.newBook);
    }

    runInAction(() => {
      routing.push("/");
    });
  };
}

export default new BooksStore();
