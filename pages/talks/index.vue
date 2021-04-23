<template>
  <div class="content-wrapper">
    <h1>
      <emoji label="microphone icon">🎤</emoji>
      Talks
    </h1>
    <featured :item="featured" type="talk" />
    <h2>Other talks</h2>
    <ul class="list">
      <li v-for="(talk, idx) in talks" :key="idx">
        <a :href="talk.video_url" target="_blank">{{ talk.title }}</a>
        <span class="conf">{{ talk.conference }}</span>
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
        content_type: "talk",
        order: "-fields.presented_asof"
      })
      .then(res => {
        const items = res.items.map(item => {
          return item.fields;
        });
        return {
          featured: _.find(items, { featured: true }),
          talks: _.reject(items, item => {
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
  background: rgb(254, 126, 222);
  display: block;
  height: 10px;
  width: 50px;
}
</style>
