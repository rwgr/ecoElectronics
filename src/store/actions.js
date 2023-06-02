export default {
  changePage(context, payload) {
    context.commit("changePage", payload);
  },
  changeActiveTestimonial(context, payload) {
    context.commit("changeActiveTestimonial", payload);
  },
  changeDeals(context) {
    context.commit("changeDeals");
  },
  menuClick(context) {
    context.commit("menuClick");
  },
  menuClose(context) {
    context.commit("menuClose");
  },
  updateCatCategory(context, payload) {
    context.commit("updateCatCategory", payload);
  },
};
