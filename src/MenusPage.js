import React from "react";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Helmet } from 'react-helmet';
import logo from './images/logo.svg';
import chickenWingsImage from './images/chicken-wings.png';
import chickenWingsImageCropped from './images/chicken-wings-cropped.png';
import cocktailsImage from './images/cocktails.png';
import cocktailsImageCropped from './images/cocktails-cropped.png';
import foodMenu from './pdfs/food-menu.pdf';
import kidsFoodMenu from './pdfs/kids-food-menu.pdf';
import drinksMenu from './pdfs/drinks-menu.pdf';
import './scss/main.scss';
import './scss/components/_navbar.scss';
import './scss/components/_slide-menu.scss';
import './scss/components/_about.scss';
import './scss/components/_block-image.scss';
import './scss/components/_block-text.scss';
import './scss/components/_body.scss';
import './scss/components/_footer.scss';
import './scss/components/_hero-image.scss';
import { BOOKINGLINK } from './constants';
import SlideMenu from "./SlideMenu";


function MenusPage() {
  return (
    <div className="MenusPage">
      <Helmet>
        <title>Menus Page</title>
        <meta
          name="description"
          content="Pub classics meet American favourites."
        />
      </Helmet>
      <div className='burger-menu'>
        <SlideMenu />
      </div>

      <header>
        {/* <!-- Nav bar  --> */}
        <nav id="menuNavbar" className="navbar">
          <div className='navbar__main-menu'>
            <div className='navbar__sub-main-menu'>
              <div>
                <Link to="/"><button className="navbar__button-menu">Home</button></Link>
              </div>
              <div>
                <a className="navbar__logo" href="/">
                  <img src={logo} alt="Three Crowns Hotel Logo" />
                </a>
              </div>
              <div>
                <Link to={{ pathname: BOOKINGLINK }}
                  target='_blank'>
                  <button className="navbar__button-book">
                    Book a table
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- About section --> */}
      <section>
        <div id="menuFirstSection" className="container-fluid px-0">
          <div className="row mx-0">
            <div className="about">
              <div className="about__text">
                <h1 className="about__heading">Great food, booze &amp; people</h1>
                <hr className="about__line" />
                <p className="about__para">
                  Located on the corner of Victoria and King Street West Melbourne, the Three Crowns Hotel is a family owned and operated pub that prides itself on offering quality food and booze. Whether you’ve got a hankering for some Southern American classics, lip-smacking burgers, or traditional pub grub, we’ve got you sorted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Two Columns Section --> */}
      <section>
        <div className="container-fluid px-0">
          <div className="row no-gutters mx-0 flex-lg-row">
            <div className="col-lg-6 px-0">
              <picture>
                <source media="(max-width:450px)" srcSet={chickenWingsImageCropped} />
                <source srcSet={chickenWingsImage} />
                <img className="block-image" src={chickenWingsImage} alt="Chicken wings in a basket" />
              </picture>
            </div>
            <div className="block col-lg-6 px-0">
              <div className="block__text">
                <p className="block__para">
                  Pub classics meet American favourites.
                </p>
                <a href={foodMenu} download><button className="block__button-book">View food menu</button></a>
                <a href={kidsFoodMenu} download><button id="kidsMenu" className="block__button-book">View kids food menu</button></a>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section>
        <div className="container-fluid px-0">
          <div id="block-direction" className="row no-gutters mx-0">
            <div className="block col-lg-6 px-0">
              <div className="block__text">
                <p className="block__para">
                  Beers, cocktails & wines.
                </p>
                <a href={drinksMenu} download ><button className="block__button-book">View drinks menu</button></a>
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <picture>
                <source media="(max-width:450px)" srcSet={cocktailsImageCropped} />
                <source srcSet={cocktailsImage} />
                <img className="block-image" src={cocktailsImage} alt="Cocktails in different shaped glasses" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer>
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="footer">
              <div className="footer__text">
                <h1 className="footer__heading">Come dine with us</h1>
                <div className="footer__line-div" >
                  <hr className="footer__line" />
                </div>
                <p className="footer__hours">Monday Closed</p>
                <p className="footer__hours">Tuesday 4 pm - 10 pm</p>
                <p className="footer__hours">Wednesday to Saturday 12 pm - Late</p>
                <p className="footer__hours">Sunday 12 pm - 11 pm</p>
                <div className="footer__phone">
                  <span itemProp="telephone">
                    <a className="footer__phone-link" href="tel:03-93265033">03 9326 5033</a>
                  </span>
                </div>
                <div className="footer__socials">
                  <SocialIcon className="footer__socials-button" url="https://www.facebook.com/threecrownshotel" network="facebook" bgColor="#000000" fgColor="#FFFFFF" color="currentColor" style={{ height: 65, width: 65 }} />
                  <SocialIcon className="footer__socials-button" url="https://www.instagram.com/threecrownshotel/?hl=en" network="instagram" bgColor="#000000" fgColor="#FFFFFF" style={{ height: 65, width: 65 }} />
                </div>
                <p className="footer__credit">Design by <a href="http://dompooley.com/">Dominique Pooley </a>and engineering by <a href="https://www.linkedin.com/in/racheluberti/">Rachel Uberti</a> ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default MenusPage;