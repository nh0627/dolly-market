<template>
  <b-carousel :autoplay="false">
    <b-carousel-item v-for="(image, i) in images" :key="i">
      <section class="hero is-medium">
        <figure class="image">
          <img :src="image.fileUrl" :alt="image.fileName" />
        </figure>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
/* Todo: 나중에 컴포넌트 재활용 대비해서 아래 부분 동적 CSS로 만들어야 함 */
.carousel-background {
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
}
</style>
