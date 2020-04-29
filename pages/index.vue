<template>
  <div>
    <Hero />
    <div class="container">
      <ItemList
        :items="items"
        :load-more-items="loadMoreItems"
        :is-button-available="isThereMore"
      />
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/Item/ItemList"
import Hero from "@/components/Common/Hero"

export default {
  components: {
    ItemList,
    Hero,
  },
  async fetch({ app }) {
    await app.store.dispatch("item/loadItems")
  },
  data() {
    return {
      title: "Dolly Market",
      pageNum: 1,
    }
  },
  computed: {
    items() {
      return this.$store.getters["item/getItems"]
    },
    isThereMore() {
      return this.pageNum * 8 > this.items.length
    },
  },
  methods: {
    async loadMoreItems() {
      await this.$store.dispatch("item/loadMoreItems", ++this.pageNum)
    },
  },
}
</script>
