<template>
  <div class="home planets">
    <main>
      <section class="view">
        <img
          src="@/assets/planet-mercury.svg"
          alt="mercury"
          class="view-image"
        />
        <div class="view-article">
          <h1>Mercury</h1>
          <p>
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <p class="view-options">
            <span>Source: </span>
            <a href="https://en.wikipedia.org/wiki/Mercury_(planet)"
              >Wikipedia</a
            >
          </p>
        </div>
      </section>
      <section id="info"></section>
    </main>
  </div>
</template>

<style scoped>
img {
  max-width: 30%;
  height: auto;
}
</style>
