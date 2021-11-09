import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { MenuContext } from "react-flexible-sliding-menu";
import * as AiIcons from "react-icons/ai";

function Menu() {
  const { closeMenu } = useContext(MenuContext);
  return (
    <div className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/menuspage"><button className="navbar__button-menu">Menus</button></Link>
          </li>
          <li>
            <button className="navbar__button-book">Book a table</button>
          </li>
        </ul>
      </nav>
      <AiIcons.AiOutlineClose onClick={closeMenu} className="menuClose" />
    </div>
  );
}

export default Menu;
