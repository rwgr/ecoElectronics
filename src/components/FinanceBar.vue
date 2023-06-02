<template>
  <div class="container">
    <div class="finance">
      <img
        src="../images/logos/footer/paypal.svg"
        alt="paypal logo"
        class="finance__paypal-logo"
      />
      <p class="finance__text--heading">Pay Later with PayPal Pay in 3</p>
      <p class="finance__text--description">
        Split purchases into three interest-free monthly payments (T&Cs apply)
      </p>
      <a href="#" class="button button--grey finance__info-button">Learn how</a>
    </div>
  </div>
</template>

<style scoped>
.finance {
  background-color: #555;
  margin-top: 2.4rem;
  gap: 1.2rem;
  height: 8rem;
  background: linear-gradient(to right, #fff, #121660);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.1rem solid #999;
}

.finance__paypal-logo {
  margin-left: 3rem;
}

.finance__text--heading {
  font-weight: 700;
  font-size: 1.92rem;
  color: #121660;
}

.finance__text--description {
  font-size: 1.6rem;
  color: #fff;
  font-weight: 600;
}

.finance__info-button {
  padding: 0.4rem 0.8rem;
  margin-right: 3rem;
  width: auto;
}
</style>
