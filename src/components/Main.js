function Main() {
  return (
    <div>
     <header>
    {/* <!-- Nav bar  --> */}
    <nav id="menuNavbar" class="navbar">
      <ul class="navbar__list">
        <div class="burgerburger">&#9776;</div>
        <li>
          <a href="index.html"><button class="navbar__button-menu">Home</button></a>
        </li>
        <li>
          <a class="navbar__logo" href="/">
            <img src="images/logo.svg" alt="Three Crowns Hotel Logo" />
          </a>
        </li>
        <li>
          <a href="#book"><button class="navbar__button-book">Book a table</button>
          </a>
        </li>
      </ul>

      {/* <!-- The overlay --> */}
      <div id="myNav" class="overlay">
        {/* <!-- Button to close the overlay navigation --> */}
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        {/* <!-- Overlay content --> */}
        <div class="overlay-content">
          <a href="#book"><button class="overlay__button-book">Book a table</button>
          </a>
          <a href="index.html"><button class="overlay__button-menu">Home</button></a>
          <div class="overlay__socials">
            <a href="https://www.facebook.com/threecrownshotel" target="_blank"
              class="overlay__socials-button fa fa-facebook fa-2x"></a>
            <a href="https://www.instagram.com/threecrownshotel/?hl=en" target="_blank"
              class="overlay__socials-button fa fa-instagram fa-2x"></a>
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
            <h1 class="about__heading">Great food, booze & people</h1>
            <hr class="about__line" />
            <p class="about__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              maxime sit asperiores consectetur temporibus. Aut doloremque
              quisquam placeat aperiam praesentium, voluptatem neque dolor
              vero officia. Obcaecati hic magnam ut. Eius?.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Two Columns Section --> */}
  <section>
    <div class="container-fluid px-0">
      <div class="row no-gutters flex-column-reverse flex-lg-row">
        <div class="col-lg-6">
          <picture>
            <source media="(max-width:400px)" srcset="images/chicken-wings-cropped.png" />
            <source srcset="images/chicken-wings.png" />
            <img class="block-image" src="images/chicken-wings.png" alt="Chicken wings in a basket" />
          </picture>
        </div>
        <div class="menu col-lg-6">
          <div class="menu__text">
            <p class="menu__para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. ntium
              velit aperiam repellat!
            </p>
            <button class="menu__button"
              onclick="window.location.href='https:/drive.google.com/file/d/15f-QJsmNq4uZlGe4fe39t4LrntfrgPHT/view?usp=sharing'">View
              food menu</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container-fluid px-0">
      <div class="row no-gutters">
        <div class="block col-lg-6">
          <div class="menu__text">
            <p class="menu__para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. ntium
              velit aperiam repellat!
            </p>
            <button class="menu__button">View drinks menu</button>
          </div>
        </div>
        <div class="col-lg-6">
          <picture>
            <source media="(max-width:400px)" srcset="images/cocktails-cropped.png" />
            <source srcset="images/cocktails.png" />
            <img class="block-image" src="images/cocktails.png" alt="Cocktails in different shaped glasses" />
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
            <hr class="footer__line" />
            <p class="footer__hours">Tues: 4pm to late</p>
            <p class="footer__hours">Wed to Sun: 12pm to late</p>
            <div class="footer__phone">
              <span itemprop="telephone">
                <a class="footer__phone-link" href="tel:03-93265033">03 9326 5033</a>
              </span>
            </div>
            <div class="footer__socials">
              <a href="#" target="_blank" class="footer__socials-button fa fa-facebook fa-2x"></a>
              <a href="#" target="_blank" class="footer__socials-button fa fa-instagram fa-2x"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}
export default Main;