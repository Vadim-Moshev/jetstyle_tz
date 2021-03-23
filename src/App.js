import { Provider } from "mobx-react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";

import BooksList from "./pages/booksList";
import BooksEditor from "./pages/booksEditor";

import stores from "./stores";
import routing from "./stores/routing";

import "./App.css";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routing);

function App() {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <div className="wrapper">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <BooksList activeItemName="booksList" />;
              }}
            />

            <Route
              exact
              path="/addBook"
              render={() => {
                return <BooksEditor activeItemName="booksEditor" />;
              }}
            />

            <Route
              exact
              path="/editBook/:bookId"
              render={(data) => {
                return (
                  <BooksEditor
                    bookId={data.match.params.bookId}
                    activeItemName="booksEditor"
                  />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
