<template>
  <div class="container">
    <div class="deals">
      <div class="deals__heading">
        <h2 class="heading-secondary">Daily Deals</h2>
        <!-- <p class="deals__heading--timer">New Deals at 00:00 GMT</p> -->
      </div>
      <ul class="deals__list">
        <ChevronLeftIcon
          class="slide-button deals__slide-button--left"
          @click.prevent="changeDeals"
        ></ChevronLeftIcon>
        <li class="deals__list--item" v-if="dealsDisplay === true">
          <img
            src="../images/deals/eco-psu.webp"
            alt="Image of EVGA 1300W Power Supply Unit"
            class="deals__product-image"
          />
          <p class="deals__product-name">
            EVGA SuperNOVA 1300 GT, 80 Plus Gold 1300W, Fully Modular, Eco Mode
            with FDB Fan
          </p>
          <div class="deals__product-rating">
            <StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><a href="#" class="deals__product-rating--number">( 62 )</a>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£148.99</p>
              <p class="deals__price--number">£134.09</p>
            </div>
            <ul class="deals__tags">
              <li class="tag tag__discount">Save 10%</li>
              <li class="tag tag__free-ship">Free Shipping</li>
            </ul>
          </div>

          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>

        <li class="deals__list--item" v-if="dealsDisplay === true">
          <img
            src="../images/deals/giga-graphics.webp"
            class="deals__product-image"
            alt="Image of GIGABYTE 3070 Graphics Card"
          />

          <p class="deals__product-name">
            GIGABYTE Gaming OC GeForce RTX 3070 8GB GDDR6 PCI Express 4.0 ATX
            Video Card GV-N3070GAMING OC-8GD
          </p>
          <div class="deals__product-rating">
            <StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><a href="#" class="deals__product-rating--number">( 35 )</a>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£671.87</p>
              <p class="deals__price--number">£604.68</p>
            </div>

            <ul class="deals__tags">
              <li class="tag tag__discount">Save 10%</li>
              <li class="tag tag__next-day">Free Next Day*</li>
            </ul>
          </div>
          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>
        <li class="deals__list--item" v-if="dealsDisplay === true">
          <img
            src="../images/deals/asus-monitor.webp"
            alt="Photo of ASUS 27 inch Monitor"
            class="deals__product-image"
          />
          <p class="deals__product-name">
            ASUS VA27EHE 27" Full HD 1920 x 1080 75Hz VGA HDMI Adaptive-Sync
            Asus Eye Care LED Backlit IPS Monitor
          </p>
          <div class="deals__product-rating">
            <StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><a href="#" class="deals__product-rating--number">( 121 )</a>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£158.99</p>
              <p class="deals__price--number">£147.86</p>
            </div>

            <ul class="deals__tags">
              <li class="tag tag__discount">Save 7%</li>
              <li class="tag tag__free-ship">Free Shipping</li>
            </ul>
          </div>

          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>
        <li class="deals__list--item" v-if="dealsDisplay === true">
          <img
            src="../images/deals/omen-desktop.webp"
            class="deals__product-image"
            alt="Image of HP Omen gaming desktop PC"
          />

          <p class="deals__product-name">
            HP OMEN RTX 3070Ti AMD Ryzen 7 3.8GHz 16GB 2TB HDD 512GB SSD Gaming
            Desktop PC
          </p>
          <div class="deals__product-rating">
            <div class="deals__product-rating">
              <StarIcon class="deals__product-rating--star"></StarIcon
              ><StarIcon class="deals__product-rating--star"></StarIcon
              ><StarIcon class="deals__product-rating--star"></StarIcon
              ><StarIcon class="deals__product-rating--star"></StarIcon
              ><StarIcon class="deals__product-rating--star"></StarIcon
              ><a href="#" class="deals__product-rating--number">( 3 )</a>
            </div>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£999.99</p>
              <p class="deals__price--number">£929.99</p>
            </div>

            <ul class="deals__tags">
              <li class="tag tag__discount">Save 7%</li>
              <li class="tag tag__next-day">Free Next Day*</li>
            </ul>
          </div>

          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>
        <li class="deals__list--item" v-if="dealsDisplay === true">
          <img
            src="../images/deals/amd-processor.webp"
            alt="Image of AMD Ryzen Processor"
            class="deals__product-image"
          />
          <p class="deals__product-name">
            AMD Ryzen 5 5600G - Ryzen 5 5000 G-Series Cezanne (Zen 3) 6-Core 3.9
            GHz Socket AM4 65W AMD Radeon Graphics Desktop Processor
          </p>
          <div class="deals__product-rating">
            <StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><a href="#" class="deals__product-rating--number">( 24 )</a>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£194.40</p>
              <p class="deals__price--number">£174.96</p>
            </div>

            <ul class="deals__tags">
              <li class="tag tag__discount">Save 10%</li>
              <li class="tag tag__free-ship">Free Shipping</li>
            </ul>
          </div>
          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>
        <li class="deals__list--item" v-if="dealsDisplay === false">
          <img
            src="../images/deals/lenovo-laptop.webp"
            alt="Image of Lenovo Legion 5 Gaming Laptop"
            class="deals__product-image"
          />
          <p class="deals__product-name">
            Lenovo Legion 5 NVIDIA RTX 3070 Ti, 16GB, 15.6" QHD IPS 165Hz, RYZEN
            7-6800H Gaming Laptop
          </p>
          <div class="deals__product-rating">
            <StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><a href="#" class="deals__product-rating--number">( 1 )</a>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£1,699.99</p>
              <p class="deals__price--number">£1580.99</p>
            </div>
            <ul class="deals__tags">
              <li class="tag tag__discount">Save 7%</li>
              <li class="tag tag__next-day">Free Next Day*</li>
            </ul>
          </div>

          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>
        <li class="deals__list--item" v-if="dealsDisplay === false">
          <img
            src="../images/deals/corsair-ram.webp"
            alt="Image of Corsair Vengeance 64GB DDR4 Ram"
            class="deals__product-image"
          />
          <p class="deals__product-name">
            Corsair Vengeance LPX 64GB (2x32GB) DDR4 PC4-25600C16 3200MHz Dual
            Channel Kit (Black)
          </p>
          <div class="deals__product-rating">
            <p class="deals__product-rating--noreview">No customer reviews</p>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£389.99</p>
              <p class="deals__price--number">£331.49</p>
            </div>
            <ul class="deals__tags">
              <li class="tag tag__discount">Save 15%</li>
              <li class="tag tag__free-ship">Free Shipping</li>
            </ul>
          </div>

          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>

        <li class="deals__list--item" v-if="dealsDisplay === false">
          <img
            src="../images/deals/asus-motherboard.webp"
            alt="Image of Asus TUF Gaming Motherboard"
            class="deals__product-image"
          />
          <p class="deals__product-name">
            Asus TUF Gaming B560-Plus WIFI (Socket LGA 1200) ATX Motherboard
          </p>
          <div class="deals__product-rating">
            <StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><a href="#" class="deals__product-rating--number">( 4 )</a>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£159.95</p>
              <p class="deals__price--number">£151.95</p>
            </div>
            <ul class="deals__tags">
              <li class="tag tag__discount">Save 5%</li>
              <li class="tag tag__free-ship">Free Shipping</li>
            </ul>
          </div>

          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>

        <li class="deals__list--item" v-if="dealsDisplay === false">
          <img
            src="../images/deals/seasonic-psu.webp"
            class="deals__product-image"
            alt="Image of Seasonic Prime 650W PSU"
          />

          <p class="deals__product-name">
            Seasonic Prime TX-650 650W 80 Plus Titanium Modular Power Supply
          </p>
          <div class="deals__product-rating">
            <StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><StarIcon class="deals__product-rating--star"></StarIcon
            ><a href="#" class="deals__product-rating--number">( 25 )</a>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£174.95</p>
              <p class="deals__price--number">£166.20</p>
            </div>

            <ul class="deals__tags">
              <li class="tag tag__discount">Save 5%</li>
              <li class="tag tag__next-day">Free Next Day*</li>
            </ul>
          </div>
          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>

        <li class="deals__list--item" v-if="dealsDisplay === false">
          <img
            src="../images/deals/asus-mouse.webp"
            alt="Image of ASUS ROG Keris Gaming Mouse "
            class="deals__product-image"
          />
          <p class="deals__product-name">
            ASUS ROG Keris Optical RGB USB Lightweight FPS Gaming Mouse
            (90MP01R0-B0UA00)
          </p>
          <div class="deals__product-rating">
            <p class="deals__product-rating--noreview">No customer reviews</p>
          </div>
          <div class="deals__text-box">
            <div class="deals__price">
              <p class="deals__price--number deals__price--offer">£56.99</p>
              <p class="deals__price--number">£53.00</p>
            </div>

            <ul class="deals__tags">
              <li class="tag tag__discount">Save 7%</li>
            </ul>
          </div>
          <div class="deals__buttons">
            <button class="button button--grey">View Details</button>
            <button class="button button--green">Add to Basket</button>
          </div>
        </li>
        <ChevronRightIcon
          class="slide-button deals__slide-button--right"
          @click.prevent="changeDeals"
        ></ChevronRightIcon>
      </ul>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/outline";
import { StarIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    StarIcon,
  },
  setup() {
    const store = useStore();
    const dealsDisplay = computed(() => store.getters.getDealsDisplay);

    function changeDeals() {
      store.dispatch("changeDeals");
    }
    return {
      changeDeals,
      dealsDisplay,
    };
  },
};
</script>

<style scoped>
.deals {
  margin-top: 4.8rem;
}

.deals__heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.deals__heading--timer {
  font-weight: 700;
  text-transform: uppercase;
}

.deals__list {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2.4rem;
  position: relative;
}

.deals__list--item {
  background-color: #fff;
  list-style: none;
  width: 18%;
  min-height: 50rem;
  padding: 1.5rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  animation: moveInRight 1s ease-out;
  /* transition: 1s all ease-in-out; */
  border: 0.1rem solid #999;
}

.deals__list--item:hover,
.deals__list--item:active {
  border: 1px solid #fff;
  overflow: visible;
  z-index: 10;
  /* padding: 2rem 3rem; */
  box-shadow: 0rem 3rem 2.2rem rgba(0, 0, 0, 0.04);
  transform: translateY(-1.2rem);
  transition: 0.3s ease-in-out;
  border: 1px solid black;
}

.deals__image-wrapper {
  width: 70%;
  align-self: center;
}

.deals__product-image {
  width: 100%;
  height: 15rem;
  object-fit: contain;
  align-self: flex-start;
}

.deals__product-rating {
  display: flex;
  align-items: center;
}

.deals__product-rating--star {
  width: 1.2rem;
  height: 1.2rem;
  color: orange;
}
.deals__product-rating--number {
  font-size: 1.2rem;
  text-decoration: none;
}

.deals__product-rating--number:hover,
.deals__product-rating--number:active {
  text-decoration: underline;
}

.deals__product-rating--noreview {
  font-size: 1.2rem;
}

.deals__text-box {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: space-between;
  margin-top: auto;
}

.deals__product-name {
  font-weight: 600;
}

.deals__price {
  display: flex;
  gap: 0.8rem;
  align-items: flex-end;
}
.deals__price--number {
  font-size: 2.4rem;
}

.deals__price--offer {
  text-decoration: line-through;
  font-size: 1.6rem;
  color: rgb(216, 2, 2);
}

.deals__tags {
  display: flex;
  list-style: none;
  gap: 0.6rem;
  font-size: 1.2rem;
  justify-content: space-between;
}
.deals__buttons {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.deals__slide-button--left {
  position: absolute;
  top: 50%;
  left: -0.2rem;
  transform: translate(-50%, -50%);
}
.deals__slide-button--right {
  position: absolute;
  top: 50%;
  right: -0.2rem;
  transform: translate(50%, -50%);
}
</style>
