<template>
  <section class="section container">
    <div class="columns">
      <div class="column is-3">
        <a class="button is-primary is-block is-alt is-medium" href="#">New Post</a>
      </div>
      <div class="column is-9">
        <div class="box content">
          <h4 class="title">
            Selling an item
          </h4>
          <ItemForm />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ItemForm from "@/components/Item/ItemForm"

export default {
  components: {
    ItemForm,
  },
}
</script>
