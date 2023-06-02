<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="container footer__row-1">
        <div class="footer__awards">
          <div class="footer__image-container">
            <img
              src="../images/logos/footer/visa.svg"
              alt="visa logo"
              class="footer__image"
            />
          </div>
          <div class="footer__image-container">
            <img
              src="../images/logos/footer/mastercard.svg"
              alt="mastercard logo"
              class="footer__image"
            />
          </div>

          <div class="footer__image-container">
            <img
              src="../images/logos/footer/paypal.svg"
              alt="paypal logo"
              class="footer__image"
            />
          </div>
          <div class="footer__image-container">
            <img
              src="../images/logos/footer/amazon.svg"
              alt="amazon pay logo"
              class="footer__image"
            />
          </div>
          <div class="footer__image-container">
            <img
              src="../images/logos/footer/bitcoin.svg"
              alt=" bitcoin logo"
              class="footer__image"
            />
          </div>
          <div>
            <img
              src="../images/logos/footer/google.svg"
              alt="google logo"
              class="footer__image"
            />
          </div>
        </div>
        <div class="footer__tracking">
          <h3 class="heading-tertiary">Track your delivery</h3>
          <div class="footer__tracking-form">
            <label for="tracking-number" class="footer__tracking-form--label"
              >Tracking Number</label
            >
            <input
              type="text"
              name="tracking-number"
              class="footer__tracking-form--input"
            />
            <div class="footer__image-container"></div>
          </div>
          <div class="footer__tracking-form">
            <label for="postcode" class="footer__tracking-form--label"
              >Postcode</label
            >
            <div class="footer__tracking-form--postcode-container">
              <input
                type="postcode"
                name="postcode"
                class="footer__tracking-form--input footer__tracking-form--postcode"
              />
              <button
                class="button button--red footer__tracking-form--postcode-button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="footer__socials-container">
          <h3 class="heading-tertiary">Our Socials</h3>
          <div class="footer__socials">
            <img
              src="../images/icons/socials/logo-facebook.svg"
              alt="facebook logo"
              class="footer__socials-logo"
            />

            <img
              src="../images/icons/socials/logo-instagram.svg"
              alt="instagram logo"
              class="footer__socials-logo"
            />
            <img
              src="../images/icons/socials/logo-linkedin.svg"
              alt="linkedin logo"
              class="footer__socials-logo"
            />
            <img
              src="../images/icons/socials/logo-twitch.svg"
              alt="twitch logo"
              class="footer__socials-logo"
            />
            <img
              src="../images/icons/socials/logo-twitter.svg"
              alt="twitter logo"
              class="footer__socials-logo"
            />
            <img
              src="../images/icons/socials/logo-youtube.svg"
              alt="youtube logo"
              class="footer__socials-logo"
            />
          </div>
        </div>
      </div>

      <div class="footer__row-2">
        <div class="container footer__info-columns">
          <div class="footer__info-column">
            <h3 class="heading-secondary footer__info-heading">Information</h3>
            <ul>
              <li>
                <a href="#" class="footer__info-column--link"> About us</a>
              </li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Affiliate Program</a
                >
              </li>
              <li><a href="#" class="footer__info-column--link"> Blog</a></li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Careers at ecoElectronics</a
                >
              </li>
              <li>
                <a href="#" class="footer__info-column--link"> Newsletter</a>
              </li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Privacy & Cookies</a
                >
              </li>
              <li>
                <a href="#" class="footer__info-column--link"> Site Map</a>
              </li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Terms & Conditions</a
                >
              </li>
            </ul>
          </div>
          <div class="footer__info-column">
            <h3 class="heading-secondary footer__info-heading">
              Delivery and Returns
            </h3>
            <ul>
              <li>
                <a href="#" class="footer__info-column--link">
                  Delivery Prices</a
                >
              </li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Delivery Tracking</a
                >
              </li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Return an Item</a
                >
              </li>
              <li>
                <a href="#" class="footer__info-column--link"> Return Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer__info-column">
            <h3 class="heading-secondary footer__info-heading">Support</h3>
            <ul>
              <li>
                <a href="#" class="footer__info-column--link"> Contact Us</a>
              </li>
              <li>
                <a href="#" class="footer__info-column--link"> Help Center</a>
              </li>
              <li>
                <a href="#" class="footer__info-column--link"> FAQs</a>
              </li>
            </ul>
          </div>
          <div class="footer__info-column">
            <h3 class="heading-secondary footer__info-heading">Account</h3>
            <ul>
              <li><a href="#" class="footer__info-column--link"> Login</a></li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Create Account</a
                >
              </li>
              <li>
                <a href="#" class="footer__info-column--link">
                  Account Overview</a
                >
              </li>
              <li><a href="#" class="footer__info-column--link"> Basket</a></li>
              <li><a href="#" class="footer__info-column--link"> Orders</a></li>
              <li>
                <a href="#" class="footer__info-column--link"> Returns</a>
              </li>
              <li>
                <a href="#" class="footer__info-column--link"> Wish List</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container more__deals__next-day-text--container">
          <i class="more-deals__next-day-text">
            *Applies to orders made after 7pm. Orders after 7pm will be sent on
            the following working day. Confirmation of your delivery date will
            be given during the order process.
          </i>
        </div>
      </div>
      <div class="footer__row-3">
        <div class="container">
          <p>
            Not for profit, mock website, made as a portfolio project. All
            rights reserved by the companies named - images, and logos, used
            without permission.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: auto;
  background-color: #0a8953;
}

.footer__container {
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
}
.footer__row-1 {
  display: flex;
  gap: 2rem;
  padding: 0 0 4.8rem 0;
  border-bottom: 3px dashed #333;
  width: 80%;
  justify-content: space-evenly;
}

.footer__awards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  column-gap: 1.2rem;
  background-color: #fff;
  border: 0.1rem solid #999;
}

.footer__image-container {
  width: 70%;
  padding: 1rem;
}

.footer__image {
  object-fit: contain;
  width: 10rem;
}
.footer__tracking {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  color: #fff;
  padding: 0 5rem;
}
.footer__tracking-form {
  display: flex;
  flex-direction: column;
}

.footer__tracking-form--label {
}
.footer__tracking-form--input {
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-style: inherit;
}

.footer__tracking-form--postcode-container {
  display: flex;
}

.footer__tracking-form--postcode {
  width: 70%;
}

.footer__tracking-form--postcode-button {
  width: 35%;
  padding: 0.8rem;
}

.footer__socials-container {
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 1.2rem;
}
.footer__socials {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.footer__socials-logo {
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
}
.footer__row-2 {
}
.footer__info-columns {
  margin-top: 4.8rem;
  display: flex;
  gap: 5rem;
  align-items: flex-start;
  justify-content: space-evenly;
  color: #fff;
}
.footer__info-column {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.footer__info-column:first-child {
  border: none;
}
.footer__info-column li {
  list-style: none;
  margin-top: 0.8rem;
}
.footer__info-column--link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
.more__deals__next-day-text--container {
  display: flex;
  justify-content: center;
}
.more-deals__next-day-text {
  font-size: 1.2rem;
  margin-top: 2.4em;
  display: inline-block;
  margin-bottom: 0.6rem;
  font-weight: 600;
}
.footer__row-3 {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1.2rem;
}
</style>
