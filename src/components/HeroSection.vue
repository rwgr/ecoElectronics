<template>
  <div
    class="hero"
    :class="
      carouselItem === 1
        ? 'hero__item--1'
        : carouselItem === 2
        ? 'hero__item--2'
        : carouselItem === 3
        ? 'hero__item--3'
        : ''
    "
  >
    <ChevronLeftIcon
      class="slide-button hero__slide-button--left"
      @click.prevent="changePage('back')"
    ></ChevronLeftIcon>
    <div class="hero__carousel" v-if="carouselItem === 1">
      <div class="hero__text-box hero__desktops">
        <p class="heading-primary hero__desktops-heading">
          Check out our latest Gaming Desktop deals
        </p>
        <a href="#" class="hero__button">Shop Now</a>
      </div>
    </div>
    <div class="hero__carousel" v-if="carouselItem === 2">
      <div class="hero__text-box hero__giveaway">
        <a href="#" class="hero__button">Enter here</a>
      </div>
    </div>
    <div class="hero__carousel" v-if="carouselItem === 3">
      <div class="hero__text-box hero__psus">
        <div class="hero__psus-heading-box">
          <a href="#" class="hero__button hero__psus-button">Shop PSUs</a>
        </div>
        <div class="hero__psus-text-box">
          <p>
            Find out more in our recent
            <a href="#" class="hero__text-box--link-sm"
              >blog post on the topic.</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="hero__carousel container flex-column" v-if="carouselItem === 4">
      <h2 class="heading-secondary hero__blog-header">
        For the latest news in sustainable tech, check out the ecoElectronics
        blog
      </h2>
      <div class="hero__blog-container hero__carousel container">
        <div class="hero__text-box">
          <div class="hero__text-box--subheading">
            <p class="heading-subheading">Blog</p>
            <p class="heading-subheading">15/08/2022</p>
          </div>
          <p class="heading-tertiary">
            Green Computing, a sustainable future for tech?
          </p>
          <p>
            We break down the most challenging aspects of reducing the
            ecological footprint of computing, and recent advances that are
            seeking to improve this.
          </p>
          <a href="#" class="hero__button">Read here</a>
        </div>
        <img
          src="../images/hero/computer-green.webp"
          alt="Computer with green background"
          class="hero__carousel--img"
        />
      </div>
    </div>
    <ChevronRightIcon
      class="slide-button hero__slide-button--right"
      @click.prevent="changePage('forward')"
    ></ChevronRightIcon>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import { ChevronRightIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  setup() {
    const store = useStore();
    const carouselItem = computed(() => store.getters.getCarouselItem);

    function changePage(direction) {
      store.dispatch("changePage", direction);
    }

    return {
      carouselItem,
      changePage,
    };
  },
};
</script>

<style scoped>
.hero {
  min-width: 1vw;
  min-height: 48.5rem;
  border-bottom: 1px solid #999;
  border-top: 1px solid #999;
  margin-top: 0rem;
  position: relative;
  background-color: #c7c7c9;
}

.hero__button {
  background-color: #0a8953;
  color: #fff;
  width: 12rem;
  padding: 1rem 2rem;
  text-decoration: none;
  text-align: center;
  font-size: 2.3rem;
  width: 20rem;
  font-weight: 600;
  transition: 0.3s ease-out;
}

.hero__button:hover,
.hero__button:active {
  background-color: #890a40;
  color: #fff;
}

.hero__text-box {
  padding: 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero__text-box--subheading {
  display: flex;
  justify-content: space-between;
}

.hero__text-box--date {
  margin-left: 4rem;
}

.hero__item--1 {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("../images/hero/hero-background2.webp");

  background-position: 50%;
  background-position-y: 70%;
  background-size: 80%;
  background-repeat: no-repeat;
  background-color: black;
}

.hero__desktops {
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  color: #fff;
  margin-top: 35rem;
  align-items: center;
}

.hero__desktops-heading {
  text-align: center;
}

.hero__item--2 {
  background-color: black;
  color: #fff;
  /* background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("../images/hero/amd.webp"); */
  background-image: url("../images/hero/amd-giveawaynew.webp");
  background-position: 50%;
  background-size: 55%;
  background-repeat: no-repeat;
}
.hero__giveaway {
  display: flex;
  height: 45rem;
  align-items: center;
  justify-content: flex-end;
  margin-left: 4.8rem;
  margin-right: 4.8rem;
  width: 100%;
  padding: 0;
}

.hero__giveaway-text {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero__giveaway-text--p {
  font-size: 2.3rem;
  width: 80%;
}

.hero__item--3 {
  color: #fff;
  background-color: black;
  /* background-image: linear-gradient(
      to top,
      rgba(15, 15, 15, 0.3),
      rgba(15, 15, 15, 0.3)
    ),
    url("../images/hero/psu-ratings.webp"); */
  background-image: url("../images/hero/psu-ratings.webp");
  background-position: 50%;
  background-size: 52%;
  background-repeat: no-repeat;
}

.hero__psus {
  height: 47rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-items: flex-end;
}

.hero__psus-text-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.92rem;
  font-weight: 600;
  padding: 0.4rem;
  background-color: #4d4d4d;
}

.hero__psus-heading-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  justify-items: start;
}

.hero__psus-button {
  grid-column: 3;
}

.hero__text-box--link-sm {
  color: #fff;
  font-weight: 700;
}

.hero__blog-container {
  border: 2px solid #999;
  padding: 2rem;
}
.hero__blog-header {
  text-align: center;
  margin-top: 1.2rem;
  margin-bottom: -1.2rem;
}

.hero__carousel {
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
}

.hero__carousel--img {
  width: 56rem;
  padding: 0.8rem 1.6rem;
  margin-right: 2.4rem;
}

.hero__slide-button--left {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translate(-15%, -50%);
}
.hero__slide-button--right {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translate(15%, -50%);
}
</style>
