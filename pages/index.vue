<template>
  <div>
    <Hero />
    <div class="container">
      <ItemList :items="items" />
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
    await app.store.dispatch("item/setItems")
  },
  data() {
    return {
      title: "Dolly-Market",
    }
  },
  computed: {
    items() {
      return this.$store.getters["item/getItems"]
    },
  },
}
</script>
