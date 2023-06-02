<template>
  <div class="testimonials-news">
    <div class="container testimonials-news__flex">
      <div class="testimonials">
        <h3 class="heading-tertiary testimonials__heading">
          Why use ecoElectronics? See what our customers have to say:
        </h3>
        <ul class="testimonials__list">
          <li class="testimonial" v-if="activeTestimonial === 1">
            <p class="testimonial__quote">
              "Great service, keeps me informed and aware of how I can make
              better more sustainable purchases."
            </p>
            <p class="testimonial__customer">&mdash; Darwin Sanchez</p>
          </li>
          <li class="testimonial" v-if="activeTestimonial === 2">
            <p class="testimonial__quote">
              "I've learned a lot my electronics energy efficiency. I hope that
              more companies start following in ecoElectronics footsteps."
            </p>
            <p class="testimonial__customer">&mdash; Edmond Noels</p>
          </li>
          <li class="testimonial" v-if="activeTestimonial === 3">
            <p class="testimonial__quote">
              "I regularly find good deals on this website, and the delivery is
              always on time!"
            </p>
            <p class="testimonial__customer">&mdash; Terry</p>
          </li>
          <li class="testimonial" v-if="activeTestimonial === 4">
            <p class="testimonial__quote">
              "I recommend ecoElectronics to all my friends, can't see any
              reason to use another retailer for my computer parts again."
            </p>
            <p class="testimonial__customer">&mdash; Reynold Malcolms</p>
          </li>
        </ul>
        <ul class="testimonials__pagination">
          <button
            class="testimonials__pagination-button"
            :class="
              activeTestimonial === 1
                ? 'testimonials__pagination-button--active'
                : ''
            "
            @click.prevent="changeActiveTestimonial(1)"
          ></button>
          <button
            class="testimonials__pagination-button"
            :class="
              activeTestimonial === 2
                ? 'testimonials__pagination-button--active'
                : ''
            "
            @click.prevent="changeActiveTestimonial(2)"
          ></button>
          <button
            class="testimonials__pagination-button"
            :class="
              activeTestimonial === 3
                ? 'testimonials__pagination-button--active'
                : ''
            "
            @click.prevent="changeActiveTestimonial(3)"
          ></button>
          <button
            class="testimonials__pagination-button"
            :class="
              activeTestimonial === 4
                ? 'testimonials__pagination-button--active'
                : ''
            "
            @click.prevent="changeActiveTestimonial(4)"
          ></button>
        </ul>
      </div>
      <div class="newsletter">
        <h3 class="heading-secondary newsletter__heading">
          Signup to our newsletter
        </h3>
        <p>
          Keep informed of our latest offers, new products and green tech news
          updates sent directly to your inbox.
        </p>
        <form class="newsletter__email-form">
          <input
            class="newsletter__email-form--input"
            type="email"
            name="email"
            placeholder="Enter your email here"
          />
          <button class="button button--green newsletter__email-form--button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const activeTestimonial = computed(
      () => store.getters.getActiveTestimonial
    );
    function changeActiveTestimonial(pageNo) {
      store.dispatch("changeActiveTestimonial", pageNo);
    }
    return {
      activeTestimonial,
      changeActiveTestimonial,
    };
  },
};
</script>

<style scoped>
.testimonials-news {
  margin-top: 4.8rem;
  background-color: #999;
}

.testimonials-news__flex {
  padding: 2.4rem;
  display: flex;
  gap: 2.4rem;
}

.testimonials {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonials__list {
}
.testimonial {
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  animation: moveInLeft 1s ease-out;
}
.testimonial__quote {
  margin-top: 0.6rem;
}
.testimonial__customer {
  margin-top: 0.4rem;
  font-style: italic;
}

.testimonials__pagination {
  display: flex;
  align-self: center;
  gap: 0.8rem;
  margin-top: auto;
}
.testimonials__pagination-button {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.testimonials__pagination-button:hover,
.testimonials__pagination-button:active {
  background-color: #fff;
}
.testimonials__pagination-button--active {
  background-color: #890a40;
}

.newsletter {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-left: 1px solid #333;
  padding: 0 2.4rem;
}

.newsletter__heading {
}

.newsletter__email-form {
  display: flex;
}

.newsletter__email-form--input {
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  width: 80%;
  font-style: inherit;
}

.newsletter__email-form--button {
  padding: 1.35rem 2rem;
  font-size: 1.6rem;
  width: auto;
}
</style>
