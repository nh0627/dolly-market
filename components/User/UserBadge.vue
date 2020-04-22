<template>
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48 is-1by1">
        <img class="is-rounded" :src="image.fileUrl" :alt="image.fileName" />
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-5">
        {{ nickname }}
      </p>
      <p class="subtitle is-6">
        {{ email }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: false,
    },
    nickname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
}
</script>
