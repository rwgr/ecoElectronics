<template>
  <div class="app">
    <the-header></the-header>
    <menu-view v-if="menuState"></menu-view>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import MenuView from "./components/MenuView.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    MenuView,
  },
  setup() {
    const store = useStore();
    const menuState = computed(() => store.getters.getMenuState);

    return { menuState };
  },
};
</script>

<style>
/*
      SPACING SYSTEM (px)
      2 / 4 / 8 / 12 / 16 / 24 / 32 / 48(Main component break) / 64 / 80 / 96 / 128

      FONT SIZE - Minor Third
      9.26 / 11.11 / 13.33 / 16.00 / 19.20 / 23.04 / 27.65 / 33.18 / 39.81

Default text: 16px
Font Type: Inter

Main colour: #0a8953 /  alt?: #4abd7e;
Icons: https://ionic.io/ionicons
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  color: #333;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.4;
  background-color: rgba(201, 201, 201, 0.767);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.container {
  min-width: 32rem;
  max-width: 128rem;
  margin: 0 auto;
  padding: 0 3.2rem;
}

.backdrop {
  position: fixed;
  top: 12.7rem;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1000;
}

.heading-primary {
  font-size: 3.98rem;
  font-weight: 600;
  z-index: 1;
}

.heading-secondary {
  font-size: 2.77rem;
  font-weight: 6000;
}

.heading-tertiary {
  font-size: 2.3rem;
  font-weight: 500;
}

.heading-subheading {
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 1.4px;
  font-size: 1.2rem;
  font-weight: 700;
}

.tag {
  padding: 0.2rem 0.4rem;
  font-weight: 600;
  color: #fff;
}

.tag__discount {
  background-color: rgb(216, 2, 2);
}

.tag__exclusive {
  background-color: #cea942;
}

.tag__free-ship {
  background-color: rgb(128, 0, 128);
}

.tag__preorder {
  background-color: #890a41bd;
}

.tag__new {
  background-color: #0a8952cc;
}

.tag__next-day {
  background-color: rgb(168, 0, 168);
}

.header__search--bar:focus,
.footer__tracking-form--input:focus,
.newsletter__email-form--input:focus {
  background-color: rgb(209, 209, 209);
}

.header__search--bar:focus-visible,
.footer__tracking-form--input:focus-visible,
.newsletter__email-form--input:focus-visible {
  outline: none;
}

.button {
  text-transform: uppercase;
  width: 80%;
  color: #fff;
  cursor: pointer;
  align-self: center;
  padding: 0.8rem 1.6rem;
  border: none;
  text-align: center;
  align-self: center;
  text-decoration: none;
  transition: 0.3s ease-in;
}

.button--green {
  background-color: #0a8953;
}

/* .button--gradient {
  background-color: #00bf8f;
  background: linear-gradient(to bottom #00bf8f, black);
} */

.button--grey {
  background-color: #777;
}

.button--red {
  background-color: #890a40;
}

/* .button--gold {
  background-color: #ddb446;
  color: #333;
} */

.button:hover,
.button:active {
  background-color: black;
  text-decoration: underline;
}

.slide-button {
  height: 6rem;
  width: 6rem;
  cursor: pointer;
  z-index: 100;
  color: #fff;
  border-radius: 50%;
}

.slide-button:hover,
.slide-button:active {
  color: #890a40;
  transition: 0.3s ease-out;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

/***********************/

/* Animations */

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveLeft {
  0% {
    transform: translateX(0rem);
  }

  50% {
    transform: translateX(-10rem);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes moveRight {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10rem);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes moveUpSlightly {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-5rem);
  }
}

/***********************/

/* Media Queries */

@media (max-width: 100em) {
  .hero__item--2.hero__item--2.hero__item--2 {
    background-size: 65%;
  }

  .hero__item--3.hero__item--3.hero__item--3 {
    background-size: 62%;
  }
}

/* BELOW 1344px (Smaller desktops) */
@media (max-width: 84em) {
  .hero__item--2.hero__item--2.hero__item--2 {
    background-size: 78%;
  }

  .hero__item--3.hero__item--3.hero__item--3 {
    background-size: 74%;
  }

  .hero__psus-heading-box.hero__psus-heading-box.hero__psus-heading-box {
    width: 95%;
  }
}

/* 1240px */
@media (max-width: 77.5em) {
  html {
    font-size: 56.25%;
    /* background-color: blueviolet; */
  }
}

/* 1131.2px */
@media (max-width: 70.7em) {
  html {
    font-size: 50%;
    /* background-color: red; */
  }

  .hero__item--3.hero__item--3.hero__item--3 {
    background-size: 72%;
  }

  .hero__blog-container {
    border: none;
    margin-left: 1.2rem;
    margin-right: 1.2rem;
  }

  .heading-primary {
    font-size: 3.32rem;
  }

  .about__grid.about__grid.about__grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.2rem;
  }

  .about__background-image--shape-left.about__background-image--shape-left.about__background-image--shape-left {
    left: -7rem;
    top: 0rem;
  }

  .about__background-image--shape-center.about__background-image--shape-center.about__background-image--shape-center {
    width: 50rem;
    top: 38rem;
  }

  .about__background-image--shape-right.about__background-image--shape-right.about__background-image--shape-right {
    right: 0rem;
  }

  .grid__row-1--left {
    grid-column: 1;
    grid-row: 1;
  }

  .grid__row-1--right {
    grid-column: 2;
  }

  .grid__row-2--left {
    grid-column: 1;
    grid-row: 2;
  }

  .grid__row-2--right {
    grid-column: 2;
    grid-row: 2;
  }

  .grid__row-3--left {
    grid-column: 1;
    grid-row: 3;
  }

  .grid__row-3--right {
    grid-column: 2;
  }
}

@media (max-width: 55.7em) {
  html {
    /* background-color: yellow; */
  }

  .hero__item--2.hero__item--2.hero__item--2 {
    background-size: 90%;
  }

  .hero__psus-heading-box.hero__psus-heading-box.hero__psus-heading-box {
    width: 100%;
  }

  .hero__psus-button.hero__psus-button.hero__psus-button {
    justify-self: center;
    align-self: center;
    margin-top: 5rem;
  }

  .header__row--1 .header__search {
    display: none;
  }

  .header__account-textlinks {
    display: none;
  }

  .header__account {
    margin-left: auto;
    margin-right: 2.4rem;
  }

  .header__row--1.header__row--1.header__row--1 {
    padding: 0.6rem 2rem 0 2rem;
  }

  .header__row--3.header__row--3.header__row--3 {
    display: flex;
    padding: 0 0 0.8rem 0;
  }

  .header__row--2.header__row--2.header__row--2 {
    display: none;
  }

  .hero__blog-container.hero__blog-container.hero__blog-container {
    padding: 1rem;
  }

  .hero__text-box.hero__text-box.hero__text-box {
    gap: 1rem;
    padding: 1rem 2rem;
  }

  .hero__desktops.hero__desktops.hero__desktops {
    flex-direction: column;
    margin-top: 0rem;
    gap: 33rem;
  }

  .hero__item--3.hero__item--3.hero__item--3 {
    background-size: 92%;
  }

  .hero__carousel--img {
    height: 21rem;
    align-self: center;
  }

  .deals__price,
  .more-deals__price {
    flex-direction: column;
    gap: 0.2rem;
  }

  .about__grid.about__grid.about__grid {
    row-gap: 4.8rem;
  }

  .footer .footer__awards {
    height: 15rem;
  }
}

@media (max-width: 44em) {
  html {
    /* background-color: aquamarine; */
  }

  .header__icon--search {
    /* background-color: #0a8953; */
  }

  .feature-bar__list.feature-bar__list.feature-bar__list {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.4rem;
    padding: 0.8rem;
  }

  .feature-bar__item.feature-bar__item.feature-bar__item {
    padding: 0;
  }

  .hero__item--1.hero__item--1.hero__item--1 {
    background-size: 95%;
  }

  .hero__item--2.hero__item--2.hero__item--2 {
    background-size: 100%;
  }

  .hero__item--3.hero__item--3.hero__item--3 {
    background-position-y: 50%;
    background-size: 100%;
  }

  .hero__carousel--img {
    height: 18rem;
  }

  .category-bar.category-bar.category-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    row-gap: 1.2rem;
  }

  .finance__text--heading {
    display: none;
  }

  .about__image.about__image.about__image {
    width: 70%;
  }

  .eco-range__item.eco-range__item.eco-range__item {
    background-size: 130%;
    font-size: 2rem;
  }

  .eco-range__item:hover.eco-range__item:hover.eco-range__item:hover {
    background-size: 150%;
  }

  .deals__list.deals__list.deals__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    row-gap: 2.4rem;
    justify-items: center;
  }

  .deals__list--item.deals__list--item.deals__list--item {
    width: 90%;
    min-height: 30rem;
  }

  .deals__price,
  .more-deals__price {
    flex-direction: row;
    gap: 0.2rem;
  }

  .articles {
    flex-direction: column;
    align-items: center;
  }
  .article.article.article {
    border-right: none;
    border-bottom: 2px solid #777;
  }

  .article:first-child {
    margin-top: 1.2rem;
  }

  .article__button {
    width: 40%;
  }

  .more-deals__products.more-deals__products.more-deals__products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  .more-deals__product-item.more-deals__product-item.more-deals__product-item {
    max-width: 50rem;
  }

  .testimonials-news__flex {
    flex-direction: column;
    align-items: center;
  }

  .testimonials.testimonials.testimonials {
    width: 100%;
  }
  .testimonials__heading {
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  .newsletter.newsletter.newsletter {
    border-left: none;
    border-top: 2px solid #333;
    padding: 1.2rem 2.4rem;
  }

  .footer__row-1 {
    flex-wrap: wrap;
  }

  .footer__tracking.footer__tracking.footer__tracking {
    border-left: none;
    border-right: none;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    padding: 2rem 2rem;
  }
}

@media (max-width: 34em) {
  html {
    /* background-color: goldenrod; */
  }

  .hero__carousel--img {
    display: none;
  }

  .hero__item--2.hero__item--2.hero__item--2 {
    background-size: 130%;
  }

  .hero__item--3.hero__item--3.hero__item--3 {
    background-size: 107.8%;
    background-position: 50%;
  }

  .hero__psus-button.hero__psus-button.hero__psus-button {
    margin-top: 6.5rem;
    width: 10rem;
    padding: 0.5rem;
  }

  .eco-range__item.eco-range__item.eco-range__item {
    background-size: 180%;
  }

  .about__background-image--shape-center.about__background-image--shape-center.about__background-image--shape-center {
    width: 50rem;
    top: 55rem;
  }

  .about__background-image--shape-right.about__background-image--shape-right.about__background-image--shape-right {
    top: 25rem;
  }

  .hero__desktops.hero__desktops.hero__desktops {
    gap: 30rem;
  }

  .hero__giveaway-text--p {
    display: none;
  }

  .footer__info-heading {
    font-size: 2.2rem;
  }
}
</style>
