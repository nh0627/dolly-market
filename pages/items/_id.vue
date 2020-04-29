<template>
  <section class="section container">
    <div class="columns">
      <div class="column is-two-fifths">
        <!-- Todo: ribbon UI로 빼기 -->
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
      </div>
    </div>
  </section>
</template>
<script>
import ItemSummary from "@/components/Item/ItemSummary"
import Carousel from "@/components/Common/Carousel"

export default {
  components: {
    ItemSummary,
    Carousel,
  },
  async asyncData({ app, params, store }) {
    const itemId = params.id 
    const items = store.getters["item/getItems"]
    let item = items.find( item => item.pid === itemId)
    item = item ? item : await app.$axios.$get(`/api/items/${itemId}`)
    return { item }
  },
}
</script>
