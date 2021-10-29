import { slide as Menu } from 'react-burger-menu';
import { BOOKINGLINK } from './constants';
import './scss/components/_navbar.scss';
import './scss/components/_slide-menu.scss';


function SlideMenu() {
  return (
    <Menu>
      <a href={BOOKINGLINK}>
        <button className='slide-menu__Book-button'>Book a table</button>
      </a>
      <a href="/menuspage">
        <button className='slide-menu__Menus-button'>Menus</button>
      </a>
    </Menu>
  );
}

export default SlideMenu;