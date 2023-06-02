<template>
  <div class="feature-bar">
    <div class="container">
      <ul class="feature-bar__list">
        <li class="feature-bar__item">
          <img
            src="../images/icons/features/earth-outline.svg"
            alt="earth icon"
            class="feature-bar__item--icon"
          />
          <div>
            <p class="feature-bar__item--title">Sustainability</p>
            <p class="feature-bar__item--text">Focus on green electronics</p>
          </div>
        </li>
        <li class="feature-bar__item">
          <img
            src="../images/icons/features/wallet-outline.svg"
            alt="wallet icon"
            class="feature-bar__item--icon"
          />
          <div>
            <p class="feature-bar__item--title">Value</p>
            <p class="feature-bar__item--text">
              Daily deals & finance available
            </p>
          </div>
        </li>
        <li class="feature-bar__item">
          <img
            src="../images/icons/features/calendar-outline.svg"
            alt="calendar icon"
            class="feature-bar__item--icon"
          />
          <div>
            <p class="feature-bar__item--title">Next Day Delivery</p>
            <p class="feature-bar__item--text">Available 7 days a week</p>
          </div>
        </li>
        <li class="feature-bar__item">
          <img
            src="../images/icons/features/flask-outline.svg"
            alt="flask icon"
            class="feature-bar__item--icon"
          />
          <div>
            <p class="feature-bar__item--title">LATEST Green tech</p>
            <p class="feature-bar__item--text">Stocked as a priority</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.feature-bar {
  background-color: #999;
}
.feature-bar__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.2rem;
}
.feature-bar__item {
  list-style: none;
  display: flex;
  padding: 1rem 0rem;
}

.feature-bar__item--icon {
  height: 2.8rem;
  width: 2.8rem;
  margin-right: 0.8rem;
  align-self: center;
}

.feature-bar__item--title {
  text-transform: uppercase;
  font-weight: 600;
}

.feature-bar__item--text {
}
</style>
