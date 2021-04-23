<template>
  <div class="content-wrapper">
    <h1>{{ post.title }}</h1>
    <p v-if="post">{{ published }}</p>
    <vue-markdown class="markdown">{{ post.body }}</vue-markdown>
    <content-footer />
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
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "blog_post",
        "fields.url_slug": params.post
      })
      .then(res => {
        return {
          post: _.get(_.first(res.items), "fields")
        };
      });
  },
  computed: {
    published() {
      const date = new Date(this.post.created_asof);
      return date.toLocaleDateString("en-US");
    }
  }
};
</script>
