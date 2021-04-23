<template>
  <div class="featured">
    <h2>Featured {{ type }}</h2>
    <h3>{{ item.title }}</h3>
    <span class="conf">{{ item.conference }}</span>
    <p>
      {{ item.blurb }}
    </p>
    <p v-if="isTalk" class="more">
      <a :href="item.video_url">Watch</a> <emoji label="eyes icon">👀</emoji>
    </p>
    <p v-else class="more">
      <a :href="`/blog/${item.url_slug}`">Read more</a
      ><emoji label="pointing right">👉</emoji>
    </p>
  </div>
</template>
<script>
import emoji from "./emoji.vue";
export default {
  components: { emoji },
  props: {
    type: {
      type: String,
      default: "post"
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isTalk() {
      return this.type === "talk";
    }
  }
};
</script>
<style scoped>
.featured {
  margin: 2rem 0;
}

p {
  margin: 1rem 0;
}

.more span {
  margin-left: 5px;
}
</style>
