<template>
  <header>
    <div class="hero-content">
      <h1>Hi, I'm Cecy Correa!</h1>
      <p>I'm a Software Engineer at <span class="highlight">Netlify</span>.</p>
      <p>
        Previously at <span class="highlight">Shopify</span> and
        <span class="highlight">Thinkful</span>.
      </p>
      <social-links />
    </div>
  </header>
</template>
<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 80vh;
}

h1 {
  font-family: "Poppins";
  font-size: 2rem;
}

p {
  font-family: "Work Sans";
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
}

.hero-content {
  text-align: center;
  width: 80%;
}

@media screen and (min-width: 675px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
