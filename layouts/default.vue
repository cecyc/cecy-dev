<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
}

h2 {
  font-family: "Work Sans", Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

h3 {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
}

p,
ul,
li,
a,
span {
  color: rgb(38, 35, 54);
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}

.conf {
  background: rgb(113, 231, 175);
  border-radius: 25px;
  font-size: 0.85rem;
  padding: 0 0.5rem;
  text-transform: uppercase;
  margin: 1rem 0;
  display: inline-block;
}

@media screen and (min-width: 960px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }
}
</style>
