<template>
  <div class="earth planets">
    <main>
      <section class="view">
        <img src="@/assets/planet-earth.svg" alt="earth" class="view-image" />
        <div class="view-article">
          <h1>Earth</h1>
          <p>
            Third planet from the Sun and the only known planet to harbor life.
            About 29.2% of Earth's surface is land with remaining 70.8% is
            covered with water. Earth's distance from the Sun, physical
            properties and geological history have allowed life to evolve and
            thrive.
          </p>
          <p class="view-options">
            <span>Source: </span>
            <a href="https://en.wikipedia.org/wiki/Earth">Wikipedia</a>
          </p>
        </div>
      </section>
      <section id="info"></section>
    </main>
  </div>
</template>

<style scoped>
img {
  max-width: 45%;
  height: auto;
}
</style>
