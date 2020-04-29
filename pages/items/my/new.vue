<template>
  <div class="box content">
    <h4 class="title">Selling a new item</h4>
    <ItemForm :submit-form="registerNewItem" />
  </div>
</template>

<script>
import ItemForm from "@/components/Item/ItemForm"

export default {
  components: {
    ItemForm,
  },
  methods: {
    async registerNewItem(item) {
      try {
        await this.$store.dispatch("item/registerItem", item)
        
        this.$buefy.snackbar.open(`Your item has been registered😎`)
      } catch (e) {
        this.$buefy.snackbar.open(`There was an issue. 🤔🤔 Please Try again.`)
    }

    }
  },
}
</script>