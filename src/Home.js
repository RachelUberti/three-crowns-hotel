import React from "react";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import MenusPage from './MenusPage';
import logo from './images/logo.svg';
import burgerImage from './images/burger.png';
import burgerImageCropped from './images/burger-cropped.png';
import heroImage from './images/hero-image.png';
import heroImageCropped from './images/hero-image-cropped.png';
import steakImage from './images/steak.png';
import steakImageCropped from './images/steak-cropped.png';
import spritzImage from './images/spritz.png';
import spritzImageCropped from './images/spritz-cropped.png';
import './scss/main.scss';
import './scss/components/_navbar.scss';
import './scss/components/_about.scss';
import './scss/components/_block-image.scss';
import './scss/components/_block-text.scss';
import './scss/components/_body.scss';
import './scss/components/_footer.scss';
import './scss/components/_hero-image.scss';



function Home() {
  return (
    <div className="Home">
      <header>
        {/* <!-- Nav bar  --> */}
        <div class="navbar">
          <ul class="navbar__list">
            <div class="burgerburger">&#9776;</div>
            <li>
              <Link to="/menuspage"><button class="navbar__button-menu">Menus</button></Link>
            </li>
            <li>
              <a class="navbar__logo" href="/">
                <img src={logo} alt="Three Crowns Hotel Logo" />
              </a>
            </li>
            <li>
              {/* <a href="#book"><button class="navbar__button-book">Book a table</button>
              </a> */}
              <a href="javascript:void(window.open('https://www.bookarestaurant.com/widget/BookingWidgetView/3466/Three-Crowns-Hotel/3/en-AU?PrimaryTextColour=000000&amp;SecondaryTextColour=000000&amp;WidgetBackgroundColour=ffffff&amp;PrimaryWidgetColour=922f37&amp;BackNavigationButtonsColour=ddbea4&amp;SelectableOptionsColour=b79172&amp;CalAvailableDateColour=000000&amp;CalBGAvailableColour=b79172&amp;CalBGUnAvailableColour=ffffff&amp;CalUnAvailableDateColour=cecdcd&amp;CalendarHeaderTextColor=ffffff&amp;CalendarHeaderGridColour=461210&amp;FontName=Verdana%2c+Geneva%2c+sans-serif&amp;HeaderImage=%2fresources.ashx%2fRestaurantImages%2fxoN7BzHdoEGGkHhKW8TyoA.75.400.75.400.100%2fImage%2f3508C0BDCE4BCBA37232E41F09C8587D%2fTCH.PNG&amp;WidgetSpritesID=2&amp;BARLogoID=4&amp;isSpecialRequestsRequired=False&amp;IsAvTimeSlot=False&amp;MinPartySize=2&amp;MaxPartySize=12&amp;IsHideRestaurantTitle=True&amp;IsShowTermsAndConditions=False','_blank','height=600,%20width=400,%20toolbar=no,location=no,resizable=no,menubar=no,scrollbars=yes'%20))"><button class="navbar__button-book">Book a table</button>
              </a>
            </li>
          </ul>

          {/* <!-- The overlay --> */}
          <div id="myNav" class="overlay">
            {/* <!-- Button to close the overlay navigation --> */}
            <a href="#book" class="closebtn">&times;</a>
            {/* <!-- Overlay content --> */}
            <div class="overlay-content">
              <a href="javascript:void(window.open('https://www.bookarestaurant.com/widget/BookingWidgetView/3466/Three-Crowns-Hotel/3/en-AU?PrimaryTextColour=000000&amp;SecondaryTextColour=000000&amp;WidgetBackgroundColour=ffffff&amp;PrimaryWidgetColour=922f37&amp;BackNavigationButtonsColour=ddbea4&amp;SelectableOptionsColour=b79172&amp;CalAvailableDateColour=000000&amp;CalBGAvailableColour=b79172&amp;CalBGUnAvailableColour=ffffff&amp;CalUnAvailableDateColour=cecdcd&amp;CalendarHeaderTextColor=ffffff&amp;CalendarHeaderGridColour=461210&amp;FontName=Verdana%2c+Geneva%2c+sans-serif&amp;HeaderImage=%2fresources.ashx%2fRestaurantImages%2fxoN7BzHdoEGGkHhKW8TyoA.75.400.75.400.100%2fImage%2f3508C0BDCE4BCBA37232E41F09C8587D%2fTCH.PNG&amp;WidgetSpritesID=2&amp;BARLogoID=4&amp;isSpecialRequestsRequired=False&amp;IsAvTimeSlot=False&amp;MinPartySize=2&amp;MaxPartySize=12&amp;IsHideRestaurantTitle=True&amp;IsShowTermsAndConditions=False','_blank','height=600,%20width=400,%20toolbar=no,location=no,resizable=no,menubar=no,scrollbars=yes'%20))"><button class="navbar__button-book">Book a table</button>
              </a>
              <a href={MenusPage}><button class="overlay__button-menu">Menus</button></a>
              <div class="overlay__socials">
                <a href="https://www.facebook.com/threecrownshotel"
                  class="overlay__socials-button fa fa-facebook fa-2x">facebook</a>
                <a href="https://www.instagram.com/threecrownshotel/?hl=en"
                  class="overlay__socials-button fa fa-instagram fa-2x">instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Hero image --> */}
        <div class="hero-image-top">
          <picture>
            <source media="(max-width:400px)" srcset={heroImageCropped} />
            <source srcset={heroImage} />
            <img class="hero-image" src={heroImage} alt="People eating and drinking at a table" />
          </picture>
        </div>
      </header>

      {/* <!-- About section --> */}
      <section>
        <div class="container-fluid px-0">
          <div class="row mx-0">
            <div class="about">
              <div class="about__text">
                <h1 class="about__heading">Great food, booze &amp; people</h1>
                <hr class="about__line" />
                <p class="about__para">
                  A no-frills West Melbourne pub, with a focus on good food, beers, service and connection with our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Two Columns Section --> */}
      <section>
        <div class="container-fluid px-0">
          <div class="row no-gutters mx-0">
            <div class="block col-lg-6 px-0">
              <div class="block__text">
                <h1 class="block__heading">Location</h1>
                <hr class="block__line" />
                <p class="block__para">
                  365 Victoria St, West Melbourne VIC 3003
                </p>
              </div>
            </div>
            <div class="col-lg-6 px-0">
              <picture>
                <source media="(max-width:400px)" srcset={spritzImageCropped} />
                <source srcset={spritzImage} />
                <img class="block-image" src={spritzImage} alt="Aperol Spritz Cocktail" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid px-0">
          <div class="row no-gutters mx-0 flex-column-reverse flex-lg-row">
            <div class="col-lg-6 px-0">
              <picture>
                <source media="(max-width:400px)" srcset={steakImageCropped} />
                <source srcset={steakImage} />
                <img class="block-image" src={steakImage} alt="Red wine jus being poured on a plated steak" />
              </picture>
            </div>
            <div class="block col-lg-6 px-0">
              <div class="block__text">
                <h1 class="block__heading">Open hours</h1>
                <hr class="block__line" />
                <p class="block__para">Monday - Tuesday 4pm - 10pm</p>
                <p class="block__para">Wednesday 12pm - 10pm</p>
                <p class="block__para">Thursday - Saturday 12pm - Late</p>
                <p class="block__para">Sunday 12pm - 11pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container-fluid px-0">
          <div class="row no-gutters mx-0">
            <div class="block col-lg-6 px-0">
              <div class="block__text">
                <h1 class="block__heading">Contact</h1>
                <hr class="block__line" />
                <p class="block__para">info@threecrownshotel.com.au</p>
                <div class="block__phone">
                  <span itemprop="telephone">
                    <a class="block__phone-link" href="tel:03-93265033">03 9326 5033</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-0">
              <picture>
                <source media="(max-width:400px)" srcset={burgerImageCropped} />
                <source srcset={burgerImage} />
                <img class="block-image" src={burgerImage} alt="Burger in a basket with fries" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer>
        <div class="container-fluid px-0">
          <div class="row mx-0">
            <div class="footer">
              <div class="footer__text">
                <h1 class="footer__heading">Come dine with us</h1>
                <div class="footer__line-div" >
                  <hr class="footer__line" />
                </div>
                <p class="footer__hours">Monday - Tuesday 4pm - 10pm</p>
                <p class="footer__hours">Wednesday 12pm - 10pm</p>
                <p class="footer__hours">Thursday - Saturday 12pm - Late</p>
                <p class="footer__hours">Sunday 12pm - 11pm</p>
                <div class="footer__phone">
                  <span itemprop="telephone">
                    <a class="footer__phone-link" href="tel:03-93265033">03 9326 5033</a>
                  </span>
                </div>
                <div class="footer__socials">
                  {/* <a href="https://www.facebook.com/threecrownshotel"
                    class="footer__socials-button fa fa-facebook fa-2x">facebook</a>
                  <a href="https://www.instagram.com/threecrownshotel/?hl=en"
                    class="footer__socials-button fa fa-instagram fa-2x">instagram</a> */}
                  <SocialIcon className="footer__socials-button" url="https://www.facebook.com/threecrownshotel" network="facebook" bgColor="#000000" fgColor="#FFFFFF" />
                  <SocialIcon url="https://www.instagram.com/threecrownshotel/?hl=en" network="instagram" bgColor="#000000" fgColor="#FFFFFF" style={{ height: 60, width: 60, border: '1px solid white', borderRadius: 50, margin: 20 }} />
                </div>
                <p class="footer__credit">UI design by <a href="http://dompooley.com/">Dominique Pooley </a>and engineering by <a href="https://www.linkedin.com/in/racheluberti/">Rachel Uberti</a> ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
