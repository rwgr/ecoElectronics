<template>
  <div class="backdrop" @click.prevent="menuClickHandle">
    <nav
      class="menu__container"
      :class="catCategory !== null ? 'menu__container--3-grid' : null"
    >
      <div class="menu__list menu__list-1">
        <ul class="menu__list menu__list-1--1">
          <li class="menu__list-item">Offers</li>
          <li class="menu__list-item">Eco Range</li>
          <li class="menu__list-item">New In</li>
        </ul>
        <ul class="menu__list menu__list-1--2">
          <li class="menu__list-item">About</li>
          <li class="menu__list-item">Blog</li>
          <li class="menu__list-item">Site Map</li>
        </ul>
      </div>
      <ul class="menu__list menu__list-2">
        <h3 class="heading-secondary menu__list-2--heading">Products</h3>
        <li
          class="desktops"
          :class="catCategory === 'desktops' ? 'menu__cat-active' : null"
        >
          Desktops
        </li>
        <li
          class="laptops"
          :class="catCategory === 'laptops' ? 'menu__cat-active' : null"
        >
          Laptops
        </li>
        <li
          class="tablets"
          :class="catCategory === 'tablets' ? 'menu__cat-active' : null"
        >
          Tablets
        </li>
        <li
          class="monitors"
          :class="catCategory === 'monitors' ? 'menu__cat-active' : null"
        >
          Monitors
        </li>
        <li
          class="components"
          :class="catCategory === 'components' ? 'menu__cat-active' : null"
        >
          Components
        </li>
        <li
          class="gaming"
          :class="catCategory === 'gaming' ? 'menu__cat-active' : null"
        >
          Gaming
        </li>
        <li
          class="tv-audio"
          :class="catCategory === 'tv-audio' ? 'menu__cat-active' : null"
        >
          TV & Audio
        </li>
        <li
          class="office"
          :class="catCategory === 'office' ? 'menu__cat-active' : null"
        >
          Office
        </li>
        <li
          class="networking"
          :class="catCategory === 'networking' ? 'menu__cat-active' : null"
        >
          Networking
        </li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'desktops'">
        <h3 class="heading-secondary menu__list-3--heading">Desktops</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Gaming PCs</li>
        <li>Custom-Built PCs</li>
        <li>All-In-One PCs</li>
        <li>Business PCs</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'laptops'">
        <h3 class="heading-secondary menu__list-3--heading">Laptops</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Gaming Laptops</li>
        <li>Notebooks</li>
        <li>Business Laptops</li>
        <li>Laptop Accessories</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'tablets'">
        <h3 class="heading-secondary menu__list-3--heading">Tablets</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Apple iPads</li>
        <li>Android Tablets</li>
        <li>Tablet Accessories</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'monitors'">
        <h3 class="heading-secondary menu__list-3--heading">Monitors</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Gaming Monitors</li>
        <li>Curved Monitors</li>
        <li>4K Monitors</li>
        <li>Monitor Accessories</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'components'">
        <h3 class="heading-secondary menu__list-3--heading">Components</h3>
        <li class="menu__list-3--view-all">View All</li>

        <li>Graphics Cards</li>
        <li>Motherboards</li>
        <li>Memory</li>
        <li>CPUs/Processors</li>
        <li>Power Supplies</li>
        <li>Storage</li>
        <li>Sound Cards</li>
        <li>Fans & Cooling</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'gaming'">
        <h3 class="heading-secondary menu__list-3--heading">Gaming</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Gaming PCs</li>
        <li>Gaming Laptops</li>
        <li>Gaming Components</li>
        <li>Gaming Peripherals</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'tv-audio'">
        <h3 class="heading-secondary menu__list-3--heading">TV & Audio</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Televisions</li>
        <li>Projectors</li>
        <li>Sound Bars</li>
        <li>Sound Systems</li>
        <li>Speakers</li>
        <li>Headphones</li>
        <li>Television Accessories</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'office'">
        <h3 class="heading-secondary menu__list-3--heading">Office</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Chairs</li>
        <li>Desks</li>
        <li>Desks</li>
        <li>Storage</li>
        <li>Fax Machines & Copiers</li>
        <li>Printers & Scanners</li>
        <li>Printer Ink & Toner</li>
      </ul>
      <ul class="menu__list menu__list-3" v-if="catCategory === 'networking'">
        <h3 class="heading-secondary menu__list-3--heading">Networking</h3>
        <li class="menu__list-3--view-all">View All</li>
        <li>Wired Accessories</li>
        <li>Wireless Accessories</li>
        <li>Routers</li>
        <li>Security</li>
        <li>Smart Home</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const catCategory = computed(() => store.getters.getCatCategory);

    function menuClickHandle(e) {
      const target = e.target.className;

      target === "backdrop"
        ? store.dispatch("menuClose")
        : target === "desktops"
        ? store.dispatch("updateCatCategory", "desktops")
        : target === "laptops"
        ? store.dispatch("updateCatCategory", "laptops")
        : target === "tablets"
        ? store.dispatch("updateCatCategory", "tablets")
        : target === "monitors"
        ? store.dispatch("updateCatCategory", "monitors")
        : target === "components"
        ? store.dispatch("updateCatCategory", "components")
        : target === "gaming"
        ? store.dispatch("updateCatCategory", "gaming")
        : target === "tv-audio"
        ? store.dispatch("updateCatCategory", "tv-audio")
        : target === "office"
        ? store.dispatch("updateCatCategory", "office")
        : target === "networking"
        ? store.dispatch("updateCatCategory", "networking")
        : null;
      console.log(target);
    }

    return { menuClickHandle, catCategory };
  },
};
</script>

<style scoped>
.menu__container {
  position: fixed;
  font-size: 1.95rem;
  top: 13.2rem;
  left: 0;
  min-width: 42rem;
  width: 60rem;
  line-height: 1.2;
  z-index: 1000;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  border: 1px solid #999;
  background-color: #fff;
  animation: moveInLeft 0.3s ease-in-out;
}

.menu__container--3-grid {
  grid-template-columns: 0.7fr 1fr 1fr;
}

.menu__list {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2rem 1rem;
}

.menu__list li {
  list-style: none;
  font-size: 1.92rem;
  cursor: pointer;
  font-weight: 600;
  padding: 1rem;
}

.menu__list-item li:hover,
.menu__list-item li:active {
  background-color: #4abd7e;
  color: #fff;
}

.menu__list-1 {
  background-color: rgba(201, 201, 201, 0.767);
  display: flex;
}

.menu__list-1--1 {
  padding: 0 0 2rem 0;
  border-bottom: 1px solid #333;
}

.menu__list-1--1 li:first-child {
  font-weight: 700;
  color: rgb(216, 2, 2);
}

.menu__list-1--2 {
  padding: 0;
}

.menu__list-2 {
}

.menu__list-2--heading {
  color: #0a8953;
  padding: 0 0 1.2rem 0;
  border-bottom: 2px solid #0a8953;
  text-align: center;
}

.menu__list-3 {
  background-color: #0a8953;
  color: #fff;
  animation: moveInLeft 0.3s ease-out;
}

.menu__list-3--heading {
  color: #fff;
  padding: 0 0 1.2rem 0;
  border-bottom: 2px solid #fff;
  text-align: center;
}

.menu__list-3--view-all {
}

.menu__list-3 li:hover,
.menu__list-3 li:active {
  background-color: #333;
}

.menu__cat-active {
  background-color: #0a8953;
  color: #fff;
}
</style>
