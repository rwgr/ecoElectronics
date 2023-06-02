<template>
  <div class="about">
    <h2 class="heading-primary about__section-heading">
      What's ecoElectronics?
    </h2>

    <a href="#" class="about__section-heading--link"
      >Find out more about us ></a
    >

    <div class="container about__grid">
      <div class="about__text-box grid__row-1--right">
        <h3 class="heading-secondary">Eco-conscious</h3>
        <p class="about_text-box--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          temporibus maiores explicabo, animi natus cumque dolorem magnam quas
          odio commodi totam impedit blanditiis aspernatur dolore officiis
          tenetur molestias repellendus porro!
        </p>
      </div>
      <div class="about__image-box about__image-box--center grid__row-3--left">
        <img
          src="../images/illustrations/undraw_firmware_re_fgdy.svg"
          alt="firmware illustration"
          class="about__image"
        />
      </div>
      <div class="about__text-box grid__row-2--left">
        <h3 class="heading-secondary">Customer Focused</h3>
        <p class="about_text-box--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          temporibus maiores explicabo, animi natus cumque dolorem magnam quas
          odio commodi totam impedit blanditiis aspernatur dolore officiis
          tenetur molestias repellendus porro!
        </p>
      </div>
      <div class="about__image-box about__image-box--left grid__row-1--left">
        <img
          src="../images/illustrations/undraw_eco_conscious_re_r2bs.svg"
          alt="eco-conscious illustration"
          class="about__image"
        />
      </div>
      <div class="about__text-box grid__row-3--right">
        <h3 class="heading-secondary">Realistic</h3>
        <p class="about_text-box--text">
          We need technology to operate in the modern world, and whilst we can't
          eliminate our ecological impact entirely we can work to reduce it.
          ecoElectronics aim to deliver products made by companies that are
          environmentally conscious and are striving to create greener
          technology. Electronics still have a long way to go in increasing
          efficiency, and we'll keep you informed of all the latest eco-tech
          updates.
        </p>
      </div>
      <div class="about__image-box about__image-box--right grid__row-2--right">
        <img
          src="../images/illustrations/undraw_add_to_cart_re_wrdo.svg"
          alt="add to cart illustration"
          class="about__image"
        />
      </div>
    </div>
    <img
      src="../images/illustrations/blob1.svg"
      class="about__background-image--shape-left"
    />
    <img
      src="../images/illustrations/blob2.svg"
      class="about__background-image--shape-center"
    />
    <img
      src="../images/illustrations/blob3.svg"
      class="about__background-image--shape-right"
    />
  </div>
</template>

<style scoped>
.about {
  margin-top: 4.8rem;
  background: linear-gradient(to right, #4abd7e, #3ba175);
  position: relative;
  z-index: 1;
}

.about__section-heading {
  margin-top: 2.4rem;
  text-align: center;
  padding: 2.4rem 0 0 0;
  z-index: 1;
}

.about__section-heading--link {
  text-align: center;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
}

.about__section-heading--link:hover,
.about__section-heading--link:active {
  text-decoration: underline;
}

.about__grid {
  margin-top: 4.8rem;
  padding: 0 0 4.8rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  row-gap: 2.4rem;
  column-gap: 4.8rem;
}

.about__text-box {
  padding: 0 2.4rem;
  z-index: 1;
}

.about_text-box--text {
  margin-top: 0.8rem;
  font-weight: 600;
}

.about__image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.about__image-box--left:hover {
  animation: moveRight 1s ease-in-out;
}
.about__image-box--center:hover {
  animation: moveUpSlightly 1s ease;
}
.about__image-box--right:hover {
  animation: moveLeft 1s ease-out;
}

.about__image {
  width: 50%;
}

.about__background-image--shape-left {
  width: 50rem;
  position: absolute;
  top: 8rem;
  left: 0;
}

.about__background-image--shape-center {
  width: 50rem;
  position: absolute;
  top: 5rem;
  right: 35%;
}

.about__background-image--shape-right {
  width: 50rem;
  position: absolute;
  top: 22rem;
  right: 3rem;
}
</style>
