<template>
  <div class="venus planets">
    <main>
      <section class="view">
        <img src="@/assets/planet-venus.svg" alt="venus" class="view-image" />
        <div class="view-article">
          <h1>Venus</h1>
          <p>
            Venus is the second planet from the Sun. It is named after the Roman
            goddess of love and beauty. As the brightest natural object in
            Earth's night sky after the Moon, Venus can cast shadows and can be,
            on rare occasions, visible to the naked eye in broad daylight.
          </p>
          <p class="view-options">
            <span>Source: </span>
            <a href="https://en.wikipedia.org/wiki/Venus">Wikipedia</a>
          </p>
        </div>
      </section>
      <section id="info"></section>
    </main>
  </div>
</template>

<style scoped>
img {
  max-width: 40%;
  height: auto;
}
</style>
