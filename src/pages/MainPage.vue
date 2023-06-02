<template>
  <main class="main">
    <feature-bar></feature-bar>
    <hero-section></hero-section>
    <category-bar></category-bar>
    <finance-bar></finance-bar>
    <deals-section></deals-section>
    <about-section></about-section>
    <articles-section></articles-section>
    <eco-range-section></eco-range-section>
    <more-deals-section></more-deals-section>
    <testimonials-news-section></testimonials-news-section>
  </main>
</template>

<script>
import FeatureBar from "../components/FeatureBar.vue";
import HeroSection from "../components/HeroSection.vue";
import CategoryBar from "../components/CategoryBar.vue";
import DealsSection from "../components/DealsSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ArticlesSection from "../components/ArticlesSection.vue";
import TestimonialsNewsSection from "../components/TestimonialsNewsSection.vue";
import MoreDealsSection from "../components/MoreDealsSection.vue";
import FinanceBar from "../components/FinanceBar.vue";
import EcoRangeSection from "../components/EcoRangeSection.vue";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    FeatureBar,
    HeroSection,
    CategoryBar,
    DealsSection,
    AboutSection,
    ArticlesSection,
    TestimonialsNewsSection,
    MoreDealsSection,
    FinanceBar,
    EcoRangeSection,
  },
  setup() {
    const store = useStore();

    const menuState = computed(() => store.getters.getMenuState);
    return { menuState };
  },
};
</script>

<style scoped>
.main {
  flex: 1;
  width: 100%;
}
</style>
