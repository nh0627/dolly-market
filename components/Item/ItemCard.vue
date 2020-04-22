<template>
  <nuxt-link :to="`/items/${pid}`">
    <article class="item-card">
      <div class="card is-slightly-rounded">
        <div class="card-image">
          <figure class="image">
            <img
              :src="images[0].fileUrl"
              :alt="title"
              class="is-slightly-rounded"
            />
          </figure>
        </div>
        <div class="card-content">
          <UserBadge
            :image="user.image"
            :nickname="user.nickname"
            :email="user.email"
          />
          <div class="content">
            <h6>{{ title }}</h6>
            $ {{ price }}
          </div>
          <Tag :tags="tags" />
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import UserBadge from "@/components/User/UserBadge"
import Tag from "@/components/UI/Tag"

export default {
  name: "ItemCard",
  components: {
    UserBadge,
    Tag,
  },
  props: {
    pid: {
      type: String,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: false,
    },
    user: {
      type: Object,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    createDate: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
}
</script>
