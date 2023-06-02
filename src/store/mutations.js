export default {
  changePage(state, payload) {
    if (payload === "back") {
      state.carouselItem = state.carouselItem - 1;
    }

    if (payload === "forward") {
      state.carouselItem = state.carouselItem + 1;
    }

    if (state.carouselItem > 4) {
      state.carouselItem = 1;
    }

    if (state.carouselItem < 1) {
      state.carouselItem = 4;
    }
  },
  changeActiveTestimonial(state, payload) {
    state.activeTestimonial = payload;
  },
  changeDeals(state) {
    state.dealsDisplay = !state.dealsDisplay;
  },
  menuClick(state) {
    state.menuState = !state.menuState;
    if (state.menuState === false) {
      state.catCategory = null;
    }
  },
  menuClose(state) {
    state.menuState = false;
    state.catCategory = null;
  },
  updateCatCategory(state, payload) {
    state.catCategory = payload;
    console.log(state.catCategory);
  },
};
