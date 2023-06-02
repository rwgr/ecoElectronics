<template>
  <header class="header">
    <div class="header__row header__row--1">
      <div class="header__menu--container">
        <img
          src="../images/icons/header/menu.svg"
          alt="menu icon"
          class="header__icon header__icon--menu"
          :class="menuState ? 'header__menu-open' : null"
          @click.prevent="menuClick"
        />

        <a href="#"
          ><img
            src="../images/logos/header/logo-ecoElectronics.webp"
            class="header__logo"
        /></a>
      </div>
      <form class="header__search">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          class="header__search--bar"
        />

        <img
          src="../images/icons/header/search-sharp.svg"
          alt="search icon"
          class="header__icon header__icon--search"
        />
      </form>
      <div class="header__account">
        <img
          src="../images/icons/header/person-circle-outline.svg"
          alt="account icon"
          class="header__icon header__icon--account"
        />
        <div class="header__account-textlinks">
          <p class="header__account--text">Account</p>
          <a href="#" class="header__account--links">Login / Register</a>
        </div>
      </div>
      <div class="header__basket">
        <img
          src="../images/icons/header/cart-outline.svg"
          alt="cart icon"
          class="header__icon"
        />
      </div>
    </div>

    <nav class="header__row header__row--2">
      <div class="container header__categories">
        <div class="header__category header__category--eco">Eco Range</div>
        <div class="header__category">Desktops</div>
        <div class="header__category">Laptops</div>
        <div class="header__category">Tablets</div>
        <div class="header__category">Components</div>
        <div class="header__category">Accessories</div>
        <div class="header__category">Networking</div>
        <div class="header__category">TV & Audio</div>

        <div class="header__category">Office</div>
        <div class="header__category header__category--sale">SALE</div>
        <div class="header__category">Blog</div>
      </div>
    </nav>
    <nav class="header__row header__row--3">
      <form class="header__search header__3-container">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          class="header__search--bar header__3-search"
        />

        <img
          src="../images/icons/header/search-sharp.svg"
          alt="search icon"
          class="header__icon header__icon--search header__3-icon"
        />
      </form>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const menuState = computed(() => store.getters.getMenuState);

    function menuClick() {
      store.dispatch("menuClick");
    }

    return { menuClick, menuState };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0vh;
  z-index: 1000;
}

.header__icon {
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: 0.3s ease-out;
}

.header__icon:hover,
.header__icon:active {
  background-color: #999;
}

.header__menu--container {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.header__logo {
  max-height: 7.6rem;
  cursor: pointer;
}

.header__icon--menu {
  width: 5rem;
  height: 5rem;
  z-index: 1001;
}

.header__row {
  display: flex;
  padding: 0.6rem 2rem;
}
.header__row--1 {
  background-color: #999;
  justify-content: space-between;
  background-color: #0a8953;
  align-items: center;
}

.header__search {
  display: flex;
  min-width: 35%;
  align-items: center;
}
.header__search--bar {
  height: 3rem;
  width: 100%;
  padding: 1.8rem 1.4rem;
  font-style: inherit;
}

.header__icon--search {
  background-color: #fff;
  border: none;
  text-decoration: none;
  padding: 0.1rem;
  height: 3.8rem;
  width: 3.8rem;
}

.header__icon--search:active {
  background-color: #999;
}

.header__account {
  display: flex;
  padding: 0.2rem 0.4rem;
}

.header__icon--account {
  margin-right: 0.8rem;
}
.header__account--text {
  margin-bottom: 0.2rem;
  font-weight: 600;
  font-size: 1.92rem;
  color: #fff;
}
.header__account--links {
  color: #fff;
}

.header__basket {
  display: flex;
}

.header__row--2 {
  background-color: #777;
  justify-content: space-between;
  box-shadow: 0 0.3rem 0.2rem rgba(0, 0, 0, 0.1);
}

.header__categories {
  display: flex;
  color: #fff;
  gap: 0.4rem;
}
.header__category {
  cursor: pointer;
  padding: 0 1.2rem;
  font-size: 1.4rem;
  transition: 0.3s ease-out;
}

.header__category:hover,
.header__category:active {
  background-color: #999;
  color: #fff;
}

.header__category--eco {
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #0a8953;
  color: #fff;
}

.header__category--sale {
  font-size: 1.6rem;
  font-weight: 700;
  background-color: rgb(216, 2, 2);
}

.header__row--3 {
  background-color: #0a8953;
  border-bottom: 1px solid #777;
  box-shadow: 0 0.3rem 0.2rem rgba(0, 0, 0, 0.1);
  display: none;
  width: 100%;
}

.header__3-container {
  width: 50rem;
  margin: auto;
}

.header__3-search {
  min-width: 100%;
}

.header__menu-open {
  background-color: #333;
}
</style>
