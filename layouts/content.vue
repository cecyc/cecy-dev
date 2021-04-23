<template>
  <div class="outer-wrapper">
    <div class="inner-wrapper">
      <navigation />
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
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

.outer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.inner-wrapper {
  width: 80%;
  margin: 0 auto;
}

.content-wrapper {
  margin-bottom: 4rem;
}

.list {
  margin: 2rem 0;
}

@media screen and (min-width: 960px) {
  .inner-wrapper {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
