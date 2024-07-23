<template>
  <nav>
    <ul>
      <li v-for="(link, idx) in links" :key="idx">
        <a :href="`/${link.toLowerCase()}`">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: ["About", "Talks", "Uses"]
    };
  }
};
</script>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
}

ul li {
  margin-right: 1rem;
}
</style>
