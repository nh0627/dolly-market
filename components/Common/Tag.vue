<template>
  <div class="tags are-medium">
    <b-tag v-for="tag in tags" :key="tag.pid" type="is-primary">
      {{ tag.name }}
    </b-tag>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      requried: true,
    },
  },
}
</script>
