import App from './App';
import logo from './images/logo.svg';
import './scss/main.scss';
import './scss/components/_navbar.scss';
import './scss/components/_about.scss';
import './scss/components/_block-image.scss';
import './scss/components/_block-text.scss';
import './scss/components/_body.scss';
import './scss/components/_footer.scss';
import './scss/components/_hero-image.scss';
import './scss/components/_menu-page-body.scss';
import './scss/components/_menu-page-navbar.scss';
import chickenWingsImage from './images/chicken-wings.png';
import chickenWingsImageCropped from './images/chicken-wings-cropped.png';
import cocktailsImage from './images/cocktails.png';
import cocktailsImageCropped from './images/cocktails-cropped.png';
import foodMenu from './pdfs/food-menu.pdf';
import kidsFoodMenu from './pdfs/kids-food-menu.pdf';
import drinksMenu from './pdfs/drinks-menu.pdf';

var React = require('react');
var { SocialIcon } = require('react-social-icons');

function MenusPage() {
  return (
    <div>
      <header>
        {/* <!-- Nav bar  --> */}
        <nav id="menuNavbar" class="navbar">
          <ul class="navbar__list">
            <div class="burgerburger">&#9776;</div>
            <li>
              <a href={App}><button class="navbar__button-menu">Home</button></a>
            </li>
            <li>
              <a class="navbar__logo" href="/">
                <img src={logo} alt="Three Crowns Hotel Logo" />
              </a>
            </li>
            <li>
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
              <a href={App}><button class="overlay__button-menu">Home</button></a>
              <div class="overlay__socials">
                <a href="https://www.facebook.com/threecrownshotel"
                  class="overlay__socials-button fa fa-facebook fa-2x">facebook</a>
                <a href="https://www.instagram.com/threecrownshotel/?hl=en"
                  class="overlay__socials-button fa fa-instagram fa-2x">instagram</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- About section --> */}
      <section>
        <div id="menuFirstSection" class="container-fluid px-0">
          <div class="row mx-0">
            <div class="about">
              <div class="about__text">
                <h1 class="about__heading">Great food, booze &amp; people</h1>
                <hr class="about__line" />
                <p class="about__para">
                  Located on the corner of Victoria and King Street West Melbourne, the Three Crowns Hotel is a family owned and operated pub that prides itself on offering quality food and booze. Whether you’ve got a hankering for some Southern American classics, lip-smacking burgers, or traditional pub grub, we’ve got you sorted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Two Columns Section --> */}
      <section>
        <div class="container-fluid px-0">
          <div class="row no-gutters mx-0 flex-column-reverse flex-lg-row">
            <div class="col-lg-6 px-0">
              <picture>
                <source media="(max-width:400px)" srcset={chickenWingsImageCropped} />
                <source srcset={chickenWingsImage} />
                <img class="block-image" src={chickenWingsImage} alt="Chicken wings in a basket" />
              </picture>
            </div>
            <div class="menu col-lg-6 px-0">
              <div class="menu__text">
                <p class="menu__para">
                  Pub classics meet American favourites.
                </p>
                <a href={foodMenu} download><button class="menu__button menusPageButtons">View food menu</button></a>
                <a href={kidsFoodMenu} download><button class="menu__button menusPageButtons">View kids food menu</button></a>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section>
        <div class="container-fluid px-0">
          <div class="row no-gutters mx-0">
            <div class="block col-lg-6 px-0">
              <div class="menu__text">
                <p class="menu__para">
                  Beers, cocktails & wines.
                </p>
                <a href={drinksMenu} download><button class="menu__button menusPageButtons">View drinks menu</button></a>              </div>
            </div>
            <div class="col-lg-6 px-0">
              <picture>
                <source media="(max-width:400px)" srcset={cocktailsImageCropped} />
                <source srcset={cocktailsImage} />
                <img class="block-image" src={cocktailsImage} alt="Cocktails in different shaped glasses" />
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
                  <a href="#" class="footer__socials-button fa fa-facebook fa-2x">facebook</a>
                  <a href="#" class="footer__socials-button fa fa-instagram fa-2x">Instagram</a>
                </div>
                <p class="footer__credit">UI design by <a href="http://dompooley.com/">Dominique Pooley </a>and engineering by <a href="https://www.linkedin.com/in/racheluberti/">Rachel Uberti</a> ❤️
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