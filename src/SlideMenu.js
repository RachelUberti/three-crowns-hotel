import { slide as Menu } from 'react-burger-menu';
import { BOOKINGLINK } from './constants';
import './scss/components/_navbar.scss';

function SlideMenu() {
  return (
    <Menu>
      <a href="/menuspage">
        <button className=''>Menus</button>
      </a>
      <a href={BOOKINGLINK}>
        <button className=''>Book a table</button>
      </a>
    </Menu>
  );
}

export default SlideMenu;