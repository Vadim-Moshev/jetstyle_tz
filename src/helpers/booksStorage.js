class BooksStorage {
  addBook = (id, book) => {
    localStorage.setItem(id, JSON.stringify(book));
  };

  getAllBooks = () => {
    const localStorageValues = Object.values(localStorage);
    return localStorageValues.map(JSON.parse);
  };

  getBookById = (id) => {
    const books = this.getAllBooks();
    return books.find((book) => book.id === id);
  };

  deleteBookById = (id) => {
    localStorage.removeItem(id);
  };

  changeBookDataById = (id, author, name) => {
    const bookToChange = JSON.parse(localStorage.getItem(id));

    bookToChange.author = author;
    bookToChange.name = name;
    localStorage.setItem(id, JSON.stringify(bookToChange));
  };
}

export default new BooksStorage();
