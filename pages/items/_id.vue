<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-fifths">
          <div class="has-ribbon">
            <div
              class="ribbon is-large"
              :class="item.status === 'On sale' ? 'is-primary' : 'is-danger'"
            >
              {{ item.status }}
            </div>
            <Carousel :images="item.images" />
          </div>
        </div>
        <div class="column">
          <ItemSummary
            :title="item.title"
            :description="item.description"
            :price="item.price"
            :user="item.user"
            :tags="item.tags"
          />
          <section class="item-controls">
            <b-button type="is-success" expanded>
              Buy Now
            </b-button>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ItemSummary from "@/components/Item/ItemSummary"
import Carousel from "@/components/UI/Carousel"

export default {
  components: {
    ItemSummary,
    Carousel,
  },
  async asyncData({ params, store }) {
    const itemId = params.id

    await store.dispatch("item/loadItem", itemId)
    const item = store.getters["item/getItem"]

    return { item }
  },
}
</script>

<style scoped>
.item-controls {
  padding: 0 1.5rem;
}
</style>
