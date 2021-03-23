import { Link } from "react-router-dom";

import "./index.scss";

const Menu = ({ activeItemName }) => {
  const menuData = [
    { caption: "Список книг", href: "/", itemName: "booksList" },
    {
      caption: "Добавить книгу",
      href: "/addBook",
      itemName: "booksEditor",
    },
  ];

  const itemsArray = menuData.map((menuItem, index) => {
    const activeItem = (
      <li key={index} className="menu__item">
        <span>{menuItem.caption}</span>
      </li>
    );

    const nonActiveItem = (
      <li key={index} className="menu__item">
        <Link className="menu__link" to={menuItem.href}>
          {menuItem.caption}
        </Link>
      </li>
    );

    return menuItem.itemName === activeItemName ? activeItem : nonActiveItem;
  });

  return <ul className="menu">{itemsArray}</ul>;
};

export default Menu;
