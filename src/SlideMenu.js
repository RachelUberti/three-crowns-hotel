import { slide as Menu } from 'react-burger-menu';
import { BOOKINGLINK } from './constants';
import { SocialIcon } from 'react-social-icons';
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
      <div className="footer__socials">
        <SocialIcon className="footer__socials-button" url="https://www.facebook.com/threecrownshotel" network="facebook" bgColor="#000000" fgColor="#FFFFFF" color="currentColor" style={{ height: 65, width: 65 }} />
        <SocialIcon className="footer__socials-button" url="https://www.instagram.com/threecrownshotel/?hl=en" network="instagram" bgColor="#000000" fgColor="#FFFFFF" style={{ height: 65, width: 65 }} />
      </div>
    </Menu>
  );
}

export default SlideMenu;