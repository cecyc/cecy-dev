<template>
  <div class="content-wrapper">
    <h1>Uses</h1>
    <vue-markdown class="markdown">{{ content.body }}</vue-markdown>
  </div>
</template>
<script>
import _ from "lodash";
import VueMarkdown from "vue-markdown";
import { getClient } from "~/plugins/contentful.js";
const client = getClient();

export default {
  layout: "content",
  components: { VueMarkdown },
  asyncData({}) {
    return client
      .getEntries({
        content_type: "page",
        "fields.title": "uses"
      })
      .then(res => {
        const items = res.items.map(item => {
          return item.fields;
        });
        return {
          content: _.first(items)
        };
      });
  }
};
</script>
<style scoped>
p {
  margin: 2rem 0 !important;
}
</style>
