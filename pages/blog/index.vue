<template>
  <div class="content-wrapper">
    <h1>
      <emoji label="books icon">📚</emoji>
      Blog
    </h1>
    <featured :item="featured" />
    <h2>Other posts</h2>
    <ul class="list">
      <li v-for="(post, idx) in posts" :key="idx">
        <a :href="`/blog/${post.url_slug}`">{{ post.title }}</a>
        <span class="conf">{{ post.conference }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import _ from "lodash";
import { getClient } from "~/plugins/contentful.js";
const client = getClient();

export default {
  layout: "content",
  asyncData({}) {
    return client
      .getEntries({
        content_type: "blog_post",
        order: "-sys.createdAt"
      })
      .then(res => {
        const items = res.items.map(item => {
          return item.fields;
        });
        return {
          featured: _.find(items, { featured: true }),
          posts: _.reject(items, item => {
            return item.featured;
          })
        };
      });
  }
};
</script>
<style scoped>
h1:after {
  content: "";
  background: rgb(252, 221, 81);
  display: block;
  height: 10px;
  width: 50px;
}
</style>
