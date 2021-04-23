<template>
  <div>
    <h1>{{ post.title }}</h1>
    <span>{{ post.created_asof }}</span>
    {{ title.body }}
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
