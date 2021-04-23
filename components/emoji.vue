<template>
  <span :aria-label="label" role="img"><slot></slot></span>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>
