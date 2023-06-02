import { createStore } from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      carouselItem: 1,
      activeTestimonial: 1,
      dealsDisplay: true,
      menuState: false,
      catCategory: null,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
