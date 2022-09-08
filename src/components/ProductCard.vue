<template>
  <div class="card p-3 mt-2">
    <div class="d-flex justify-content-between align-items-center" style="height: 250px;">
      <div class="mt-5">
        <h4>{{ props.id }}</h4>
        <h6 class="text-uppercase mb-0">{{ props.maker }}</h6>
        <h2>${{ props.price.toFixed(2) }}</h2>
        <div class="d-flex flex-row user-ratings">
          <div class="ratings">
            <i class="fa fa-star" v-for="i in props.ratings" style="color: #ffdc10"></i>
            <i class="fa fa-star" v-for="i in 5-props.ratings" style="color: lightgray"></i>
          </div>
          <p class="ml-2">{{ props.ratings }}.0</p>
        </div>
      </div>
      <div class="image">
        <img :src="props.img" width="125">
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
      <div>
        <a :href="props.details" target="_blank"> More details </a>
      </div>
    </div>
    <button class="btn btn-danger" @click="() => emits('onAddCard')">Add to cart</button>
  </div>
</template>

<script setup>
const props = defineProps(['id', 'maker', 'img', 'price', 'ratings','details','total'])

const emits = defineEmits(["onAddCard"])

</script>

<style scoped>

</style>
