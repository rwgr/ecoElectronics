<template>
  <div class="eco-range">
    <div class="container">
      <div class="eco-range__heading-container">
        <div class="eco-range__heading-container--1">
          <img
            src="../images/icons/eco/leaf-outline.svg"
            alt="leaf icon"
            class="eco-range__icon"
          />
          <h2 class="heading-secondary">Eco Range</h2>
        </div>

        <h3 class="heading-tertiary">
          Products that meet our
          <a href="#" class="eco-range__heading-link">eco-friendly standards</a>
        </h3>
      </div>
      <div class="eco-range__items">
        <div class="eco-range__item eco-range__item--1">
          <p>Desktops & Laptops</p>
        </div>
        <div class="eco-range__item eco-range__item--2">
          <p>PC Components</p>
        </div>
        <div class="eco-range__item eco-range__item--3">
          <p>TV & Audio</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eco-range {
  margin-top: 4.8rem;
  background-color: #0a8953;
  color: #fff;
  padding: 2.4rem 0 2.4rem 0;
}
.eco-range__heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.eco-range__heading-container--1 {
  display: flex;
  align-items: center;
  margin-right: 10rem;
}
.eco-range__icon {
  height: 4rem;
  margin-right: 1.2rem;
}
.eco-range__heading-link {
  color: #fff;
  font-weight: 600;
}
.eco-range__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.4rem;
}
.eco-range__item {
  height: 20rem;
  width: 30%;
  background-color: black;
  color: #fff;
  border: 1px solid #999;
  display: flex;
  align-items: flex-end;
  font-size: 2.3rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1.2rem;
  transition: 0.8s ease-in-out;
}

.eco-range__item:hover {
  background-size: 120%;
}

.eco-range__item--1 {
  background-image: linear-gradient(
      to right bottom,
      rgba(10, 137, 82, 0.2),
      rgba(10, 137, 82, 0.02)
    ),
    url("../images/ecorange/desktop-laptop.webp");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.eco-range__item--2 {
  background-image: linear-gradient(
      to right bottom,
      rgba(10, 137, 82, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("../images/ecorange/graphics-card.webp");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.eco-range__item--3 {
  background-image: linear-gradient(
      to right bottom,
      rgba(10, 137, 82, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url("../images/ecorange/tv-audio.webp");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>
