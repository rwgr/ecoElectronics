<template>
  <div class="container">
    <ul class="category-bar">
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Desktops</p>
        <div class="category-bar__icon-container" title="Desktops">
          <img
            src="../images/icons/categorys/desktop-outline.svg"
            alt="desktop icon"
            class="category-bar__icon"
          />
        </div>
      </li>
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Laptops</p>
        <div class="category-bar__icon-container" title="Laptops">
          <img
            src="../images/icons/categorys/laptop-outline.svg"
            alt="laptop icon"
            class="category-bar__icon"
          />
        </div>
      </li>
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Tablets</p>
        <div class="category-bar__icon-container" title="Tablets">
          <img
            src="../images/icons/categorys/tablet-portrait-outline.svg"
            alt="tablet icon"
            class="category-bar__icon"
          />
        </div>
      </li>
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Monitors</p>
        <div class="category-bar__icon-container" title="Monitors">
          <img
            src="../images/icons/categorys/tv-outline.svg"
            alt="tv icon"
            class="category-bar__icon"
          />
        </div>
      </li>
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Gaming</p>
        <div class="category-bar__icon-container" title="Gaming">
          <img
            src="../images/icons/categorys/game-controller-outline.svg"
            alt="controller icon"
            class="category-bar__icon"
          />
        </div>
      </li>
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Storage</p>
        <div class="category-bar__icon-container" title="Storage">
          <img
            src="../images/icons/categorys/save-outline.svg"
            alt="laptop icon"
            class="category-bar__icon"
          />
        </div>
      </li>
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Processors</p>
        <div class="category-bar__icon-container" title="Processors">
          <img
            src="../images/icons/categorys/hardware-chip-outline.svg"
            alt="processor icon"
            class="category-bar__icon"
          />
        </div>
      </li>
      <li class="category-bar__list-item">
        <p class="category-bar__list-item--title">Audio</p>
        <div class="category-bar__icon-container" title="Audio">
          <img
            src="../images/icons/categorys/headset-outline.svg"
            alt="headset icon"
            class="category-bar__icon"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.category-bar {
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
  background-color: #fff;
  border: 0.1rem solid #999;
}

.category-bar__list-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  width: 10%;
}

.category-bar__list-item--title {
  font-weight: 700;
}

.category-bar__icon-container {
  width: 6rem;
  height: 6rem;
  /* background: linear-gradient(to top, #b7e5cb, #fff); */
  background-color: #fff;
  border-radius: 50%;
  margin-top: 0.1rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.3rem solid #0a8953;
  transition: 0.3s ease-out;
  cursor: pointer;
}

.category-bar__icon {
  width: 4rem;
  height: 4rem;
}

.category-bar__icon-container:hover {
  background-color: #0a89524f;
}
</style>
