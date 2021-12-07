import { slide as Menu } from 'react-burger-menu';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import './scss/components/_navbar.scss';
import './scss/components/_slide-menu.scss';
import { BOOKINGLINK } from './constants';


function SlideMenu() {
  return (
    <Menu>
      <Link to={{ pathname: BOOKINGLINK }}
        target='_blank'>
        <button className="slide-menu__Book-button">
          Book a table
        </button>
      </Link>
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