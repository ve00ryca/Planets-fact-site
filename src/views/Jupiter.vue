<template>
  <div class="jupiter planets">
    <main>
      <section class="view">
        <img
          src="@/assets/planet-jupiter.svg"
          alt="jupiter"
          class="view-image"
        />
        <div class="view-article">
          <h1>Jupiter</h1>
          <p>
            Jupiter is the fifth planet from the Sun and the largest in the
            Solar System. It is a gas giant with a mass two and a half times
            that of all the other planets in the Solar System combined, but less
            than one-thousandth the mass of the Sun.
          </p>
          <p class="view-options">
            <span>Source: </span>
            <a href="https://en.wikipedia.org/wiki/Jupiter">Wikipedia</a>
          </p>
        </div>
      </section>
      <section id="info"></section>
    </main>
  </div>
</template>
<style scoped>
img {
  max-width: 70%;
  height: auto;
}
</style>
