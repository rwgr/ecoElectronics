<template>
  <div class="container">
    <div class="articles__heading">
      <h2 class="heading-secondary">Blog Posts and Tech News</h2>
      <a href="#" class="button button--grey articles__heading--link-sm"
        >View all</a
      >
    </div>
    <div class="articles">
      <article class="article">
        <div class="article__subheading">
          <p class="heading-subheading">blog</p>
          <p class="heading-subheading">15/08/2022</p>
        </div>

        <h3 class="heading-tertiary">
          Green Computing, a sustainable future for tech?
        </h3>
        <p class="article__description">
          Read our latest blog post discussing the sustainability of technology.
          We break down the most challenging aspects of reducing the ecological
          footprint of computing, and recent advances that are seeking to imrove
          this.
        </p>
        <a href="#" class="button button--green article__button">Read Post</a>
      </article>
      <article class="article">
        <div class="article__subheading">
          <p class="heading-subheading">tech news</p>
          <p class="heading-subheading">14/08/2022</p>
        </div>
        <h3 class="heading-tertiary">Title</h3>
        <p class="article__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          debitis eius tempora reprehenderit laudantium vel voluptas in tenetur.
          Nihil, harum? Perspiciatis culpa eveniet error, eum assumenda dicta
          quo corrupti provident!
        </p>
        <a href="#" class="button button--red article__button">Read Post</a>
      </article>
      <article class="article">
        <div class="article__subheading">
          <p class="heading-subheading">blog</p>
          <p class="heading-subheading">14/08/2022</p>
        </div>
        <h3 class="heading-tertiary">Computer lighting and how to disable</h3>
        <p class="article__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          adipisci quis quam. Quo eligendi laboriosam rem amet minus eos
          quibusdam voluptates molestias! Quis dolor impedit earum voluptate cum
          eos quod!
        </p>
        <a href="#" class="button button--green article__button">Read Post</a>
      </article>
      <article class="article">
        <div class="article__subheading">
          <p class="heading-subheading">blog</p>
          <p class="heading-subheading">10/08/2022</p>
        </div>
        <h3 class="heading-tertiary">PSUs - energy efficiency vs. cost</h3>
        <p class="article__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          repellendus eligendi, sequi omnis eum quae, aliquam et quo unde
          facere, perferendis reiciendis expedita ducimus? Eos provident laborum
          similique aliquam totam!
        </p>
        <a href="#" class="button button--green article__button">Read Post</a>
      </article>
    </div>
  </div>
</template>

<style scoped>
.articles__heading {
  margin-top: 4.8rem;
  background-color: #fff;
  padding: 1.2rem 2.4rem;
  border: 0.1rem solid #999;
  border-bottom: 4px dashed #0a8953;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.articles__heading--link-sm {
  width: 12rem;
  padding: 0.4rem 0.8rem;
}

.articles {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 1.2rem 0 0 0;
  border: 0.1rem solid #999;
  border-top: none;
}

.article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  gap: 1.2rem;
  padding: 2.4rem 2rem;
  border-right: 2px solid #777;
}

.article:last-child {
  border: none;
}

.article__subheading {
  display: flex;
  justify-content: space-between;
}

.article__description {
}
</style>
