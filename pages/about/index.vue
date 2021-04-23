<template>
  <div class="content-wrapper">
    <h1>About</h1>
    <img
      class="profile"
      :src="`${author.profile.fields.file.url}?fm=jpg&fl=progressive`"
      alt="profile photo"
    />
    <vue-markdown class="markdown">{{ author.bio }}</vue-markdown>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
import _ from "lodash";
import { getClient } from "~/plugins/contentful.js";
const client = getClient();

export default {
  layout: "content",
  components: { VueMarkdown },
  asyncData({}) {
    return client
      .getEntries({
        content_type: "author"
      })
      .then(res => {
        const items = res.items.map(item => {
          return item.fields;
        });
        return {
          author: _.first(items)
        };
      });
  }
};
</script>
<style scoped>
p {
  margin: 2rem 0 !important;
}

.profile {
  border-radius: 100%;
  margin-top: 1rem;
  width: 200px;
}
</style>
