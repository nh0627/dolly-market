<template>
  <div>
    <Hero />
    <div class="container">
      <ItemList :items="items" :load-more-items="loadMoreItems" />
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/Item/ItemList"
import Hero from "@/components/UI/Hero"

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
  },
  methods: {
    // Todo: disabled 처리 해야 함 => 리스트 메타 데이터 생성
    async loadMoreItems() {
      await this.$store.dispatch("item/loadMoreItems", ++this.pageNum)
    },
  },
}
</script>
