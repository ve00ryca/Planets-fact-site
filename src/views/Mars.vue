<template>
  <div class="mars planets">
    <main>
      <section class="view">
        <img src="@/assets/planet-mars.svg" alt="mars" class="view-image" />
        <div class="view-article">
          <h1>Mars</h1>
          <p>
            Mars is the fourth planet from the Sun and the second-smallest
            planet in the Solar System, being larger than only Mercury. In
            English, Mars carries the name of the Roman god of war and is often
            referred to as the \"Red Planet\".
          </p>
          <p class="view-options">
            <span>Source: </span>
            <a href="https://en.wikipedia.org/wiki/Mars">Wikipedia</a>
          </p>
        </div>
      </section>
      <section id="info"></section>
    </main>
  </div>
</template>

<style scoped>
img {
  max-width: 35%;
  height: auto;
}
</style>
