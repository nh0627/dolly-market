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
    // Todo: 아래 생성 로직 스토어로 이동
    async registerNewItem(item) {
      try {
        item.userId = this.$auth.user.pid
        await this.$axios.post(`/api/items`, item)
        // Todo: 생성 했으니 라우트 이동
        this.$buefy.snackbar.open(`Your item has been registered😎`)
      } catch (e) {
        this.$buefy.snackbar.open(`There was an issue. 🤔🤔 Please Try again.`)
      }
    },
  },
}
</script>