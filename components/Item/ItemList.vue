<template>
  <section class="item-list section">
    <div class="columns is-multiline">
      <div v-for="item in items" :key="item.pid" class="column is-one-quarter">
        <ItemCard
          :pid="item.pid"
          :is-new="item.isNew"
          :title="item.title"
          :description="item.description"
          :images="item.images"
          :price="item.price"
          :user="item.user"
          :payment-method="item.paymentMethod"
          :create-date="item.createDate"
        />
      </div>
    </div>
    <b-button :disabled="false" expanded @click="loadMoreItems">
      Show More
    </b-button>
  </section>
</template>

<script>
import ItemCard from "@/components/Item/ItemCard"

export default {
  components: {
    ItemCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    loadMoreItems: {
      type: Function,
      required: true,
    },
  },
}
</script>
